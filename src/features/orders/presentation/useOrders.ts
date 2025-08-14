import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderAxiosRepository } from "../infrastructure/orderAxiosRepository";
import { GetOrdersUseCase } from "../aplication/useCases/getOrders.useCases";
import { CreateOrderUseCase } from "../aplication/useCases/createOrder.useCase";
import { IOrderItem } from "../doamin/types";

export const useGetOrders = () => {
  const orderRepository = new OrderAxiosRepository();
  const getOrdersUseCase = new GetOrdersUseCase(orderRepository);

  const query = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrdersUseCase.execute(),
  });

  return {
    ordersList: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  const orderRepository = new OrderAxiosRepository();
  const createOrderUseCase = new CreateOrderUseCase(orderRepository);

  const mutation = useMutation({
    mutationFn: async (order: IOrderItem[]) => {
      return await createOrderUseCase.execute(order);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });

  return {
    createOrder: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
  };
};
