import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);

    const response = await fetch("/api/request", {
      method: "POST",
      body: JSON.stringify({
        message: data.message,
        email: data.email,
        name: data.name, 
      }),
    });

    if (!response.ok) {
      toast.error("Error al enviar tu petición");
      setLoading(false);
      return;
    }

    const responseEmail = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
      }),
    });

    if (responseEmail.ok) {
      form.reset();
      toast.success("Recibimos tu petición, te responderemos pronto.");
    } else {
      toast.error("Error al enviar tu petición");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form form--contact">
      <div>
        <h2>Contactános</h2>
        <p className="menu__item__description">
          Te responderemos en la brevedad posible.
        </p>
      </div>

      <div className="input-container">
        <label htmlFor="name">Nombre</label>
        <input
          className="input input--contact"
          type="text"
          id="name"
          placeholder="Alejandro Oroncoy"
          name="name"
        />
      </div>

      <div className="input-container">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          className="input input--contact"
          type="email"
          id="email"
          placeholder="mail@example.com"
          name="email"
        />
      </div>

      <div className="input-container">
        <label htmlFor="message">Mensaje</label>
        <textarea
          className="input input--contact textarea"
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí"
        ></textarea>
      </div>

      <button
        disabled={loading}
        className="button button--contact"
        type="submit"
      >
        {loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
            className="button__icon button__icon--loading"
            strokeWidth="2"
          >
            <path d="M12 3a9 9 0 1 0 9 9"></path>
          </svg>
        )}
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
