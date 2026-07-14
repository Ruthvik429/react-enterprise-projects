import { Star } from "lucide-react";

function ReviewList({ reviews, loading}){
    if(loading){
        return <p className="review-list__status">Loading reviews...</p>

    }
    if(reviews.length ===0){
        return <p className="review-list__status">No reviews yet for this product.</p>
    }

    return(
        <div className="review-list">
            {reviews.map((review)=>(
                <div className="review-list__item" key={review.id}>
                    <div className="review-list__header">
                        <strong>{review.username}</strong>
                        {review.verifiesPurchase &&(
                        <span className="review-list__verified">Verifies Purchase</span>

                        )}
                    </div>
                    <div className="review-list__rating">
                        {Array.from({ length: 5},(_,i)=>(
                            <Star
                            key={i}
                            size={14}
                            fill={i< Math.round(review.rating)?'currentColor':'none'}/>
                        ))}
                    </div>
                <p className="review-list__title">{review.title}</p>
                <p className="review-list__comment">{review.comment}</p>
                </div>
            ))}
        </div>
    )
}

export default ReviewList;