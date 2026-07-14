import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="custom-footer">
            <div className="container">
                <div className="custom-footer__grid">
                    <div>
                        <h4 className="custom-footer__brand">ShopEase</h4>
                        <p className="custom-footer__tagline">
                            Quality products, delivered with care.
                        </p>

                    </div>
                    <div>
                        <h5>
                            <Link to="/catalog">All Products</Link>
                            <Link to="/cart">Cart</Link>
                        </h5>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <a href="#!">About Us</a>
                        <a href="#!">Contact</a>
                    </div>
                </div>
                <p className="custom-footer__copyright">
                   © {new Date().getFullYear()} shopEase. Built for learning purpose.  
                </p>
            </div>
        </footer>
    )
}

export default Footer;