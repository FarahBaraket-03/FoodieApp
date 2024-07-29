import 'bootstrap/dist/css/bootstrap.css';
import f1 from "../resources/bao-delete-confirmation-1.png";
import f2 from "../resources/bao-no-comment-1.png";
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navbar } from './Navbar';
import { Card } from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Axios from "axios";

export const Home=()=>{
    const [AllRecepies,setAllRecepies]=useState([]);
    useEffect(() => {
        AOS.init();
        Axios.get("http://localhost:3010/recepie/getall").then((res)=>{
            setAllRecepies(res.data);
        })
      }, [])


    return(<>
    <Navbar/>
    {/* CENTER OF HOME PAGE */}
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary ">
        <div className='row'>
        <div className="col-md-6 mx-auto my-5">
            <h1 className="display-3 fw-bold">Designed for FOODIES</h1>
            <h3 className="fw-normal text-muted mb-3">you don't know what to cook , here  you find variety of recepies   </h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
            </div>
        </div>
        <div className='col-md-6'>
        <img src={f1} alt="food"/>
        </div>
        </div>
    </div>
    {/*?END OF CENTER OF HOME PAGE */}

    <div className='overflow-hidden p-3 p-md-5 m-md-5 text-center part'>
        <div className='row'>
            <div className='col-md-6'>
            <img src={f2} className='img-fluid w-75' alt="food"/>
            </div>
            <div className="col-md-6 p-lg-4 mx-auto my-5">
            <h1 className="display-3 fw-bold text-light">SHARE AND ENJOY</h1>
        </div>
        </div>
    </div>

    {/*LIST OF ALL RECEPIES */}
    <div className=' flex-wrap  bg-body-tertiary p-md-4'>
        <h1 className=' display-2 fw-bold text-center'>Recepies</h1>
        <div className='row gy-5 m-4' data-aos="fade-up" data-aos-duration="2000">
        { AllRecepies && AllRecepies.map((recipe)=>{
            return <div className=' col-lg-4 col-md-6 col-sm-12'><Card recepie={recipe} show={false}/></div>
        })
        }
        </div>
    </div>
    {/*end OF ALL RECEPIES */}
    
    {/*Footer*/}
    <footer className="footer mt-auto py-3 bg-dark  ">
        <div className="container text-center">
            <span className="text-secondary ">credit by FarahBaraket ©2024 </span>
        </div>
        </footer>

    </>)
}