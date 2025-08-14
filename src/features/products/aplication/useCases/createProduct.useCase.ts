import { IProductRepository } from "../../domain/repository";
import { ICreateProductCredentials, IProductData } from "../../domain/types";

export class CreateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  validateProduct(product: ICreateProductCredentials): void {
    if (!product.name || !product.price || !product.description) {
      throw {
        message: "Nombre, precio y descripción son requeridos",
        statusCode: 400,
      };
    }

    if (product.price <= 0) {
      throw {
        message: "El precio debe ser mayor a 0",
        statusCode: 400,
      };
    }
  }

  async execute(product: ICreateProductCredentials): Promise<IProductData> {
    try {
      this.validateProduct(product);
      return await this.productRepository.createProduct(product);
    } catch (error) {
      throw error;
    }
  }
}
