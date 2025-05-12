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
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Registro de Víctima</h2>
         
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={localFirstName}
            onChange={(e) => setLocalFirstName(e.target.value)}
            placeholder="Ingresa el nombre"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Edad
          </label>
          <input
            type="number"
            className="form-control"
            id="edad"
            value={localEdad}
            onChange={(e) => setLocalEdad(e.target.value)}
            placeholder="Ingresa la edad"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="foto" className="form-label">
            Foto
          </label>
          <input
            type="file"
            className="form-control"
            id="foto"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFoto(e.target.files[0]);
              }
            }}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-primary" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
