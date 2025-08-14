import { IAuthRepository } from "../../domain/repository";
import {
  AuthError,
  IAuthResponse,
  ICreateUserCredentials,
} from "../../domain/types";

export class CreateUserUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  validateUser(credentials: ICreateUserCredentials): void {
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

    if (!credentials.name || !credentials.role) {
      throw {
        message: "Nombre y rol son requeridos",
        statusCode: 400,
      } as AuthError;
    }
  }

  async execute(credentials: ICreateUserCredentials): Promise<IAuthResponse> {
    this.validateUser(credentials);
    try {
      return await this.authRepository.createUser(credentials);
    } catch (error) {
      throw error;
    }
  }
}
