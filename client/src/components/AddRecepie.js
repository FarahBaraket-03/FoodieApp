import { Navbar } from "./Navbar"
import {GetUserId} from "./GetUserId";
import Axios from 'axios'
import f1 from "../resources/Recipe book-pana.png"
import ad from "../resources/icons8-add-48.png";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import e from "../resources/ikigai-cat-putting-up-a-404-error-sign-1.png";
import { useCookies } from "react-cookie";

export const AddRecepie=()=>{
    const navigate=useNavigate();
    const [cookies, _] = useCookies(["access_token"]);
    const [recipe,setRecipe]=useState({
        name:"",
        description:"",
        imageURL:"",
        ingredients:[],
        cookingTime:"",
        userOwner:GetUserId()
    });

    const handleIngredientChange = (event, index) => {
        event.preventDefault();
        const { value } = event.target;
        const ingredients = [...recipe.ingredients];
        ingredients[index] = value;
        setRecipe({ ...recipe, ingredients });
      };

    const handleAddIngredient = () => {
        const ingredients = [...recipe.ingredients, ""];
        setRecipe({ ...recipe, ingredients });
      };

      const addRecipe=()=>{
        Axios.post("http://localhost:3010/recepie",recipe).then((res)=>{  
            navigate("/");
        });
        
      }

    return(
        <>
        <Navbar/>
        {!cookies.access_token ? (<div className='container text-center p-5  flex-column justify-content-center'>
                <img alt="err" src={e} className='img-fluid w-25' />
            <div className='row'>
                <h2 className=' fw-normal'>Sign in to add recipes</h2>
            </div>
        </div>) : 
        (
        <div className=' flex-wrap  bg-body-tertiary p-md-4'>
        <h1 className='display-2 fw-bold text-center'>Add Recepies</h1>
        <div className="row">
            <div className="col-6">
                <img  className="img-fluid" src={f1} alt="food"/>
            </div>
            <div className="col-6 text-center">
            <main className="form-signin w-100 m-auto p-4">
        <div>
          <h1 className="h3 mb-3 fw-normal">Please fill in</h1>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Name of dish"  onChange={(e)=>{setRecipe({...recipe,name:e.target.value})}} />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="describe ..." onChange={(e)=>{setRecipe({...recipe,description:e.target.value})}} />
            <label htmlFor="floatingInput">Description</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder=""  onChange={(e)=>{setRecipe({...recipe,cookingTime:e.target.value})}} />
            <label htmlFor="floatingInput">cooking Time</label>
          </div>
         <div>
            {
                recipe.ingredients.map((ing,index)=>{
                    return(
                        <div className="form-floating mb-3">
                <input type="text" className="form-control"   key={index}
                name="ingredients" value={ing} onChange={(e)=>{handleIngredientChange(e,index)}}/>
                <label htmlFor="floatingInput">Ingredient</label>
                </div>
                    )
                })
            }
            <button className="btn btn-secondary w-25 m-4 py-2"  >
            <img src={ad} alt="food" className="me-2" type="button" onClick={(e)=>{handleAddIngredient(e)}}/>
            add Ingredient</button>
         </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Name of dish"  onChange={(e)=>{setRecipe({...recipe,imageURL:e.target.value})}} />
            <label htmlFor="floatingInput">Image Url</label>
          </div>
          <button className="btn btn-success w-25 mt-4 py-2"  type="submit">
            <img src={ad} alt="food" className="me-2" onClick={()=>{addRecipe()}} />
            add</button>
        </div>
            </main>
            </div>
        </div>
        
    </div>)}
        </>
    )
}