import { RootState } from "@app/store";
import { ProductState } from "@app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
    loading: false,
    error: undefined,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setError, setLoading } = productSlice.actions;

export const ProductSelector = (state: RootState) => state.product;

export default productSlice.reducer;

