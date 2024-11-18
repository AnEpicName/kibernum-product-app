import { ProductRequests } from "@/api";
import { Product } from "@/types/product";
import { useAppDispatch } from "@app/hooks";
import { setError, setLoading } from "@app/slices/productSlice";
import { useEffect, useState } from "react";

const useProducts = () => {

    const dispatch = useAppDispatch();

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {                
        dispatch(setLoading(true));
        try {
            const response = await ProductRequests.getProducts();
            setData(response.data);        
            dispatch(setLoading(false));    
        } catch (error: any) {
            dispatch(setError(error.response.data));
            dispatch(setLoading(false));
        }
    };

    return {
        getProducts,
        data,
    };
};

export default useProducts;