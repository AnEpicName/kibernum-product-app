import { Product } from "@/types/product";

export interface AuthState {
    error?: string;
    isLoggedIn: boolean;
}

export interface ProductState {
  error?: string;
  loading: boolean;
}