import React from "react";
import type { ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface NotebookLayoutProps {
  children: ReactNode;
}

const NotebookLayout: React.FC<NotebookLayoutProps> = ({ children }) => {
  return (
    <div className="notebook-container">
      <div className="notebook d-flex flex-column flex-lg-row">
        <div className="page left-page">
          <h2>🕯️ REGLAS DE USO 🕯️</h2>
          <div className="death-note-rules">
            <ol>
              <li>✍️ Solo morirá la persona cuyo nombre completo sea registrado.</li>
              <li>🕒 Tras escribir el nombre, tienes 40 segundos para registrar la causa de muerte o morirá de un ataque al corazón.</li>
              <li>⏳ Si se escribe una causa específica, se te otorgarán 6 minutos y 40 segundos adicionales para escribir los detalles. La muerte ocurrirá 40 segundos después de registrar estos detalles.</li>
              <li>📸 Para que la muerte ocurra, debe cargarse una fotografía clara del rostro de la persona.</li>
              <li>💀 Todas las muertes provocadas serán visibles desde la aplicación.</li>
            </ol>
          </div>
        </div>
        <div className="page right-page">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NotebookLayout;