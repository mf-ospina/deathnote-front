import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Registro from '../../pages/Registro'
import Victimas from '../../pages/Victimas'
import RegisterCause from '../../components/RegisterCause';

const AppRoutes = () => {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/registro" element={<Registro />} />
         <Route path="/victimas" element={<Victimas />} />
         <Route path="/cause" element={<RegisterCause />} />
      </Routes>
    );
  };
  
  export default AppRoutes;
