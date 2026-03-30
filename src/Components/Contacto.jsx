import React from 'react';
import '../App.css';

const Contacto = () => {
  return (
    <div className="contacto-pagina-maestra">
      <section className="contacto-hero-tecnico">
        <h1 className="titulo-seccion-productos">CONTACTO TÉCNICO Y VENTAS</h1>
        <p className="descripcion-cabecera-tecnica">
          Asesoría especializada para proyectos arquitectónicos, cubicación de
          material y logística de envíos a nivel nacional.
        </p>
      </section>

      <section className="contacto-grid-principal">
        <div className="contacto-informacion-columna">
          <h2 className="contacto-subtitulo-form">INFORMACIÓN OPERATIVA</h2>

          <div className="contacto-dato-bloque">
            <h3 className="contacto-etiqueta">DEPARTAMENTO DE VENTAS</h3>
            <p className="contacto-valor">ventas@bricko.com</p>
          </div>

          <div className="contacto-dato-bloque">
            <h3 className="contacto-etiqueta">LÍNEA DIRECTA</h3>
            <p className="contacto-valor">-55-55-55-55-55</p>
          </div>

          <div className="contacto-dato-bloque">
            <h3 className="contacto-etiqueta">COBERTURA</h3>
            <p className="contacto-valor">
              Envíos a toda la República Mexicana. Soporte logístico para
              descargas en obra.
            </p>
          </div>
        </div>

        <div className="contacto-formulario-columna">
          <h2 className="contacto-subtitulo-form">SOLICITUD DE COTIZACIÓN</h2>
          <form
            className="contacto-formulario-tecnico"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-grupo">
              <label htmlFor="nombre" className="form-etiqueta">
                Nombre o Empresa
              </label>
              <input
                type="text"
                id="nombre"
                className="form-entrada"
                placeholder="Ej. Arquitectura Integral S.A."
              />
            </div>

            <div className="form-grupo">
              <label htmlFor="email" className="form-etiqueta">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="form-entrada"
                placeholder="contacto@empresa.com"
              />
            </div>

            <div className="form-grupo">
              <label htmlFor="proyecto" className="form-etiqueta">
                Detalles del Proyecto (Muros, Metraje, Ubicación)
              </label>
              <textarea
                id="proyecto"
                className="form-area-texto"
                rows="5"
                placeholder="Requiero material para 120 metros cuadrados de muro divisorio en corporativo..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="boton-accion-aislado"
              style={{ width: '100%', marginTop: '20px' }}
            >
              ENVIAR REQUERIMIENTO
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
