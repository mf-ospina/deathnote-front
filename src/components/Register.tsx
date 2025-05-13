import React, { useState } from 'react';

interface RegisterProps {
  firstName: string;
  edad: number;
  onSave: (firstName: string, edad: string) => void;
  setFoto: (file: File) => void;
}

const Register: React.FC<RegisterProps> = ({ firstName, edad, onSave, setFoto }) => {
  const [localFirstName, setLocalFirstName] = useState(firstName);
  const [localEdad, setLocalEdad] = useState(edad.toString());

  const handleSave = () => {
    onSave(localFirstName, localEdad);
  };

  return (
    <div className="custom-form-container">
      <div className="custom-form-box">
        <h2 className="custom-form-title">Registro de Víctima</h2>
  
        <div className="custom-form-group">
          <label htmlFor="firstName" className="custom-form-label">
            Nombre
          </label>
          <input
            type="text"
            className="custom-form-input"
            id="firstName"
            value={localFirstName}
            onChange={(e) => setLocalFirstName(e.target.value)}
            placeholder="Ingresa el nombre"
          />
        </div>
  
        <div className="custom-form-group">
          <label htmlFor="edad" className="custom-form-label">
            Edad
          </label>
          <input
            type="number"
            className="custom-form-input"
            id="edad"
            value={localEdad}
            onChange={(e) => setLocalEdad(e.target.value)}
            placeholder="Ingresa la edad"
          />
        </div>
  
        <div className="custom-form-group">
          <label htmlFor="foto" className="custom-form-label">
            Foto
          </label>
          <input
            type="file"
            className="custom-form-input"
            id="foto"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFoto(e.target.files[0]);
              }
            }}
          />
        </div>
  
        <div className="custom-form-actions">
          <button className="btn-save" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default Register;
