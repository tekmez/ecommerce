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
  basket: JSON.parse(localStorage.getItem("basket") || "[]"),
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
      const existingProduct = state.basket.find(
        (p) => p.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.total += 1;
      } else {
        state.basket.push(action.payload);
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    increaseTotal: (state, action: PayloadAction<string>) => {
      const product = state.basket.find((p) => p.id === action.payload);
      if (product) {
        product.total += 1;
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decreaseTotal: (state, action: PayloadAction<string>) => {
      const index = state.basket.findIndex((p) => p.id === action.payload);
      if (index !== -1) {
        state.basket[index].total -= 1;
        if (state.basket[index].total === 0) {
          state.basket.splice(index, 1);
        }
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const { setBasket, increaseTotal, decreaseTotal } = productSlice.actions;

export default productSlice.reducer;
