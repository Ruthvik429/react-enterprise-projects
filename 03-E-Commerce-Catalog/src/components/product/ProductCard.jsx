import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart} from 'lucide-react';
import { useCart } from "../../context/useCart";


const cardVariants = {
    hidden: {
        opacity:0, y: 24
    },
    visible:{opacity: 1, y: 0},

};

function ProductCard({ product }){
    const { addToCart } = useCart();

    const handleAddToCart = (e)=>{
        e.preventDefault();
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.thumbnail,
        });
    };
    return (
        <motion.div className="product-card" variants = {cardVariants}>
            <Link to={`/product/${product.id}` } className="product-card__link">
            <div className="product-card__image-wrap">
                <img src={product.thumbnail}
                alt={product.name}
                className="product-card__image"
                />
                {
                    product.isOnSale && (
                        <span className="product-card__badge product-card__badge--sale">
                            -{product.discountPercent}%

                        </span>
                    )
                }
                {
                    product.isNew &&(
                        <span className="product-card__badge product-card__badge--new">
                            New
                        </span>
                    )
                }
                </div>

                <div className="product-card__body">
                    <p className="product-card__brand">{product.brand}</p>
                    <h3 className="product-card__name">{product.name}</h3>

                    <div className="product-card__rating">
                        <Star size={14} className="product-card__star" fill="currentColor"/>
                        <span>{product.rating}</span>
                        <span className="product-card__review-count">
                            ({product.reviewCount})
                        </span>

                    </div>

                    <div className="product-card__price-row">
                        <span className="produc-card__price">
                            ${product.price.toFIxed(2)}
                        </span>
                        {product.isOnSale && (
                            <span className="product-card__original-price">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
                </Link>

                <button className="product-card__ad-btn"
                onClick={handleAddToCart}
                aria-label={`Add ${product.name} to cart`}>
                <ShoppingCart size={16}/>
                Add to Cart
                </button>

        </motion.div>
    )
}

export default ProductCard;