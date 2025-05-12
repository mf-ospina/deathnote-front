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
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Registro de Causa de Muerte</h2>

          <div className="mb-3">
            <label htmlFor="cause" className="form-label">
              Tienes 40 segundos para ingresar la causa. Si no, muere del corazón.
            </label>
            <input
              type="text"
              className="form-control"
              id="cause"
              value={localCause}
              onChange={(e) => setLocalCause(e.target.value)}
              placeholder="Ingresa la causa de muerte"
            />
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-primary" onClick={handleSave}>
              Guardar Causa
            </button>
            <button className="btn btn-outline-secondary" onClick={onCancel}>
              Que muera del ❤️
            </button>
          </div>

          <div className="mt-3">
            <Timer time={40} onTimeEnd={onCancel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCause;
