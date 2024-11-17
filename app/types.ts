import { Product } from "@/types/product";

export interface AuthState {
    isLoggedIn: boolean;
    error?: string;
}

export interface ProductState {
  data: Product[];
  error?: string;
}