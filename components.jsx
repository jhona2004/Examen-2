// components.jsx
import React from "react";
import logo from "./assets/assets/tendai-logo.png";

function QuoteForm() {
  return (
    <div className="form-container">
      <header className="header">
        <img src={logo} alt="Logo de la Empresa" className="logo" />
        <h1>TENDAI</h1>
        <p>Obtén tu cotización personalizada en segundos.</p>
      </header>
      <form className="quote-form">
        <section className="form-section">
          <h2>Información de contacto</h2>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" placeholder="Correo" />
          </div>
        </section>

        <section className="form-section">
          <h2>Información adicional</h2>
          <div className="form-group">
            <label htmlFor="quantity">Cantidad de productos</label>
            <input type="number" id="quantity" placeholder="Cantidad de productos" />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryType">Tipo de entrega</label>
            <select id="deliveryType">
              <option value="">Seleccionar</option>
              <option value="express">Express</option>
              <option value="regular">Regular</option>
            </select>
          </div>
        </section>

        <div className="form-group terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Acepto los términos y condiciones</label>
        </div>

        <button type="submit" className="submit-button">Enviar cotización</button>
      </form>
    </div>
  );
}

export default QuoteForm;
