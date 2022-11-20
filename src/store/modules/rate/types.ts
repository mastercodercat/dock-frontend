import { User } from "../auth/types";

export interface RateState {
  users: Array<User>;
  loading: boolean;
  reviewing: boolean;
}

export interface ReviewBodyProps {
  rating: number;
  user: User;
}
