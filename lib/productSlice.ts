import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  basket: Product[];
  product: Product;
}

interface Product {
  id: string;
  name: string;
  price: number;
  total: number;
}

const initialState: ProductState = {
  basket: [],
  product: {
    id: "",
    name: "",
    price: 0,
    total: 0,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setBasket: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
      // if the product is already in the basket, increase the total
      const index = state.basket.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.basket[index].total += 1;
        return;
      }
      state.basket = [...state.basket, action.payload];
    },
    increaseTotal: (state, action: PayloadAction<string>) => {
      const index = state.basket.findIndex((p) => p.id === action.payload);
      state.basket[index].total += 1;
    },
    decreaseTotal: (state, action: PayloadAction<string>) => {
      const index = state.basket.findIndex((p) => p.id === action.payload);
      state.basket[index].total -= 1;
      if (state.basket[index].total === 0) {
        state.basket = state.basket.filter((p) => p.id !== action.payload);
      }
    },
  },
});

export const { setBasket, increaseTotal, decreaseTotal } = productSlice.actions;

export default productSlice.reducer;
