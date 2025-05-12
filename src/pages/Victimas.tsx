import { useEffect, useState } from 'react';
import { getPeople } from '../services/ApiService';
import { API_URL } from '../services/config';

interface Persona {
  person_id: number;
  name: string;
  age: number;
  photo_url: string;
  created_at: string;
}

const Victimas = () => {
  const [people, setPeople] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPeople();
        setPeople(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Error al cargar los datos.');
        setPeople([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Víctimas</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : people.length === 0 ? (
        <p>No hay víctimas registradas.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="bg-black text-white">
              <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.person_id}>
                  <td>
                    <img
                      src={`${API_URL}${person.photo_url}`}
                      alt={person.name}
                      className="img-thumbnail"
                      style={{
                        width: '90px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                      }}
                    />
                  </td>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{new Date(person.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Victimas;
