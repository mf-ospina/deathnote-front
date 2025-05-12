import axios from 'axios';
import { API_URL } from './config';

interface Persona {
  person_id: number;
  name: string;
  age: number;
  photo_url: string;
  created_at: string;
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ApiResponse<T> {
  data: T;
  status: number;
}

export const enviarPersona = async (nombre: string, edad: string, imagen: File) => {
  try {
    const formData = new FormData();
    formData.append('name', nombre);
    formData.append('age', edad);
    formData.append('photo', imagen);

    const response: ApiResponse<{ id: number }> = await api.post('/people', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    //console.log('Respuesta del servidor:', response.data.id);
    return response.data;
  } catch (error) {
    throw new Error('No se pudo enviar los datos. Intenta nuevamente más tarde.');
  }
};

export const getTimerResult = async () => {
  try {
    const response: ApiResponse<{ timer: string }> = await api.get('/config');
    console.log('Respuesta del servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la configuración:', error);
    throw new Error('No se pudo obtener la configuración. Intenta nuevamente más tarde.');
  }
};

export const sendCause = async (cause: string, idPerson: number) => {
  try {
    const response: ApiResponse<{ success: boolean }> = await api.post(
      `/people/${idPerson}/cause`,
      { cause },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error al enviar la causa:', error);
    throw new Error('No se pudo enviar la causa. Intenta nuevamente más tarde.');
  }
};

export const sendDetail = async (idPerson: number, details: string) => {
  try {
    const response: ApiResponse<{ success: boolean }> = await api.post(
      `/people/${idPerson}/details`,
      { details },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('No se pudo enviar el detalle. Intenta nuevamente más tarde.');
  }
};

export const getPeople = async () => {
  try {
    const response: ApiResponse<Persona[]> = await api.get('/people');
    return response.data;
  } catch (error) {
    throw new Error('No se pudieron obtener las personas. Intenta nuevamente más tarde.');
  }
};

export const ApiService = { enviarPersona, getTimerResult, sendCause, sendDetail, getPeople };
