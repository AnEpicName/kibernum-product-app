import { API_URL } from "@/constants";
import { Product } from "@/types/product";
import axios, { AxiosResponse } from "axios";

export const getProducts = async (): Promise<AxiosResponse<Product[]>> => {
  return await axios.get(`${API_URL}/products`);
};

export const getProduct = async (id: number): Promise<AxiosResponse<Product>> => {
  return await axios.get(`${API_URL}/products/${id}`);
};