import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
export const store = configureStore({ reducer: { cart: cartReducer } });
store.subscribe(() => { try { localStorage.setItem('paradise-cart', JSON.stringify(store.getState().cart.items)); } catch {} });
