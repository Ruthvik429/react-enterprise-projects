import axios from "axios"

const apiClient = axios.create({
    baseURL:"http://localhost:5000",
    timeout: 8000,
    headers:{
        "Content-Type": "application/json",
    }
})

export const fetchRecipes = async()=>{
    const response = await apiClient.get("/recipes");
    return response.data;
}

export const fetchById = async(id)=>{
    const response = await apiClient.get(`/recipes/${id}`)
    return response.data;
}

export const fetchCuisines = async()=>{
    const response = await apiClient.get("/cuisines");
    return response.data;
}

export const fetchRecipesByCuisine = async(cuisine)=>{
    const response = await apiClient.get(`/recipes?cuisine=${cuisine}`);
    return response.data;
}
export const searchRecipes = async (keyword) => {
  const response = await apiClient.get("recipes",{
    params:{
        title_like:keyword,  // earchRecipes("Chicken Tikka") to handle space orelse apiClient.get( /recipes?title_like=${keyword} ); 
    },
  });
  return response.data;
};


export default apiClient;