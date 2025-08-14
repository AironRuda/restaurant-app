export interface IProductData {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ICreateProductCredentials {
  name: string;
  price: number;
  description: string;
}
