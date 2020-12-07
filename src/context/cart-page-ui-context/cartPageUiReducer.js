import React from 'react';
import {
  SHOW_COUPON_MODAL,
  HIDE_COUPON_MODAL,
  SHOW_ADDRESS_MODAL,
  HIDE_ADDRESS_MODAL,
  SHOW_NUMBER_MODAL,
  HIDE_NUMBER_MODAL,
  SHOW_COUPON_SUCCESS_MODAL,
  HIDE_COUPON_SUCCESS_MODAL,
  SHOW_MINIMUM_TOTAL_MODAL,
  HIDE_MINIMUM_TOTAL_MODAL,
  SHOW_RESTO_CLOSED_MODAL,
  HIDE_RESTO_CLOSED_MODAL,
  SHOW_SPINNER,
  HIDE_SPINNER,
} from '../types/types';
export default function cartPageUiReducer(state, action) {
  switch (action.type) {
    case SHOW_COUPON_MODAL:
    case HIDE_COUPON_MODAL: {
      return { ...state, showCouponModal: !state.showCouponModal };
    }
    case SHOW_ADDRESS_MODAL:
    case HIDE_ADDRESS_MODAL: {
      return { ...state, showAddressModal: !state.showAddressModal };
    }
    case SHOW_NUMBER_MODAL:
    case HIDE_NUMBER_MODAL: {
      return { ...state, showNumberModal: !state.showNumberModal };
    }
    case SHOW_COUPON_SUCCESS_MODAL:
    case HIDE_COUPON_SUCCESS_MODAL: {
      return { ...state, showCouponSuccessModal: !state.showNumberModal };
    }
    case SHOW_MINIMUM_TOTAL_MODAL:
    case HIDE_MINIMUM_TOTAL_MODAL: {
      return { ...state, showMinimumTotalModal: !state.showMinimumTotalModal };
    }
    case SHOW_RESTO_CLOSED_MODAL:
    case HIDE_RESTO_CLOSED_MODAL: {
      return { ...state, showRestoCloseModal: !state.showRestoCloseModal };
    }
    case SHOW_SPINNER:
    case HIDE_SPINNER: {
      return { ...state, showSpinner: !state.showSpinner };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
