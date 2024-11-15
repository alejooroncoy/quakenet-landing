const ContactForm = () => {
  return (
    <form className="form form--contact">
      <div>
        <h2>Contactános</h2>
        <p className="menu__item__description">Te responderemos en la brevedad posible.</p>
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

      <button className="button button--contact" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
