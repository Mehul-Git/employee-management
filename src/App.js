import './App.css';

import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import EmployeState from './context/employee/EmployeState';
function App() {
  return (
    <>
    <EmployeState>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} /> 
      <Route path="/about" element = {<About/>}/>
      </Routes>
    </Router>
    </EmployeState>
    </>
  );
}

export default App;

