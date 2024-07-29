import f1 from "../resources/icons8-spaghetti-94.png";
import Swal from 'sweetalert2';
import Axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [_, setCookies] = useCookies(["access_token"]);
  const [usernameError,setUserNameError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const navigate = useNavigate();
  
  const signin=(e)=>{
    e.preventDefault();
    var work=true;
    if(username===''){setUserNameError("username shouldn't be empty");work=false;} else{setUserNameError("")}
    if(password===''){setPasswordError("password shouldn't be empty");work=false} else{setPasswordError("")}
    if(work){
      Axios.post("http://localhost:3010/auth/login",{username,password}).then((res)=>{
        const result=res.data;
        if(result.status){
          Swal.fire("welcome "+username);
          setCookies("access_token", result.token);
          window.localStorage.setItem("userID", result.UserId);
          navigate("/");
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
        <main className="form-signin w-100 m-auto p-2">
        <form>
          <img className="mb-4" alt="food" src={f1}  />
          <h1 className="h3 mb-3 fw-normal">Please Login in</h1>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="..."  onChange={(e)=>setUserName(e.target.value)} />
            <label htmlFor="floatingInput">User Name</label>
            <span className='text-danger'>{usernameError}</span>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            <span className='text-danger'>{passwordError}</span>
          </div>
          <button className="btn btn-primary w-25 mt-4 py-2" onClick={(e)=>{signin(e)}} type="submit">Login</button>
          <p className="mt-4 mb-3 text-body-secondary">©2024</p>
        </form>
      </main>
    );
}

export default Login;