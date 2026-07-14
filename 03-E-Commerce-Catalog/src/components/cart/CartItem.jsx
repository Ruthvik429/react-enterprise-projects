import { useCart } from "../../context/useCart";
import { motion } from 'framer-motion';
import QuantitySelector from "../product/QuantitySelector";
import { X } from "lucide-react";

function CartItem({item}){
    const {removeFromCart,  updateQuantity} = useCart();

    return(
        <motion.div
        layout
        initial={{opacity:0, x: -20}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:20}}
        transition={{duration: 0.25}}
        className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item__image" />
            <div className="cart-item__details">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__price">${item.price.toFixed(2)} each</p>
            </div>

            <QuantitySelector
            quantity={item.qty}
            onChange={(newQty)=> updateQuantity(item.id, newQty)}/>

            <p className="cart-item__line-total">
                ${(item.price * item.qty).toFixed(2)}
            </p>

            <button className="cart-item__remove"
            onClick={()=> removeFromCart(item.id)}
            aria-label={`Remove ${item.name} from cart`}>
                <X size={18}/>
            </button>
        </motion.div>

    )
}

export default CartItem;