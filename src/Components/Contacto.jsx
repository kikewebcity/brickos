import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contacto = () => {
  return (
    <section className="contacto-section">
      <div className="contacto-grid">
        {/* LA REALIDAD FÍSICA (Izquierda) */}
        <div className="contacto-info">
          <h2 className="contacto-title">Hablemos de tu próximo proyecto.</h2>
          <p className="contacto-subtitle">
            Ya sea una remodelación de interiores o un proyecto a escala
            industrial, nuestra ingeniería está lista para cotizar tu material.
          </p>

          <div className="info-item">
            <div className="info-icon-box">
              <MapPin size={28} />
            </div>
            <div className="info-text">
              <h4>Ubicación</h4>
              <p>Ciudad de México, CDMX</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">
              <Phone size={28} />
            </div>
            <div className="info-text">
              <h4>Teléfono Directo</h4>
              <p>+52 55 5555 5555</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">
              <Mail size={28} />
            </div>
            <div className="info-text">
              <h4>Correo Comercial</h4>
              <p>ventas@bricko.com</p>
            </div>
          </div>
        </div>

        {/* EL EMBUDO DE DATOS (Derecha) */}
        <div className="contacto-form-box">
          <h3>SOLICITAR COTIZACIÓN</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Nombre Completo o Empresa"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Correo Electrónico"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-input"
                placeholder="Teléfono de Contacto"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-input"
                placeholder="Cuéntanos sobre tu proyecto (Metros cuadrados, tipo de muro, etc.)"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              ENVIAR SOLICITUD
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
