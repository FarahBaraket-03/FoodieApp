import { useState} from "react";
import Axios from 'axios'
import ad from "../resources/icons8-add-48.png";
import {Navbar} from "./Navbar.js";
import { useLocation } from "react-router-dom";

export const ModalRecipe=()=>{
  const {recipie}=useLocation().state;

    const [recipe,setRecipe]=useState({
        name:recipie.name,
        description:recipie.description,
        imageURL:recipie.imageURL,
        ingredients:recipie.ingredients,
        cookingTime:recipie.cookingTime,
        userOwner:recipie.userOwner
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

      const updaterecipe=()=>{
        Axios.put("http://localhost:3010/recepie/update/"+recipie._id,recipe).then((res)=>{
          console.log(res);
        })

      }
    return(<>
    <Navbar/>
    <div className="container p-5 mt-5">
      <div className="row gx-5">
      <div className="col-md-6 col-sm-12 text-center p-4">
                <img  className="img-fluid mt-5" src={recipe.imageURL} alt="food"/>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
            <main className="form-signin w-100 m-auto p-4">
        <div>
          <h1 className="h2 mb-3 fw-bold">Change recipe</h1>
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
        </div>
        <div>
          <button className="btn btn-outline-primary fs-5" onClick={updaterecipe} >change</button>
        </div>
            </main>
            </div>
      </div>
    </div>
    </>)
}