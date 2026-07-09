import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Clock, ChefHat, Star, Users,Flame } from "lucide-react";
import './RecipeDetail.css';


function RecipeDetail({recipe, onClose}){
    const {
        title, image, cuisine,difficulty, cookTimeMinutes,
        servings, rating, ingredients, steps, nutrition
    } = recipe;

    useEffect(()=>{
        function handleKeyDown(e){
            if(e.key==="Escape") onClose();
            window.addEventListener("keydown",handleKeyDown);
        
        }
         return()=> window.removeEventListener("keydown", handleKeyDown);

    },[onClose]);

    const handleBackDropClick=()=> onClose();

    const stopPropagation = (e)=> e.stopPropagation();

    return (
        <motion.div className="recipe-detail-backdrop"
        initial = {{opacity:0}}
        animate={{opacity:1}}
        exit = {{opacity:0}}
        onClick={handleBackDropClick}>
            <motion.div
            className="recipe-detail-card"
            initial={{opacity:0, scale:0.92, y:20}}
            animate={{opacity:1, scale:1, y:0}}
            exit={{opacity:0, scale:0.92,y:20}}
            transition={{duration:0.25, ease: "easeOut"}}
            onCLick={stopPropagation}>
                <button className="recipe-detail-close" onCLick={onClose} aria-label="Close">
                    <X size={20}/>
                </button>

                <img src={image} alt={title} className="recipe-detail-image" />
                <div className="recipe-detail-body">
                    <span className="badge bg-dark mb-2">{cuisine}</span>
                    <h2 className="recipedetail-title">{title}</h2>

                    <div className="recipe-detail-meta">
                        <span><Clock size={16}/>{cookTimeMinutes} min</span>
                        <span><ChefHat size={16}/>{difficulty}</span>
                        <span><Users size={16}/>{servings} servings</span>
                        <span><Star size={16} fill="#f5a623" color="#f5a623"/>{rating}</span>

                    </div>

                    <div className="row mt-4">
                        <div className="col-md-5">
                            <h5>Ingredients</h5>
                            <ul className="recipe-detail-ingredients">
                                {ingredients.map((ing, i)=>(
                                    <li key={i}>{ing}</li>
                                ))}
                            </ul>

                            <h5 className="mt-4"><Flame size={16}/> Nutrition (per serving)</h5>
                            <ul className="recipe-detail-nutrition">
                                <li>Calories: {nutrition.calories}</li>
                                <li>Protein: {nutrition.protein}g</li>
                                <li>Carbs: {nutrition.carbs}g</li>
                                <li>Fat: {nutrition.fat}g</li>
                            </ul>
                        </div>

                        <div className="col-md-7">
                            <h5>Steps</h5>
                            <ol className="recipe-detail-steps">
                                {steps.map((step, i)=>(
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
               
                </div>
            </motion.div>
        </motion.div>
    )
}

export default RecipeDetail;