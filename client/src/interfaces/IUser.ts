export interface IUser {
  username: string;
  avatar?: string;
  email: {
    value: string;
    verified: boolean;
    lastEmail: string;
    updatedAt: number;
  };
  createdAt: number;
}

export interface IUserUpdatePayload {
  email?: string;
}

export interface IUserJWTPayload {
  userDocId: string;
  username: string;
  avatar?: string;
}

export interface IUserToFrontEnd {
  username: string;
  avatar: string;
  email?: {
    value: string;
    verified: boolean;
    lastEmail: string;
    updatedAt: number;
    googleSub: string | null;
  };
  createdAt: number;
}
