import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Main from './components/Main/Main';
// import About from './components/About Us/About';
// import Contact from './components/Contact Us/Contact';
import Navigationbar from './components/Navbar/Navigationbar';
import ListEmployeeComponenet from './components/Employee/ListEmployeeComponenet';
import AddEmployeeComponent from './components/Employee/AddEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      

      <Router>
        <Routes>
          <Route path='/' element={<ListEmployeeComponenet/>} />
          <Route path='/add-employee' element={<AddEmployeeComponent/>} />
        </Routes>
      </Router>
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
