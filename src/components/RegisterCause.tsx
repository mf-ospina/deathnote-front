import React, { useState } from 'react';
import Timer from './Timer';

interface RegisterCauseProps {
  id: string;
  cause: string;
  onSave: (id: string, cause: string) => void;
  onCancel: () => void;
}

const RegisterCause: React.FC<RegisterCauseProps> = ({ id, cause, onSave, onCancel }) => {
  const [localCause, setLocalCause] = useState(cause);

  const handleSave = () => {
    onSave(id, localCause);
  };

  return (
    <div className="deathnote-cause-form">
      <h2 className="deathnote-form-title">✍️ Registro de Causa de Muerte</h2>

      <div className="deathnote-timer-notice">
        <Timer time={40} onTimeEnd={onCancel} />
        <p>Tienes 40 segundos para registrar la causa o morirá de un infarto</p>
      </div>

      <div className="deathnote-input-group">
        <label htmlFor="cause" className="deathnote-form-label">
          Describe la causa de muerte:
        </label>
        <input
          type="text"
          id="cause"
          className="deathnote-form-input"
          value={localCause}
          onChange={(e) => setLocalCause(e.target.value)}
          placeholder="Ej: Accidente automovilístico, envenenamiento..."
          autoFocus
        />
      </div>

      <div className="deathnote-form-actions">
        <button className="deathnote-btn deathnote-btn-save" onClick={handleSave}>
          ✒️ Guardar Causa
        </button>
        <button className="deathnote-btn deathnote-btn-cancel" onClick={onCancel}>
          ❤️ Muerte por Infarto
        </button>
      </div>
    </div>
  );
};

export default RegisterCause;