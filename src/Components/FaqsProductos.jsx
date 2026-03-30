import React from 'react';
import '../App.css';

const FaqsProductos = () => {
  return (
    <section className="soporte-tecnico-seccion">
      <div className="soporte-cabecera">
        <h2 className="soporte-titulo">
          ESPECIFICACIONES DE RENDIMIENTO Y MANTENIMIENTO
        </h2>
      </div>

      <div className="soporte-contenedor">
        <div className="faq-tecnica">
          <h3 className="faq-pregunta">
            1. Comportamiento del material ante la humedad
          </h3>
          <p className="faq-respuesta">
            Bricko se ha diseñado con un enfoque riguroso para aplicaciones en
            interiores. Debido a su naturaleza higroscópica, el material debe
            permanecer resguardado de la precipitación pluvial y vientos
            fuertes. La exposición directa al agua compromete la estabilidad
            estructural de la matriz de celulosa, por lo que su uso óptimo se
            limita estrictamente a ambientes secos y controlados.
          </p>
        </div>

        <div className="faq-tecnica">
          <h3 className="faq-pregunta">
            2. Seguridad y resistencia ante el fuego
          </h3>
          <p className="faq-respuesta">
            La composición química de la pasta base, fundamentada en enlaces
            poliméricos de amilopectina, garantiza una alta resistencia al
            fuego. Al ser sometido a calor extremo, el bloque no propaga la
            llama; en su lugar, experimenta un proceso de carbonización gradual.
            Esta característica es una ventaja crítica para la seguridad en
            escenografías y desarrollos habitacionales.
          </p>
        </div>

        <div className="faq-tecnica">
          <h3 className="faq-pregunta">
            3. Requerimientos de herramienta para instalación
          </h3>
          <p className="faq-respuesta">
            La maleabilidad es una de las mayores ventajas competitivas de
            nuestra patente. No se requiere maquinaria pesada ni técnicos
            especializados para su manejo. El material permite ser taladrado,
            clavado o atornillado con herramientas manuales comunes, y puede
            cortarse con precisión milimétrica utilizando una segueta
            convencional, lo que reduce drásticamente el ruido en obra.
          </p>
        </div>

        <div className="faq-tecnica">
          <h3 className="faq-pregunta">
            4. Capacidad de absorción de acabados
          </h3>
          <p className="faq-respuesta">
            La textura rústica y plana de los bloques está diseñada para
            integrarse estéticamente con facilidad. La superficie soporta la
            aplicación directa de pinturas vinílicas de base agua o pastas
            decorativas. Al eliminar por completo los tiempos de fraguado de
            mezclas húmedas tradicionales, el proceso de acabado final es
            inmediato y logísticamente eficiente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqsProductos;

