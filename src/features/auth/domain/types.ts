export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IAuthResponse {
  message: string;
  email: string;
  role: string;
}

export interface AuthError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}
