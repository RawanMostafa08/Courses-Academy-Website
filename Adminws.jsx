import './Workshops.css';
import { Link } from 'react-router-dom';
import Addws from './Addws';
import Editws from './Editws'; 
function Adminws(){
    return(
    <div className="workshops">
        <div className="start">
            <h1>Discover Our Workshops</h1>
            <Link to={"/Editws"}>  <button>Edit Workshops</button></Link>
        
        </div>
   
    </div>
    )
}
export default Adminws