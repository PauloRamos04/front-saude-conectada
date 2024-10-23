import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home/index.jsx';
import Register from './containers/Register/index.jsx';
import Login from './containers/Login/index.jsx';
import './index.css';
import Consultas from './containers/Consulta/index.jsx';
import MarcarConsulta from './containers/Marcar-Consulta/index.jsx';
import TrabalheConosco from './containers/trabalhe_conosco/index.jsx';
import UnidadesProximas from './containers/unidades/index.jsx';
import CampanhaAedes from './containers/campanha/index.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path='/consultas' element={<Consultas/>} />
                <Route path='/unidades' element={<UnidadesProximas/>} />
                <Route path='/campanhas' element={<CampanhaAedes/>} />
                <Route path='/trabalhe-conosco' element={<TrabalheConosco/>} />
                <Route path='/marcar-consulta' element={<MarcarConsulta/>} />
            </Routes>
        </Router>
    );
}

export default App;
