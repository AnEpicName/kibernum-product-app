import { Product } from "@/types/product";

export interface AuthState {
  token: string;
  error?: string;
}

export interface ProductState {
  data: Product[];
  error?: string;
}