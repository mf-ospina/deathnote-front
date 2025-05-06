import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar: React.FC = () => {
  return (
    <>
      {/* Versión desktop (barra lateral) */}
      <div className="d-none d-md-block bg-dark text-white p-3 d-flex flex-column justify-content-start logo" 
           style={{ width: '250px', minHeight: '100vh' }}>
            
        <h4 className="text-center mb-4">DeathNote</h4>
        <div className="d-flex flex-column">
          <NavLink to="/" className="btn btn-outline-light mb-2">Inicio</NavLink>
          <NavLink to="/registro" className="btn btn-outline-light mb-2">Registro</NavLink>
          <NavLink to="/victimas" className="btn btn-outline-light">Víctimas</NavLink>
        </div>
      </div>
      

      {/* Versión móvil (barra superior) - Ahora dentro del contenedor principal */}
      <div className="d-md-none bg-dark text-white p-2 fixed-top">
        <div className="container">
          <div className="d-flex justify-content-around">
            <NavLink to="/" className="btn btn-outline-light mx-1">Inicio</NavLink>
            <NavLink to="/registro" className="btn btn-outline-light mx-1">Registro</NavLink>
            <NavLink to="/victimas" className="btn btn-outline-light mx-1">Víctimas</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
