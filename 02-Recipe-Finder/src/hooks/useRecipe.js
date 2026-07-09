import { useState, useEffect } from "react";
import { fetchRecipes } from "../api/recipeApi";

function useRecipes(){
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        let isCancelled = false;

        async function loadRecipes(){
            try{
                setLoading(true);
                setError(null);
                const data = await fetchRecipes();

                if(!isCancelled){
                    setRecipes(data);
                }
            }catch(error){
                if(!isCancelled){
                    setError(error.message || "Failed to fetch recipes...");
                }

            }
            finally{
                if(!isCancelled){
                    setLoading(false);
                }
            }
        }

        loadRecipes();
        return()=>{
            isCancelled=true;
        }
    },[]);
    return {recipes, loading, error};
}

export default useRecipes;