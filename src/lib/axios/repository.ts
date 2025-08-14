import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";
import axios from "axios";
import { IApiRepository } from "./types";

export class AxiosRepository implements IApiRepository {
  private _axios: AxiosInstance;

  constructor() {
    this._axios = this.createAxiosInstance();
  }

  createAxiosInstance() {
    const axiosConfig: CreateAxiosDefaults = {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const axiosInstance = axios.create(axiosConfig);

    axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
      }
    );

    return axiosInstance;
  }

  async Get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    try {
      const response = await this._axios.get<T>(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async Post<T>(endpoint: string, data?: Record<string, unknown>): Promise<T> {
    try {
      const response = await this._axios.post<T>(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
