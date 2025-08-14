export interface IApiRepository {
  Get: <T>(endpoint: string, params?: Record<string, string>) => Promise<T>;
  Post: <T>(endpoint: string, data?: any) => Promise<T>;
}
