import React from "react";

import { User } from "store/modules/auth/types";

export interface UserProps {
  user: User;
  current: Partial<User>;
  handleReview: (rating: number, user: User) => void;
}

const useUser = ({ user, current, handleReview }: UserProps) => {
  const [rating, setRating] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  const isReviewed = React.useMemo(() => {
    return user.ratings?.find((rating) => rating.peerId === current.id);
  }, [user, current]);

  const onChange = (newRating: number) => {
    setRating(newRating);
  };

  const onReview = () => {
    handleReview(rating, user);
  };

  const onLoad = () => {
    setLoaded(!loaded);
  };

  return {
    rating,
    loaded,
    isReviewed,
    onChange,
    onReview,
    onLoad,
  };
};

export default useUser;
