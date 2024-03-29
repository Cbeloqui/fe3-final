import React, { useState } from "react";

const Form = () => {
  const [contacto, setContacto] = useState({
    nombre: "",
    correo: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contacto.nombre.length >= 5 && validateEmail(contacto.correo)) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const validateEmail = (email) => {
    const emailRegex =  /^[^\s@]+@[^\s@]+.[^\s@]+.com$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      {mostrar ? null : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            onChange={(event) =>
              setContacto({ ...contacto, nombre: event.target.value })
            }
          />
          <label>E-mail:</label>
          <input
            type="text"
            onChange={(event) =>
              setContacto({ ...contacto, correo: event.target.value })
            }
        />
          <button className="send-button">Send</button>
        </form>
      )}

      {mostrar ? (
        <h2>
          Gracias {contacto.nombre}, nos contactaremos a la brevedad via mail.
        </h2>
      ) : null}
      {error && <h3>Por favor verifique su información e intentelo nuevamente.</h3>}
    </div>
  );
};

export default Form;