import { useState, useMemo, useEffect } from "react";
import useRecipes from "../hooks/useRecipe";
import { fetchCuisines } from "../api/recipeApi";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterBar from "../components/FilterBar/FilterBar";
import RecipeList from "../components/RecipeList/RecipeList";
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";
import { AlertTriangle } from "lucide-react";
import { AnimatePresence } from "framer-motion";

function HomePage(){
    const {recipes, loading, error} = useRecipes();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCuisine, setSelectedCuisine]= useState("");
    const [cuisines, setCuisines] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    useEffect(()=>{
        fetchCuisines().then(setCuisines).catch(()=>setCuisines([]))
    },[]);

    const filteredRecipes = useMemo(()=>{
        return recipes.filter((recipe)=>{
            const matchesSearch = recipe.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

            const matchesCuisine = selectedCuisine 
            ? recipe.cuisine === selectedCuisine : true;
            return matchesSearch && matchesCuisine;
        });

    },[recipes, searchTerm, selectedCuisine]);

    return(
        <div className="container py-4">
            <h1 className="text-center mb-4">🍲 Recipe Finder</h1>
            <div className="d-flex flex-column flex-md-row gap-2 mb-2">
                <SearchBar onSearch={setSearchTerm}/>
                <FilterBar 
                cuisines={cuisines}
                selectedCuisine={selectedCuisine}
                onFilterChange={setSelectedCuisine}
                />
            </div>
            {error && (
                <div className="alert alert-danger d-flex align-items-center gap-2">
                    <AlertTriangle size={18}/>
                    Failed to load recipes: {error}
                </div>
            )}
            {!error && (<RecipeList recipes={filteredRecipes} loading={loading} onSelect={setSelectedRecipe}/>)}

            {
                <AnimatePresence>
                    {selectedRecipe && (
                        <RecipeDetail recipe={selectedRecipe} onClose={()=>setSelectedRecipe(null)}
                        />
                    )}
                </AnimatePresence>
            }
        </div>
    );
}

export default HomePage;