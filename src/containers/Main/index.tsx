import React from "react";
import { Row, Col } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { RootState } from "store/store";
import { fetchUsers, reviewUser } from "store/modules/rate";

import AppLoader from "components/Loader";
import AppUser from "components/User";
import { User } from "store/modules/auth/types";

const Main = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: RootState) => state.rate.users);
  const currentUser = useAppSelector((state: RootState) => state.auth.user);
  const loading = useAppSelector((state: RootState) => state.rate.loading);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleReview = (rating: number, user: User) => {
    dispatch(reviewUser({ rating, user }));
  };

  return (
    <Row>
      <Col md={6} lg={6} className="mx-auto mt-5">
        {loading ? (
          <AppLoader />
        ) : (
          <>
            {users.map((user) => (
              <AppUser
                key={user.id}
                user={user}
                current={currentUser}
                handleReview={handleReview}
              />
            ))}
          </>
        )}
      </Col>
    </Row>
  );
};

export default Main;
