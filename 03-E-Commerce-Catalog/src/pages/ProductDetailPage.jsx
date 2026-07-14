import { useParams } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useState, useEffect } from "react";
import { getReviewsByProduct, getProductsById } from "../api/productApi";
import ImageGallery from "../components/product/ImageGallery";
import { ShoppingCart, Star } from "lucide-react";
import QuantitySelector from "../components/product/QuantitySelector";
import ReviewList from "../components/product/ReviewList";

function ProductDetailsPage(){
    const { id } = useParams();
    const {addToCart} = useCart();

    const [product, setProduct] = useState(null);
    const[loading, setLoading] =useState(true);
    const [error, setError] = useState(null);

    const[reviews, setReviews] = useState([]);
    const[reviewsLoading, setReviewsLoading]=useState(true);

    const [quantity, setQuantity] = useState(1);
    const[selectedColor, setSelectedColor] = useState(null);

    useEffect(()=>{
        let ignore = false;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        setError(null);
        setQuantity(1);

        getProductsById(id)
        .then((data)=>{
            if(ignore) return;
            setProduct(data);
            setSelectedColor(data.colors?.[0]|| null);
        })
        .catch(()=>{
            if(ignore) return;
            setError("Product not found")})
        .finally(()=>{
            if(ignore) return;
            setLoading(false)
        })

        return()=>{
            ignore=true;
        }
    },[id])

    useEffect(()=>{
        let ignore=false;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setReviewsLoading(true);
        setReviews([]);
        getReviewsByProduct(id)
        .then((data)=>{
            if(!ignore){
                setReviews(data);
            }
        })
        .catch(()=> {
            if(!ignore){
                setReviews([]);
            }
        })
        .finally(()=>{
            if(!ignore) setReviewsLoading(false);});

            return()=>{
                ignore = true;
            };
    }, [id]);


    const handleAddToCart =()=>{
        for(let i=0; i<quantity; i++){
            addToCart({
                id: product.id,
                name:product.name,
                price: product.price,
                image: product.thumbnail,
                quantity,
            });
        }
    };

    if(loading){
        return <p className="page-status container py-5">Loading product...</p>
    }
    if(error || !product){
        return <p className="page-status page-status-error container py-5">{error}</p>
    }

    return(
        <div className="product-detail container py-5">
            <div className="row g-5">
                <div className="col-12 col-md-6">
                    <ImageGallery images={product.images} productName={product.name}/>

                </div>

                <div className="col-12 col-md-6">
                    <p className="product-detail__brand">{product.brand}</p>
                    <h1 className="product-detail__name">{product.name}</h1>

                    <div className="product-detail__rating">
                        <Star size={16} fill="currentColor"/>
                        <span>{product.rating}</span>
                        <span className="product-detail__review-count">
                            ({product.reviewCount} reviews)
                        </span>
                    </div>
                    <div className="product-detail__price-row">
                        <span className="product-detail__price">
                            ${Number(product.price.toFixed(2))}
                        </span>
                        {product.isOnSale &&(
                            <>
                            <span className="product-detail__original-price">
                                -{product.discountPercent}%
                            </span>
                            </>
                        )}
                    </div>
                    <p className="product-detail__description">{product.description}</p>

                    {product.colors?.length>0 &&(
                        <div className="product-detail__colors">
                            <p>Color:</p>
                            {product.colors.map((color)=>(
                                <button
                                key={color}
                                className={`product-detail__color-swatch ${
                                    selectedColor === color? 'product-detail__color-swatch--active'
                                    :''
                                }`}
                                onClick={()=> setSelectedColor(color)}
                                >{color}
                                </button>
                            ))}
                        </div>
                    )}
                    <div className="product-detail__actions">
                        <QuantitySelector quantity={quantity} 
                        onChange={setQuantity}
                        max={product.stock}/>
                        <button className="product-detail__add-btn"
                        onClick={handleAddToCart}
                        disabled={product.stock ===0}>
                            <ShoppingCart size={18}/>
                            {product.stock ===0? 'Out of Stock': 'Add to Cart'}
                        </button>
                    </div>
                    <p className="product-detail__stock">
                        {product.stock > 0 ?
                        `${product.stock} in stock`
                    : 'Currently unavailable'}
                    </p>
                </div>
            </div>
            <div className="product-detail__reviews">
                <h2>Customer Reviews</h2>
                <ReviewList reviews = {reviews} loading={reviewsLoading}/>
            </div>
            
        </div>
    );
}

export default ProductDetailsPage;