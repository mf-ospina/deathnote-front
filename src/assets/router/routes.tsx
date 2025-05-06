import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Registro from '../../pages/Registro'
import Victimas from '../../pages/Victimas'

const AppRoutes = () => {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/registro" element={<Registro />} />
         <Route path="/victimas" element={<Victimas />} />
      </Routes>
    );
  };
  
  export default AppRoutes;
