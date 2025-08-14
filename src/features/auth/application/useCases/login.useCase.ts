import { IAuthRepository } from "../../domain/repository";
import {
  AuthError,
  IAuthResponse,
  ILoginCredentials,
} from "../../domain/types";

export class LoginUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute(credentials: ILoginCredentials): Promise<IAuthResponse> {
    if (!credentials.email || !credentials.password) {
      throw {
        message: "Email y contraseña son requeridos",
        statusCode: 400,
      } as AuthError;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(credentials.email)) {
      throw {
        message: "El formato del email no es válido",
        statusCode: 400,
      } as AuthError;
    }

    try {
      return await this.authRepository.login(credentials);
    } catch (error) {
      throw error;
    }
  }
}
