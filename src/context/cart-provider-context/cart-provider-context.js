import React, { useReducer } from 'react';
import cartReducer from './cartReducer';

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, []);

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
