export type RequestData = Record<
  string,
  string | number | boolean | null | undefined
>;

export interface IApiRepository {
  Get: <T>(endpoint: string, params?: Record<string, string>) => Promise<T>;
  Post: <T>(endpoint: string, data?: RequestData) => Promise<T>;
}
