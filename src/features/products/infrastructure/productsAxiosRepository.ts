import { AxiosRepository } from "@/lib/axios/repository";
import { IProductRepository } from "../domain/repository";
import { ICreateProductCredentials, IProductData } from "../domain/types";

export const apiRepository = new AxiosRepository();

const ProductsEndpoints = {
  getProducts: "/products",
  createProduct: "/products",
};

export class ProductsAxiosRepository implements IProductRepository {
  constructor(private readonly api = apiRepository) {}

  async getProducts(): Promise<IProductData[]> {
    try {
      const response = await this.api.Get<IProductData[]>(
        ProductsEndpoints.getProducts
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createProduct(
    product: ICreateProductCredentials
  ): Promise<IProductData> {
    try {
      const response = await this.api.Post<IProductData>(
        ProductsEndpoints.createProduct,
        product
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
