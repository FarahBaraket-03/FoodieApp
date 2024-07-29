import { useEffect, useState } from "react";
import d from "../resources/icons8-delete-48.png";
import u from "../resources/icons8-edit-48.png";
import Axios from "axios";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";



export const Card=(props)=>{
   
    const [name,setname]=useState('');
    const getname=()=>{
        Axios.get("http://localhost:3010/recepie/getname/"+props.recepie.userOwner).then((res)=>{
            return setname(res.data);
        })
    }
    useEffect(()=>{getname()},[]);

    const deleteitem=()=>{
        Swal.fire({
            title: "<strong>Warning</strong>",
            icon: "info",
            html: `
              Are you sure do you want <b>delete</b>?
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> yes
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              <i class="fa fa-thumbs-down"></i>No
            `,
            cancelButtonAriaLabel: "Thumbs down"
          }).then((result)=>{
            if(result.isConfirmed){
                Axios.delete("http://localhost:3010/recepie/delete/"+props.recepie._id).then((res)=>{
                    if(res.data){
                        Swal.fire("deleted succfully")
                    }
                })
            }
          });
    }
    return(<>
            <div className="card p-1 w-100" style={{width: '19rem'}}>
                <img 
                src={props.recepie.imageURL} className="card-img-top p-1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bolder">{props.recepie.name}</h5>
                    <p className="card-text fw-light" >{props.recepie.description}</p>
                    <p className='card-header text-center'>Ingredients :</p>
                    <ul class="list-group list-group-flush">
                    {props.recepie.ingredients && props.recepie.ingredients.map((item)=>{
                        return (<li class="list-group-item">{item}</li>)
                    })}
                    </ul>
                    <div className='card-footer'>
                    <blockquote class="blockquote mb-0">
                        <p className='fw-medium fs-6'>Cooking Time 
                            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="currentColor" className="bi bi-alarm ms-1 me-1" viewBox="0 0 16 16">
                            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
                            </svg>: {props.recepie.cookingTime}</p>
                        <footer class="blockquote-footer fw-light"> made By {name}</footer>
                    </blockquote>
                </div>
                {props.show && (
                    <div className="card-body ">
                    <button className="btn "><img src={d} onClick={deleteitem}  alt="delete"/></button>
                    <Link to="/changerecepie" state={{recipie:props.recepie}} className="btn "><img src={u} alt="update" className="w-50" /></Link>  
                    </div>)}
            </div>
            </div>
            </>

    )
}