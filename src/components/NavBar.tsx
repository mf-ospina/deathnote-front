import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar: React.FC = () => {
  return (
    <>
      {/* Versión desktop (barra lateral) */}
      <div className="d-none d-md-block d-flex flex-column navbar">
            
        <div className="d-flex flex-column logo">
          <img src="https://wallpapers.com/images/featured/death-note-logo-png-1xtme5kzvjo4xc8q.jpg" alt="Death Note" 
            className="death-apple"/>
          <img src="https://pnghq.com/wp-content/uploads/2023/02/logo-death-note-apple-png-5920-278x300.png" alt="Death Note" 
            className="death-apple"/>
        </div>

        <div className="d-flex flex-column menu">
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