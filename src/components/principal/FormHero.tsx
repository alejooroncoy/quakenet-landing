import { useState, type FormEventHandler } from "react";
import { toast } from "sonner";

const FormHero = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmitFormSendEmail: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if(response.ok) {
      toast("Correo enviado");
    } else {
      toast("Error al enviar el correo");
    }

    setLoading(false);
  };

  return (
    <form className="form form--hero" onSubmit={handleSubmitFormSendEmail}>
      <input
        name="email"
        className="input input--hero"
        type="email"
        required
        placeholder="Tu correo de empresa"
      />
      <button disabled={loading} className="button button--hero">
        <span className="button__text">Solicitar acceso</span>
        {loading ? (
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
        ) : (
          children
        )}
      </button>
    </form>
  );
};

export default FormHero;
