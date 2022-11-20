export interface Credentials {
  name: string;
  password: string;
}

export interface Rating {
  id: number;
  rating: number;
  createdAt: string;
  peerId: number;
  userId: number;
  peer: User;
  user: User;
}

export interface User {
  id: number;
  name: string;
  ratings?: Array<Rating>;
}

export interface AuthState {
  user: Partial<User>;
  loading: boolean;
}

export interface AuthResult {
  user: User;
  token: string;
}
