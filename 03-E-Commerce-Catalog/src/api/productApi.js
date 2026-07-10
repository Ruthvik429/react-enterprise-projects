import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
    timeout: 8000,
});

export async function getProducts(params={}){
    const response = await apiClient.get('/products', { params });
    return response.data;

}

export async function getProductsById(id){
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
}

export async function getCategories(){
    const response = await apiClient.get('/categories');
    return response.data;
}

export async function getReviewsByProduct(productId){
    const response = await apiClient.get('/reviews', {
        params: { productId },
    });
    return response.data
}

export default apiClient;