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
    <div className="deathnote-detail-container">
      <div className="deathnote-detail-content">
        <div className="deathnote-detail-header">
          <h3 className="deathnote-detail-title">
            <span className="deathnote-id-mark">✍</span> Detalles de la Víctima (ID: {id})
          </h3>
          <div className="deathnote-timer-wrapper">
            <Timer time={400} onTimeEnd={handleCancel} />
            <span className="deathnote-time-notice">Tienes 6 minutos y 40 segundos para registrar los detalles</span>
          </div>
        </div>

        <div className="deathnote-detail-input-group">
          <label htmlFor="detail" className="deathnote-detail-label">
            Describe los detalles de la muerte:
          </label>
          <textarea
            className="deathnote-detail-textarea"
            id="detail"
            rows={5}
            value={localDetail}
            onChange={(e) => setLocalDetail(e.target.value)}
            placeholder="Ej: La víctima sufrió un accidente automovilístico a las 3:15 PM..."
            autoFocus
          />
        </div>
      </div>

      <div className="deathnote-detail-actions">
        <button className="deathnote-btn deathnote-btn-confirm" onClick={handleSave}>
          <span className="deathnote-btn-icon">✓</span> Confirmar Detalles
        </button>
        <button className="deathnote-btn deathnote-btn-cancel" onClick={handleCancel}>
          <span className="deathnote-btn-icon">✗</span> Cancelar
        </button>
      </div>
    </div>
  );
};

export default RegisterDetail;