import { API_URL } from "@/constants";
import { Auth } from "@/types/auth";
import axios, { Axios, AxiosResponse } from "axios";

export const loginUser = async (
    username: string, password: string
): Promise<AxiosResponse<Auth>> => {
  return await axios.post(`${API_URL}/auth/login`, { username, password });
};
