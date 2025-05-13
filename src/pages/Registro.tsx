import React, { useState } from "react";
import NotebookLayout from "../components/NotebookLayout";
import { enviarPersona } from '../services/ApiService';
import { sendCause } from '../services/ApiService';
import { sendDetail } from '../services/ApiService';
import { useNavigate } from 'react-router-dom';
import Register from '../components/Register';
import RegisterCause from '../components/RegisterCause';
import RegisterDetail from '../components/RegisterDetail'; 


const Registro: React.FC = () => {
  const [photo, setFoto] = useState<File | null>(null);
  const [etapa, setEtapa] = useState<'registro' | 'causa' | 'detalle'>('registro'); 
  const [personId, setPersonId] = useState<string>('');
  const [cause, setCause] = useState<string>(''); 
  const [detail, setDetail] = useState<string>(''); 
  const navigate = useNavigate();

  const handleSave = async (firstName: string, age: string) => {
    if (!firstName || !age || !photo) {
      alert('Faltan datos: nombre, edad o foto');
      return;
    }

    try {
      const response = await enviarPersona(firstName, age, photo);
      //No cambiar si funciona, en verificación.
      setPersonId(response.person_id);  
      setEtapa('causa'); 
      setFoto(null); 
    } catch (error) {
      alert('Error al enviar');
    }
  };

  const handleSaveCause = async (id: string, cause: string) => { 
    if (!cause.trim()) {
      alert('La causa de muerte no puede estar vacía.');
      return;
    }

    try {
      
      await sendCause(cause, parseInt(id)); 
      setCause(cause);
      // Cambiamos a la etapa de detalle
      setEtapa('detalle'); 
      setCause(''); 

    } catch (error) {
      alert('Error al guardar la causa');
    }
  };

  const handleSaveDetail = async (detail: string) => {
    if (!detail.trim()) {
      alert('El detalle no puede estar vacío.');
      return;
    }

    try {
      console.log('Guardando detalle:', { personId, detail });
      await sendDetail(parseInt(personId), detail);
      alert('Detalle guardado');
      // Limpiar campo de detalle
      setDetail('');
      navigate('/victimas');  // Redirección después de guardar
    } catch (error) {
      alert('Error al guardar el detalle');
    }
  };

  const handleCancel = () => {
    navigate('/victimas'); 
  };


  return (
    <NotebookLayout>
    <div className="registro-form">
      {etapa === 'registro' && (
        <Register firstName="" edad={0} onSave={handleSave} setFoto={setFoto} 
        />
      )}

      {etapa === 'causa' && (<RegisterCause id={personId} cause={cause}
          onSave={handleSaveCause} 
          onCancel={handleCancel}
        />
      )}

      {etapa === 'detalle' && (
        <RegisterDetail
          id={personId}
          detail={detail}
          onSave={handleSaveDetail}
          onCancel={handleCancel}
        />
      )}
    </div>
    </NotebookLayout>
  );
};

export default Registro;
