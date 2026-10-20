import { createSlice } from '@reduxjs/toolkit';
const loadCart = () => { try { return JSON.parse(localStorage.getItem('paradise-cart') || '[]'); } catch { return []; } };
const cartSlice = createSlice({
  name: 'cart', initialState: { items: loadCart() },
  reducers: {
    addItem(state, action) { const product = action.payload; const existing = state.items.find(i => i.id === product.id); if (existing) existing.quantity += 1; else state.items.push({ ...product, quantity: 1 }); },
    incrementItem(state, action) { const item = state.items.find(i => i.id === action.payload); if (item) item.quantity += 1; },
    decrementItem(state, action) { const item = state.items.find(i => i.id === action.payload); if (item) { item.quantity -= 1; if (item.quantity <= 0) state.items = state.items.filter(i => i.id !== action.payload); } },
    removeItem(state, action) { state.items = state.items.filter(i => i.id !== action.payload); }
  }
});
export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartQuantity = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export default cartSlice.reducer;
