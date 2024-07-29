import Swal from 'sweetalert2';
import Axios from "axios";
import { useState } from "react";
import f2 from "../resources/icons8-noodles-94.png";

const Signup=()=>{

  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [ischecked,setCheck]=useState(false);
  const [usernameError,setUserNameError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [ischeckedError,setCheckError]=useState('');
  
  
  const registerUser=(e)=>{
    e.preventDefault();
    var work=true;
    if(username===''){setUserNameError("username shouldn't be empty");work=false;} else{setUserNameError("")}
    if(password===''){setPasswordError("password shouldn't be empty");work=false} else{setPasswordError("")}
    if(ischecked===false){setCheckError("you should check ");work=false} else{setCheckError("")}
    if(work){
      Axios.post("http://localhost:3010/auth/register",{username,password}).then((res)=>{
        const result=res.data;
        if(result.status){
          Swal.fire({
            icon: "success",
            title: "Good",
            text: result.message,
          });
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: result.message,
          });
        }
      })
    }
  }  
  
  return(
        <main className="form-signin w-100 m-auto  ">
        <form>
          <img className="mb-4" alt="food" src={f2}  />
          <h1 className="h3 mb-3 fw-normal text-light">Sign Up</h1>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" onChange={(e)=>setUserName(e.target.value)} id="floatingInput" placeholder="" />
            <label htmlFor="floatingInput">User Name</label>
            <span className='text-danger'>{usernameError}</span>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            <span className='text-danger'>{passwordError}</span>
          </div>
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" onClick={()=>setCheck(!ischecked)}  defaultValue="remember-me" id="flexCheckDefault" />
            <label className="form-check-label text-light" htmlFor="flexCheckDefault">
            accept our privacy terms
            </label>
            <p className='text-danger'>{ischeckedError}</p>
          </div>
          <button className="btn btn-warning w-25 py-2" onClick={(e)=>registerUser(e)} type="submit">sign up</button>
        </form>
      </main>
    );
}

export default Signup;