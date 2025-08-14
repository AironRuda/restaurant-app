export interface IApiRepository {
  Get: <T>(endpoint: string, params?: Record<string, string>) => Promise<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Post: <T>(endpoint: string, data?: any) => Promise<T>;
}
