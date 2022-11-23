import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Workshops from './Components/Workshops';
import Home from './Components/Home';
import Register from './Components/Register';
import Footer from './Components/Footer';
import Adminws from './Components/Adminws';
import Editws from './Components/Editws';
import Login from './Components/Login';
import Form from './Components/Form';
import Showstudents from './Components/Showstudents';
import Students from './Components/Students';
function App() {
  return (
    <div >
<Router>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Workshops' element={<Workshops/>}/>
  <Route path='/Register' element={<Register/>}/>
  <Route path='/Adminws' element={<Adminws/>}/>
    <Route path='/Editws' element={<Editws/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Form' element={<Form/>}/>
    <Route path='/Students' element={<Students/>}/>
    <Route path='/Showstudents' element={<Showstudents/>}/>
  </Routes>
  <Footer/>
</Router>
    </div>
  );
}

export default App;
