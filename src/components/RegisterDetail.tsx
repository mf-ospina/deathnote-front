import React, { useState } from 'react';
import Timer from './Timer';

interface RegisterCauseProps {
  id: string;
  detail: string;
  onSave: (detail: string) => void;
  onCancel: () => void;
}

const RegisterDetail: React.FC<RegisterCauseProps> = ({ id, detail, onSave, onCancel }) => {
  const [localDetail, setLocalDetail] = useState(detail);

  const handleSave = () => {
    onSave(localDetail);
  };

  const handleCancel = () => {
    onCancel();
  };

  return ( 
    <div className="container mt-4">
      <h4>Detalle del caso (ID: {id})</h4>

      <div className="mb-3">
        <label htmlFor="detail" className="form-label">Detalle</label>
        <textarea
          className="form-control"
          id="detail"
          rows={4}
          value={localDetail}
          onChange={(e) => setLocalDetail(e.target.value)}
          placeholder="Ingresa el detalle..."
        />
      </div>

      <button className="btn btn-success me-2" onClick={handleSave}>
        Guardar
      </button>
      <button className="btn btn-secondary" onClick={handleCancel}>
        Cancelar
      </button>

      <Timer time={400} onTimeEnd={handleCancel} />
    </div>
  );
};

export default RegisterDetail;
