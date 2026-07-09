import { motion } from "framer-motion";
import "./Skeleton.css";

function SKeletonCard(){
    return(
        <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="skeleton-card">
                <motion.div
                className="skeleton-image"
                animate={{backgroundPosition:["-200px 0", "200px 0"]}}
                transition={{duration:1.2, repeat: Infinity, ease:"linear"}}/>
                <div className="skeleton-body">
                    <motion.div
                    className="skeleton-line skeleton-title"
                    animate={{backgroundPosition: ["-200px 0", "200px 0"]}}
                    transition={{duration: 1.2, repeat: Infinity, ease:"linear", delay:0.1}}
                    />
                    <motion.div
                    className="skeleton-line skeleton-subtitle"
                    animate={{backgroundPosition: ["-200px 0", "200px 0"]}}
                    transition={{duration: 1.2, repeat:Infinity, ease:"linear", delay:0.2}}
                    />

                </div>
            </div>
        </div>
    )
}
export default SKeletonCard