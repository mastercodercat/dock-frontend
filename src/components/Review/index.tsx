import React from "react";
import ReactStars from "react-rating-stars-component";

import { Rating } from "store/modules/auth/types";
import { formatDate } from "helpers/date.helper";

interface ReviewProps {
  rating: Rating;
}

const Review = ({ rating }: ReviewProps) => {
  const date = React.useMemo(() => {
    return formatDate(rating.createdAt);
  }, [rating]);

  return (
    <div className="d-flex justify-content-between py-2">
      <div>
        <ReactStars
          count={5}
          edit={false}
          value={rating.rating}
          size={18}
          activeColor="#ffd700"
        />
        <span className="fs-6 text-muted">{date}</span>
      </div>
      <div className="">{rating.peer?.name}</div>
    </div>
  );
};

export default Review;
