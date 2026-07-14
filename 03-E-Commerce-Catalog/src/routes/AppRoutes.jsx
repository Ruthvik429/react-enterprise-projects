import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage"
import ProductDetailsPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="catalog" element={<CatalogPage/>}/>
            <Route path="product/:id" element={<ProductDetailsPage />}/>
            <Route path="cart" element={<CartPage/>}/>
            <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;