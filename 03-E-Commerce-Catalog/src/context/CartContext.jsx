import { useReducer} from 'React';
import CartContext from './CartContext';

const initialState = {
  items:[],
}

function cartReducer(state, action){
    switch(action.type){
        case 'ADD_ITEM':{
            const existing = state.items.find((item)=>item.id ===action.payload.id);

            if(existing){
                return{
                    ...state,
                    items: state.items.map((item)=>
                    item.id===action.payload.id ? {...item, qty: item.qty+1} : item),
                };
            }
            return {
                ...state,
                items:[...state.items, {...action.payload, qty:1}],
            };

        }

        case 'REMOVE_ITEM':{
            return{
                ...state,
                items: state.items.filter((item)=> item.id  !== action.payload.id),

            };
        }

        case 'UPDATE_QUANTITY':{
            return{
                ...state,
                items: state.items.map((item)=> item.id === action.payload.id ? {...item, qty: Math.max(1, action.payload.qty)} : item),
            };
        }

        case 'CLEAR_CART': {
            return {
                ...state,items:[]

            };
        }

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export function CartProvider({ children }){
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart =(product)=> dispatch({type: 'ADD_ITEM', payload: product});
    const removeFromCart = (id) => dispatch({type: 'REMOVE_ITEM', payload: { id }});
    const updateQuantity = (id, qty) => dispatch({ type: 'UPDATE_QUANTITY', payload: {id, qty}});
    const clearCart = () => dispatch({type: 'CLEAR_CART'});

    const cartCount = state.items.reduce((total, item)=> total+ item.qty,0);
    const cartTotal = state.items.reduce(
        (total, item)=> total + item.price*item.qty,0
    );
    const value ={
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal
    }

    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>;

}

