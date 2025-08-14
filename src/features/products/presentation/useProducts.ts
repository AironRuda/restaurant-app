import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetProductsUseCase } from "../aplication/useCases/getProducts.useCases";
import { ProductsAxiosRepository } from "../infrastructure/productsAxiosRepository";
import { CreateProductUseCase } from "../aplication/useCases/createProduct.useCase";
import { ICreateProductCredentials } from "../domain/types";

export const useGetProducts = () => {
  const productsRepository = new ProductsAxiosRepository();
  const getProductsUseCase = new GetProductsUseCase(productsRepository);

  const query = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsUseCase.execute(),
  });

  return {
    productsList: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const productsRepository = new ProductsAxiosRepository();
  const createProductUseCase = new CreateProductUseCase(productsRepository);

  const mutation = useMutation({
    mutationFn: async (product: ICreateProductCredentials) => {
      return await createProductUseCase.execute(product);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  return {
    createProduct: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
  };
};
