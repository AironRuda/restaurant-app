import { ICreateProductCredentials, IProductData } from "./types";

export interface IProductRepository {
  getProducts(): Promise<IProductData[]>;
  createProduct(product: ICreateProductCredentials): Promise<IProductData>;
}
