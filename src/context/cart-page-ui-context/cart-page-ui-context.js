import React, { useReducer } from 'react';
import cartPageUiReducer from './cartPageUiReducer';

const CartPageUiStateContext = React.createContext();
const CartPageUiDispatchContext = React.createContext();

const intialState = {
  showCouponModal: false,
  showCouponSuccessModal: false,
  showNumberModal: false,
  showAddressModal: false,
  showMinimumTotalModal: false,
  showRestoCloseModal: false,
  showSpinner: false,
};
function CartPageUiProvider({ children }) {
  const [state, dispatch] = useReducer(cartPageUiReducer, intialState);

  return (
    <CartPageUiStateContext.Provider value={state}>
      <CartPageUiDispatchContext.Provider value={dispatch}>
        {children}
      </CartPageUiDispatchContext.Provider>
    </CartPageUiStateContext.Provider>
  );
}

function useCartPageUiState() {
  const context = React.useContext(CartPageUiStateContext);
  if (context === undefined) {
    throw new Error(
      'useCartPageUi must be used within a CartPageUiStateContext Provier'
    );
  }
  return context;
}

function useCartPageUiDispatch() {
  const context = React.useContext(CartPageUiDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCartPageUi must be used within a CartPageUiDispatchContext Provier'
    );
  }
  return context;
}

function useCartPageUi() {
  return [useCartPageUiState(), useCartPageUiDispatch()];
}

export {
  CartPageUiProvider,
  useCartPageUiState,
  useCartPageUiDispatch,
  useCartPageUi,
};
