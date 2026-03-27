import React from 'react';
import { Ruler, Weight, EarOff } from 'lucide-react'; // Iconografía técnica

const Productos = () => {
  // TU BASE DE DATOS FANTASMA.
  // Cuando tengas las fotos reales, cambia la URL de 'src' por '/tu-foto.png'
  const inventario = [
    {
      id: 1,
      nombre: 'Bricko Estándar',
      precio: '$14.50 MXN',
      src: 'https://via.placeholder.com/400x300/cccccc/666666?text=FOTO+LADRILLO+1',
      dimensiones: '215 x 102.5 x 65 mm',
      peso: '1.2 kg',
      acustica: 'Aislamiento 45 dB',
    },
    {
      id: 2,
      nombre: 'Bricko Medio',
      precio: '$8.00 MXN',
      src: 'https://via.placeholder.com/400x300/cccccc/666666?text=FOTO+LADRILLO+2',
      dimensiones: '102.5 x 102.5 x 65 mm',
      peso: '0.6 kg',
      acustica: 'Aislamiento 45 dB',
    },
    {
      id: 3,
      nombre: 'Bricko Esquinero',
      precio: '$16.20 MXN',
      src: 'https://via.placeholder.com/400x300/cccccc/666666?text=FOTO+LADRILLO+3',
      dimensiones: '215 x 215 x 65 mm',
      peso: '1.8 kg',
      acustica: 'Aislamiento Especial',
    },
  ];

  return (
    <section className="productos-section">
      <div className="productos-header">
        <h2>MATERIALES BASE</h2>
        <p>
          Especificaciones técnicas y volumétricas de nuestra celulosa
          estructural. Diseñados para optimizar tiempos de instalación y
          maximizar la absorción acústica.
        </p>
      </div>

      <div className="productos-grid">
        {inventario.map((item) => (
          <div key={item.id} className="producto-card">
            <div className="producto-img-box">
              <img src={item.src} alt={item.nombre} />
            </div>

            <div className="producto-info">
              <h3>{item.nombre}</h3>
              <div className="producto-precio">
                {item.precio}{' '}
                <span style={{ fontSize: '1rem', color: '#888' }}>c/u</span>
              </div>

              <ul className="producto-specs">
                <li>
                  <Ruler size={20} color="#22c55e" />{' '}
                  <strong>Dimensiones:</strong> {item.dimensiones}
                </li>
                <li>
                  <Weight size={20} color="#22c55e" />{' '}
                  <strong>Peso Unitario:</strong> {item.peso}
                </li>
                <li>
                  <EarOff size={20} color="#22c55e" />{' '}
                  <strong>Acústica:</strong> {item.acustica}
                </li>
              </ul>

              <button className="producto-btn">Cotizar Volumen</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;
