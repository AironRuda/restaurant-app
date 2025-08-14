import { useMutation } from "@tanstack/react-query";
import { ILoginCredentials } from "../../domain/types";
import { LoginUseCase } from "../../application/useCases/login.useCase";
import { AuthAxiosRepository } from "../../infrastructure/authAxiosRepository";

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
