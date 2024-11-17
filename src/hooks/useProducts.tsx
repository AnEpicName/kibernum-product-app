import { ProductRequests } from "@/api";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

const useProducts = () => {

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await ProductRequests.getProducts();
            setData(response.data);            
        } catch (error: any) {
            console.log(error);
        }
    };

    const getProduct = async (id: number) => {
        try {
            const response = await ProductRequests.getProduct(id);
            return response.data;
        } catch (error: any) {
            console.log(error);
        }
    };

    return {
        getProducts,
        data,
    };
};

export default useProducts;