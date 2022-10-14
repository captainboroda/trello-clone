export interface IUser {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  username: string;
  //TODO: remove password field when remove it from response
  password: string;
  isActive: boolean;
}
