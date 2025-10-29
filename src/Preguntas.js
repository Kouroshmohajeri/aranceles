import React, { useState } from "react";
import "./Preguntas.css";

const Preguntas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "¿Simplemente qué significa el Valor de Aduana?",
      answer: "El valor real que tiene lo que traes al país",
    },
    {
      question:
        "¿Cómo se calcula un IVA si algo cuesta 20.000 euros y el arancel es 20%?",
      answer: (
        <div>
          <p>
            <strong>Cálculo paso a paso:</strong>
          </p>
          <p>1. Valor de la mercancía: 20.000 €</p>
          <p>2. Arancel (20%): 20.000 € × 0.20 = 4.000 €</p>
          <p>3. Base imponible para IVA: 20.000 € + 4.000 € = 24.000 €</p>
          <p>4. IVA (21% en España): 24.000 € × 0.21 = 5.040 €</p>
          <p>
            <strong>Total a pagar:</strong> 20.000 € + 4.000 € + 5.040 € ={" "}
            <strong>29.040 €</strong>
          </p>
        </div>
      ),
    },
    {
      question: "¿Cuáles son los principales tipos de aranceles?",
      answer: (
        <ul>
          <li>
            <strong>Ad valorem:</strong> se calcula como un porcentaje sobre el
            valor de la mercancía (por ejemplo, 10 % sobre un coche de 20 000 €
            → 2 000 €).
          </li>
          <li>
            <strong>Específico:</strong> se aplica una cantidad fija por unidad
            física (por ejemplo, 50 € por tonelada de trigo).
          </li>
          <li>
            <strong>Mixto:</strong> combina ambos tipos (por ejemplo, 10 % sobre
            el valor + 20 € por tonelada).
          </li>
          <li>
            <strong>Compuesto:</strong> varía según el valor o la cantidad de la
            mercancía, o si se supera un cupo de importación.
          </li>
        </ul>
      ),
    },
    {
      question: "¿Cuáles son sus principales funciones de un arancel?",
      answer: (
        <ol>
          <li>
            <strong>Recaudatoria:</strong> generar ingresos para el Estado.
          </li>
          <li>
            <strong>Protectora:</strong> proteger la industria nacional
            encareciendo los productos extranjeros.
          </li>
          <li>
            <strong>Reguladora:</strong> controlar qué tipo y cantidad de
            productos entran o salen del país.
          </li>
          <li>
            <strong>Negociadora:</strong> servir como herramienta en acuerdos
            comerciales.
          </li>
          <li>
            <strong>Social y medioambiental:</strong> favorecer prácticas
            sostenibles y proteger al consumidor.
          </li>
        </ol>
      ),
    },
  ];

  return (
    <div className="preguntas-container">
      <h1 className="preguntas-title">Preguntas sobre Aranceles</h1>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.question}</h3>
              <span className="accordion-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`accordion-content ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="accordion-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preguntas;
