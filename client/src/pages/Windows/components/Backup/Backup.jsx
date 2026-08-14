import React from "react";
import styles from "./Backup.module.css";
import image from "../../../../assets/Images/backup.jpg";

const Backup = () => {
  return (
    <section class={styles.lp_section}>
      <div className="mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div class="w-full">
            <h2>Respaldo: Elemento obligatorio e innegociable</h2>
            <p class="mb-4">
              <strong>
                Siempre realizamos una copia de seguridad completa antes de
                cualquier procedimiento.
              </strong>
              No existe reinstalación profesional sin protección de datos.
            </p>
            <ul class={styles.lp_list}>
              <li>
                <strong>Documentos importantes:</strong> Word, Excel, PDF y
                archivos de trabajo.
              </li>
              <li>
                <strong>Fotos y vídeos:</strong> Todos los recuerdos conservados
              </li>
              <li>
                <strong>Descargas:</strong> Archivos descargados de internet
              </li>
              <li>
                <strong>Favoritos del navegador:</strong> Sitios web y
                contraseñas guardadas
              </li>
              <li>
                <strong>Escritorio:</strong> Accesos directos y archivos de
                escritorio
              </li>
            </ul>
          </div>
          <div class="w-full">
            <img
              src={image}
              alt="Backup de dados antes de reinstalar Windows"
              class={styles.img_container}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backup;
