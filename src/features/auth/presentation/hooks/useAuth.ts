import { useMutation } from "@tanstack/react-query";
import { ICreateUserCredentials, ILoginCredentials } from "../../domain/types";
import { LoginUseCase } from "../../application/useCases/login.useCase";
import { AuthAxiosRepository } from "../../infrastructure/authAxiosRepository";
import { CreateUserUseCase } from "../../application/useCases/craeteUser.useCase";

export const useLogin = () => {
  const authRepository = new AuthAxiosRepository();
  const loginUseCase = new LoginUseCase(authRepository);

  const loginMutation = useMutation({
    mutationFn: async (credentials: ILoginCredentials) => {
      return await loginUseCase.execute(credentials);
    },
  });

  return {
    login: loginMutation.mutateAsync,
    isLoading: loginMutation.isPending,
    isError: loginMutation.isError,
  };
};

export const useCreateUser = () => {
  const authRepository = new AuthAxiosRepository();
  const createUserUseCase = new CreateUserUseCase(authRepository);

  const createUserMutation = useMutation({
    mutationFn: async (credentials: ICreateUserCredentials) => {
      return await createUserUseCase.execute(credentials);
    },
  });

  return {
    createUser: createUserMutation.mutateAsync,
    isLoading: createUserMutation.isPending,
    isError: createUserMutation.isError,
  };
};
