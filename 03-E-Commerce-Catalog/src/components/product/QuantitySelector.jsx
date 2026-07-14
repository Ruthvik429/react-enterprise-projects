import { Minus,Plus } from "lucide-react";

function QuantitySelector({quantity, onCHange, max=99}){
    const decrement= ()=> onCHange(Math.max(1, quantity-1));
    const increment=()=>onCHange(Math.min(max, quantity+1));

    return(
        <div className="quantity-selector">
            <button onClick={decrement}
            disabled={quantity<=1}
            aria-label="Decrease quantity">
                <Minus size={16}/>
            </button>
            <span className="quantity-selector__value">{quantity}</span>
            <button
            onClick={increment}
            disabled={quantity>=max}
            aria-label="Increase quantity">
                <Plus size={16}/>
            </button>
        </div>
    )
}

export default QuantitySelector;