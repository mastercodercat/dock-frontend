import React from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

import Review from "components/Review";
import useUser, { UserProps } from "./useUser";

const AppUser = ({ user, current, handleReview }: UserProps) => {
  const { rating, loaded, isReviewed, onChange, onLoad, onReview } = useUser({
    user,
    current,
    handleReview,
  });

  return (
    <div className="border rounded border-1 p-4 mb-2">
      <div className="d-flex justify-content-between">
        <div>
          <span className="d-block fs-3">{user.name}</span>
          <span className="d-block fs-6 text-black-50">
            {user.ratings?.length} Reviews
          </span>
        </div>
        <div className="d-flex flex-column">
          <Button
            variant={loaded ? "warning" : "success"}
            className="d-block mb-2"
            onClick={onLoad}
          >
            {loaded ? "Unload Reviews" : "Load Reviews"}
          </Button>
          {!isReviewed && (
            <>
              <Button variant="primary" className="d-block" onClick={onReview}>
                Review
              </Button>
              <ReactStars
                count={5}
                value={rating}
                onChange={onChange}
                size={24}
                activeColor="#ffd700"
              />
            </>
          )}
        </div>
      </div>
      {loaded && (
        <div>
          {user.ratings?.map((rating) => (
            <Review key={rating.id} rating={rating} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppUser;
