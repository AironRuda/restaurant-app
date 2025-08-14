import {
  IAuthResponse,
  ICreateUserCredentials,
  ILoginCredentials,
} from "./types";

export interface IAuthRepository {
  login(credentials: ILoginCredentials): Promise<IAuthResponse>;
  createUser(credentials: ICreateUserCredentials): Promise<IAuthResponse>;
}
