import { IAuthResponse, ILoginCredentials } from "./types";

export interface IAuthRepository {
  login(credentials: ILoginCredentials): Promise<IAuthResponse>;
}
