import { IProductRepository } from "../../domain/repository";
import { IProductData } from "../../domain/types";

export class GetProductsUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(): Promise<IProductData[]> {
    return this.productRepository.getProducts();
  }
}
