import React from "react";
import styles from "./DiagnosticWindows.module.css";
import image from "../../../../assets/Images/windows.jpg";

const DiagnosticWindows = () => {
  return (
    <section className={styles.lp_section}>
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="w-full  lg:w-3/7">
            <img src={image} alt="Teclado-roto" />
          </div>
          <div className="w-full lg:w-3/7">
            <h2>¿Cuándo merece la pena reinstalarlo?</h2>
            <ul className={styles.lp_list}>
              <li>
                <strong>Lentitud crónica: </strong>La PC acumula años de
                programas y archivos temporales.
              </li>
              <li>
                <strong>Infección por virus: </strong>Software malicioso que el
                antivirus no puede eliminar.
              </li>
              <li>
                <strong>Pantallas azules frecuentes: </strong>errores críticos
                del sistema operativo
              </li>
              <li>
                <strong>Vender o donar: </strong> Eliminar permanentemente todos
                los datos personales.
              </li>
              <li>
                <strong>Actualización de disco: </strong> Instalación de Windows
                en un nuevo SSD o HDD.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticWindows;
