import { AnimatePresence } from "framer-motion";
import RecipeCard from "../recipeCard/RecipeCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import {SearchX} from "lucide-react";

function RecipeList({recipes, loading, onSelect}){
    if(loading){
        return(
            <div className="row">
                {Array.from({length: 40}).map((_, i)=>(
                    <SkeletonCard key={i}/>
                ))}
            </div>
        );

    }

    if(recipes.length===0){
        return(
            <div className="text-center py-5 text-muted">
                <SearchX size={40} className="mb-3"/>
                <p>No recipes match your search. Try a different term or filter.</p>
            </div>
        );
    }

    return(
        <div className="row">
            <AnimatePresence>
                {recipes.map((recipe)=>(
                    <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect}/>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default RecipeList;