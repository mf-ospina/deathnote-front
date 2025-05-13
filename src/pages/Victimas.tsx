import { useEffect, useState } from 'react';
import { getPeople } from '../services/ApiService';
import { API_URL } from '../services/config';

interface Persona {
  person_id: number;
  name: string;
  age: number;
  photo_url: string;
  created_at: string;
  death_time?: string;  // Hacer opcionales estos campos
  cause?: string;
  details?: string;
}

const Victimas = () => {
  const [people, setPeople] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Persona | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPeople();
        setPeople(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Error al cargar las víctimas');
        setPeople([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = (person: Persona) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <div className="dn-victims-grid">
      <h2 className="dn-section-title">📜 Víctimas Registradas</h2>
      
      {loading ? (
        <div className="dn-loading-card">
          <div className="dn-loading-animation"></div>
          <p>Escribiendo nombres en el Death Note...</p>
        </div>
      ) : error ? (
        <div className="dn-error-card">
          <p>✖ {error}</p>
        </div>
      ) : people.length === 0 ? (
        <div className="dn-empty-card">
          <p>El Death Note está vacío...</p>
        </div>
      ) : (
        <div className="dn-cards-container">
          {people.map((person) => (
            <div key={person.person_id} className="dn-victim-card">
              <div className="dn-card-header">
                <img 
                  src={`${API_URL}${person.photo_url}`} 
                  alt={person.name} 
                  className="dn-victim-photo"
                />
                <div className="dn-victim-basic-info">
                  <h3 className="dn-victim-name">{person.name}</h3>
                  <p className="dn-victim-age">{person.age} años</p>
                </div>
                <span className="dn-death-symbol">☠</span>
              </div>
              
              <div className="dn-card-body">
                <div className="dn-info-row">
                  <span className="dn-info-label">Fecha de muerte:</span>
                  <span className="dn-info-value">
                    {new Date(person.created_at).toLocaleString()}
                  </span>
                </div>
                
                <div className="dn-status-indicator">
                  <span className="dn-status-active">MUERTE CONFIRMADA</span>
                </div>
              </div>
              
              <div className="dn-card-footer">
                <button 
                  className="dn-details-button"
                  onClick={() => openModal(person)}
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de detalles */}
      {isModalOpen && selectedPerson && (
        <div className="dn-modal-overlay">
          <div className="dn-modal">
            <button className="dn-modal-close" onClick={closeModal}>
              &times;
            </button>
            
            <div className="dn-modal-header">
              <img 
                src={`${API_URL}${selectedPerson.photo_url}`} 
                alt={selectedPerson.name} 
                className="dn-modal-photo"
              />
              <h3 className="dn-modal-title">{selectedPerson.name}</h3>
              <span className="dn-modal-age">{selectedPerson.age} años</span>
            </div>
            
            <div className="dn-modal-body">
              <div className="dn-modal-row">
                <span className="dn-modal-label">Fecha de muerte:</span>
                <span className="dn-modal-value">
                  {selectedPerson.death_time ? 
                    new Date(selectedPerson.death_time).toLocaleString() : 
                    new Date(selectedPerson.created_at).toLocaleString()}
                </span>
              </div>
              
              <div className="dn-modal-row">
                <span className="dn-modal-label">Causa de muerte:</span>
                <span className="dn-modal-value">
                  {selectedPerson.cause || "Ataque al corazón"}
                </span>
              </div>
              
              <div className="dn-modal-row">
                <span className="dn-modal-label">Detalles:</span>
                <span className="dn-modal-value">
                  {selectedPerson.details || "No se registraron detalles adicionales"}
                </span>
              </div>
              
              <div className="dn-modal-status">
                <span className="dn-status-active">MUERTE CONFIRMADA</span>
              </div>
            </div>
            
            <div className="dn-modal-footer">
              <button className="dn-modal-button" onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Victimas;