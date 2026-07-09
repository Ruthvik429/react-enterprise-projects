import { motion } from "framer-motion";
import {Clock, Star, ChefHat, Tag} from "lucide-react";
import "./RecipeCard.css";

function RecipeCard({recipe, onSelect}){
    const {title, image, cuisine, difficulty, cookTimeMinutes, rating} = recipe;

    return(
        <div className="col-12 col-md-6 col-lg-3 mb-4">
            <motion.div
            className="recipe-card"
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, scale:0.9}}
            layout
            transition={{duration:0.4, ease:"easeOut"}}
            whileHover={{y:-6, boxShadow:"0 12px 24px rgba(0,0,0,0.12)"}}
            whileTap={{scale: 0.97}}
            onClick={()=> onSelect(recipe)}>
                
                <div className="recipe-card-image-wrap">
                    <img src={image} alt={title} className="recipe-card-image" />
                    <span className="recipe-card-badge">
                        <Tag size={12}/> {cuisine}
                    </span>
                </div>

                <div className="recipe-card-body">
                    <h3 className="recipe-card-title">{title}</h3>

                    <div className="recipe-card-meta">
                        <span className="meta-item">
                            <Clock size={14}/> {cookTimeMinutes}
                        </span>
                        <span className="meta-item">
                            <ChefHat size={14}/> {difficulty}
                        </span>
                        <span className="meta-item">
                            <Star size={14} fill="#f5a623" color="#f5a623"/> {rating}
                        </span>
                    </div>
                    <button className="btn btn-outline-dark btn-sm w-100 mt-2" onClick={()=>onSelect(recipe)}>
                        View Recipe
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default RecipeCard;