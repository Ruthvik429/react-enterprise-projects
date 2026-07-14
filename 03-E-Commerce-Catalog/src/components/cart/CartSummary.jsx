import { Link } from "react-router-dom";

const SHIPPING_FLAT_RATE = 5.99;
const FREE_SHIPPING_THRESHOLD = 100;
const TAX_RATE = 0.08;

function CartSummary({ subTotal }){
    const shipping = subTotal>= FREE_SHIPPING_THRESHOLD || subTotal === 0
    ? 0 : SHIPPING_FLAT_RATE;

    const tax = subTotal*TAX_RATE;
    const total = subTotal+shipping+tax;

    return(
        <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary__row">
                <span>Shipping</span>
                <span>{shipping ===0? 'Free':`${shipping.toFixed(2)}`}</span>
            </div>

            {subTotal > 0 && subTotal < FREE_SHIPPING_THRESHOLD &&(
                <p className="cart-summary__hint">
                    Add ${(FREE_SHIPPING_THRESHOLD - subTotal).toFixed(2)} more for free shipping
                </p>
            )}

            <div className="cart-summary__row">
                <span>Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
            </div>
            <div className="cart-summary__row cart-summary__row--total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button className="cart-summary__checkout" disabled={subTotal === 0}>
                Proceed to Checkout
            </button>

            <Link to="/catalog" className="cart-summary__continue">
            Continue Shopping 
            </Link>
        </div>
    )
}

export default CartSummary;