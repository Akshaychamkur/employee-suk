import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from './components/Navbar/Navigationbar';
import About from './components/About Us/About';
import Contact from './components/Contact Us/Contact';
import AddEmployeeComponent from './components/Employee/AddEmployeeComponent';
import ListEmployeeComponenet from './components/Employee/ListEmployeeComponenet'
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
    <Navigationbar />
    <Main />
    <About/>

    <Router>
      <Routes>
        <Route path='/' element={<ListEmployeeComponenet/>} />
        <Route path='/add-employee' element={<AddEmployeeComponent/>} />
        <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>} />
      </Routes>
    </Router>
    <Contact/>
    {/* <Router>
      <Routes>
        <Route path='/' element={<Homeie />} />
        <Route path='/' element={<ListEmployeeComponenet/>} />
        <Route path='/main' element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */}
  </div>
  );
}

export default App;
