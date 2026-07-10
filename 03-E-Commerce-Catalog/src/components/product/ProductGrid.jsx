import { motion } from "framer-motion";
import ProductCard from './ProductCard';

const gridVariants ={
    hidden:{},
    visible:{
        trnsition: { staggerChildren: 0.06},
    },
};

function ProductGrid({ products }){
    if(products.length === 0){
        return <p className="product-grid__empty">No products found...</p>
    }

    return(
        <motion.div
        className="product-grid row g-4"
        variants={gridVariants}
        initial="hidden"
        animate="visible">
            {products.map((product)=>(
                <div className="col-6 col-md-4 col-lg-3"
                key={product.id}>
                    <ProductCard product={product}/>
                </div>
            ))}
        </motion.div>
    )
}

export default ProductGrid;