import React from "react";
import styles from "./Diagnostic.module.css";
import image from "../../../../assets/Images/components.png";

const Diagnostic = () => {
  return (
    <section className={styles.lp_section}>
      {/* <div className="container"> */}
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full lg:w-3/7">
            <img src={image} alt="Componentes" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2>Como Resolvemos Seu Problema</h2>
            <p className="mb-4">Nossa metodologia profissional em 5 passos:</p>
            <ul className={styles.lp_list}>
              <li>
                <strong>Diagnóstico preciso:</strong> Identificamos qual
                componente está sem driver
              </li>
              <li>
                <strong>Busca oficial:</strong> Baixamos driver direto do site
                do fabricante (Dell, HP, Lenovo, etc.)
              </li>
              <li>
                <strong>Instalação correta:</strong> Seguimos procedimento
                técnico adequado
              </li>
              <li>
                <strong>Configuração otimizada:</strong> Ajustamos parâmetros
                para melhor desempenho
              </li>
              <li>
                <strong>Teste completo:</strong> Validamos que tudo está
                funcionando 100%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;
