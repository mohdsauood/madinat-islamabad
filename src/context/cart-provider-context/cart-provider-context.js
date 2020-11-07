import React, { useReducer } from 'react';
import cartReducer from './cartReducer';

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

const initialState = {
  items: [],
  user: {
    id: null,
    mobile: null,
    name: null,
    email: null,
    address: [],
    orders: null,
  },
  bill: {
    request: null,
    total: null,
    deliveryFee: null,
    discount: null,
    toPay: null,
    coupon: null,
  },
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

function useCartState() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartStateContext Provier');
  }
  return context;
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCart must be used within a CartDispatchContext Provier'
    );
  }
  return context;
}

function useCart() {
  return [useCartState(), useCartDispatch()];
}

export { CartProvider, useCartState, useCartDispatch, useCart };
