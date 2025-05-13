import NavBar from './components/NavBar'
import AppRoutes from './assets/router/routes'
import './App.css'


function App() {
  return (
    <div className="d-flex flex-column flex-md-row h-100 custom-container">
      <div className="bg-dark text-white p-3">
        <NavBar />
      </div>

      <div className="flex-grow-1 overflow-auto p-3">
        <AppRoutes />
      </div>
    </div>
  );
}


export default App

