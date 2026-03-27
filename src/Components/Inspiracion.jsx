import React from 'react';

const Inspiracion = () => {
  // La matriz visual. Sustituye los nombres y rutas conforme consigas mejores fotos.
  const galeria = [
    { src: '/banop.jpg', titulo: 'Baño Industrial' },
    { src: '/oficinap.jpg', titulo: 'Corporativo Central' },
    { src: '/seccion2.jpg', titulo: 'Estudio Creativo' },
    { src: '/seccion3.jpg', titulo: 'Lobby Minimalista' },
    { src: '/fondocara.jpg', titulo: 'Prototipo Estructural' },
    // Espacios huecos esperando materia prima:
    { src: '/pendiente1.jpg', titulo: 'Loft Residencial' },
    { src: '/pendiente2.jpg', titulo: 'Boutique Urbana' },
    { src: '/pendiente3.jpg', titulo: 'Restaurante Concepto' },
  ];

  return (
    <section className="inspiracion-section">
      <div className="inspiracion-header">
        <h2>EL LADRILLO COMO LIENZO</h2>
        <p>
          Una galería visual para que mentes arquitectónicas proyecten sus
          espacios. Explora cómo la celulosa reciclada muta para adaptarse a
          cualquier exigencia estética y acústica en el mundo real.
        </p>
      </div>

      <div className="inspiracion-grid">
        {galeria.map((item, index) => (
          <div key={index} className="inspiracion-item">
            <img
              src={item.src}
              alt={item.titulo}
              /* El seguro de vida contra imágenes no subidas */
              onError={(e) => {
                e.target.src =
                  'https://via.placeholder.com/600x450/1a1a1a/444444?text=IMAGEN+PENDIENTE';
              }}
            />
            <div className="inspiracion-overlay">
              <h3>{item.titulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inspiracion;
