import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import photo1 from "./resources/glazy-sandwich.png";
import photo2 from "./resources/glazy-sushi-set.png";
import {useState} from 'react'


function App() {
  const [show,setshow]=useState(false);
  const [alert,setalert]=useState("primary");
  return (
    <>
    <div className={"text-center alert alert-"+alert} role="alert">
      Simple application about recepies USING NodeJs and Mongodb !
    </div>

    <div className="container mt-2 p-3">
      <div className="row gx-5">
        {
            !show ? (
              <>
              <div className="col form1">
               <Login/>
        <p className="text-secondary change " onClick={()=>{setalert("warning");setshow(!show)}}>don't have account , sign up 
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-arrow-right-circle-fill ms-4" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
        </p>
            </div>
            <div className='col text-center'><img src={photo1} className=' img-fluid mt-5' alt='food..'/></div>
              </>
            ) : (
              <>
              <div className='col text-center'><img src={photo2} className=' img-fluid mt-5' alt='food..'/></div>
              <div className="col bg-dark form2">
            <Signup/>
        <p className="text-secondary change mt-4 "  onClick={()=>{setalert("primary");setshow(!show)}}>
       <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-arrow-left-circle-fill me-4" viewBox="0 0 16 16">
       <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
       </svg>
       have account now Login
        </p>
            </div>
              </>
            )
          }
        </div>
      </div>

    </>
  );
}

export default App;
