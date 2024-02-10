import logo from './logo.svg';
import './App.css';
import About from './component/pages/About';
import Home1 from './component/pages/Home1';
import Contact1 from './component/pages/Contact1';
import Navbar from './component/inc/Navbar';
import Login from './component/pages/login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './component/inc/Footer';


function App() {
  return (
    <Router>
        <div className="container">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home1/>}>
            
          </Route>
          <Route path="/about" element={<About/>}>
            
          </Route>
          <Route path="/contact" element={<Contact1/>}>
            
          </Route>
          <Route path="/login" element={<Login/>}>
            
          </Route>

          </Routes>
          
       <Footer/>
        
        
        
        </div>
    </Router>
    
  );
}

export default App;
