import { AxiosRepository } from "@/lib/axios/repository";
import { IAuthRepository } from "../domain/repository";
import {
  AuthError,
  IAuthResponse,
  ICreateUserCredentials,
  ILoginCredentials,
} from "../domain/types";
import { AxiosError } from "axios";

export const apiRepository = new AxiosRepository();

const AuthEndpoints = {
  login: "/users/login",
  createUser: "/users",
};

export class AuthAxiosRepository implements IAuthRepository {
  constructor(private readonly api = apiRepository) {}

  async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
    try {
      return await this.api.Post<IAuthResponse>(
        AuthEndpoints.login,
        credentials
      );
    } catch (error) {
      const axiosError = error as AxiosError<{
        message: string;
        errors?: Record<string, string[]>;
      }>;
      throw {
        message:
          axiosError.response?.data?.message || "Error al iniciar sesión",
        statusCode: axiosError.response?.status,
        errors: axiosError.response?.data?.errors,
      } as AuthError;
    }
  }

  async createUser(
    credentials: ICreateUserCredentials
  ): Promise<IAuthResponse> {
    try {
      return await this.api.Post<IAuthResponse>(
        AuthEndpoints.createUser,
        credentials
      );
    } catch (error) {
      const axiosError = error as AxiosError<{
        message: string;
        errors?: Record<string, string[]>;
      }>;
      throw {
        message:
          axiosError.response?.data?.message || "Error al crear el usuario",
        statusCode: axiosError.response?.status,
        errors: axiosError.response?.data?.errors,
      } as AuthError;
    }
  }
}
