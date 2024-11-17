import { RootState } from "@app/store";
import { ProductState } from "@app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
    data: [],
    error: undefined,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setProducts, setError } = productSlice.actions;

export const ProductSelector = (state: RootState) => state.product;

export default productSlice.reducer;

