import { Navbar } from './Navbar';
import { Card } from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import f1 from "../resources/ikigai-too-much-sault.png";
import e from "../resources/ikigai-cat-putting-up-a-404-error-sign-1.png";
import { GetUserId } from './GetUserId';
import Axios from "axios";
import { useCookies } from "react-cookie";


export const ListOfRecepie=()=>{
    const userId=GetUserId();

    const [cookies, _] = useCookies(["access_token"]);

    const [AllRecepies,setAllRecepies]=useState([]);
    useEffect(() => {
        AOS.init();
        Axios.get("http://localhost:3010/recepie/get/"+userId).then((res)=>{
            setAllRecepies(res.data)
        })
      })

    return(
        <>
        <Navbar/>

        {!cookies.access_token ? (<div className='container text-center p-5  flex-column justify-content-center'>
                <img alt="err" src={e} className='img-fluid w-25' />
            <div className='row'>
                <h2 className=' fw-normal'>Sign in to check your recipes</h2>
            </div>
        </div>) : 
        (
       <>
        <div className='overflow-hidden p-3 p-md-5 m-md-5 text-center part'>
        <div className='row'>
            <div className='col-md-6'>
            <img src={f1} className='img-fluid w-75' alt="food"/>
            </div>
            <div className="col-md-6 p-lg-4 mx-auto my-5">
            <h1 className="display-3 fw-bold text-light">List Of Your Recepies</h1>
        </div>
        </div>
    </div>
    <div className=' flex-wrap  bg-body-tertiary p-md-4'>
        <div className='row gy-5 m-4 gx-5' data-aos="fade-up" data-aos-duration="2000">
        { AllRecepies && AllRecepies.map((recipe,index)=>{
            return (<>
            < div className='col-lg-4 col-md-6  col-sm-12 sep'><Card recepie={recipe} show={true} />
            </div>
            
            </>)
        })
        }
        </div>
    </div>
       </>
        )}
        </>
    )
}