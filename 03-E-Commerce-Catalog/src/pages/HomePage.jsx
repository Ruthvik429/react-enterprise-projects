import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import ProductGrid from "../components/product/ProductGrid";


function HomePage(){
 const [featuredProducts, setFeaturedProducts] = useState([]);
const [loading, setLoading] = useState(true);

const trustItems = [
    { icon: Truck, text: "Free shipping over $100" },
    { icon: RotateCcw, text: "Easy 10-day returns" },
    { icon: ShieldCheck, text: "Secure checkout" },
  ];

  

useEffect(()=>{
    getProducts({isFeatured: true})
    .then(setFeaturedProducts)
    .catch(()=> setFeaturedProducts([]))
    .finally(()=> setLoading(false));
},[]);
    return (
        <div className="home-page">
            <section className="hero">
                <div className="container hero__inner">
                    <motion.h1
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration:0.5}}
                    >
                     New Arrivals This Week
                    </motion.h1>

                    <motion.p
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.5, delay: 0.15}}
                    >
                        Discover curated tech, fashion, and home essentials - all in one place.
                    </motion.p>

                    <motion.div
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.5, delay:0.3}}
                    >
                        <Link to='/catalog' className="hero__cta">
                         Shop Now <ArrowRight size={18}/>
                        </Link>
                    </motion.div>
                </div>
            </section>

           <section className="trust-bar">
        <div className="container trust-bar__grid">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="trust-bar__item">
              <Icon size={24} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

            <section className="featured container py-5">
                <div className="featured__header">
                    <h2>Featured Products</h2>
                    <Link to="/catalog" className="featured__view-all">
                    View All <ArrowRight size={16}/>
                    </Link>
                </div>
                {loading?(
                    <p className="page-status">Loading featured products...</p>)
                    : (<ProductGrid products={featuredProducts}/>)
                }
            </section>
        </div>

    )
}

export default HomePage;