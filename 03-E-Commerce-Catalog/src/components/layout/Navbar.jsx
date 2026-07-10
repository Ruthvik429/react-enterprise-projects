import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCart } from "../../context/useCart";

function Navbar(){
    const [menuOpen, setMenuOpen]= useState(false);
    const { cartCount } = useCart();


    return(
        <nav className="navbar navbar-expand-lg custom-navbar shadow-sm sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand custom-navbar__brand">
                ShopEase 
                </Link>

                <button className="custom-navbar__toggle d-lg-none"
                onClick={()=> setMenuOpen((prev)=>!prev)}
                aria-label="Toggle navigation menu">
                    {menuOpen? <X size={24}/> : <Menu size={24}/>}
                </button>

                <div className={`custom-navbar__links ${
                    menuOpen ? 'custom-navbar__links--open':''
                }`}>
                    <Link to="/" className="custom-navbar__link">
                    Home 
                    </Link>
                    <Link className="custom-navbar__link" to="/catalog">
                    Catalog
                    </Link>
                </div>

                <div className="custom-navbar__actions">
                    <button className="custom-navbar__icon-btn" aria-label="Search">
                        <Search size={20}/>

                    </button>

                    <Link to="/cart" className="custom-navbar__icon-btn custom-navbar__cart"
                    aria-label="View cart">
                        <ShoppingCart size={20}/>

                        <AnimatePresence>
                            {cartCount>0 &&(
                                <motion.span 
                                key={cartCount}
                                className="custom-navbar__cart-badge"
                                initial={{scale:0}}
                                animate={{scale:1}}
                                exit={{scale:0}}
                                transition={{type: 'spring', stiffness:400, damping:15}}>
                                    {cartCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;