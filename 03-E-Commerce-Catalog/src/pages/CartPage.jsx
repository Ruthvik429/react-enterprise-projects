import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

function CartPage(){

    const { items, cartTotal, clearCart } = useCart();

    const handleClearCart =()=>{
        const confirmed = window.confirm(
            "Are you sure you want to clear your cart?"
        );
        if(confirmed){
            clearCart()
        }
    }

    if(items.length === 0){
        return(
            <div className="cart-page cart-page--empty container py-5 text-center">
                <ShoppingBag size={64} className="cart-page__empty-icon"/>
                <h1>Your cart is empty</h1>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/catalog" className="cart-page__browse-btn">
                Browse Products 
                </Link>
            </div>
        )
    }
    return(
        <div className="cart-page container py-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
   <h1>
        Your Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
    </h1>

    <button
        className="btn btn-outline-danger"
        onClick={handleClearCart}
    >
        Clear Cart
    </button>
</div>
            <div className="row g-4">
                <div className="col-12 col-lg-8">
                    <div className="cart-page__items">
                        <AnimatePresence>
                            {items.map((item)=>(
                                <CartItem key={item.id} item={item}/>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <CartSummary subTotal={cartTotal}/>
                </div>
            </div>
        </div>
    )
}

export default CartPage;