import React from 'react';
import {
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_COUPON,
  CLEAR_COUPON,
} from '../types/types';
export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.payload.name),
      };
    }
    case INCREASE_ITEM: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.name == action.payload.name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.name == action.payload.name) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    }
    /*coupon cases*/
    case UPDATE_COUPON: {
      return {
        ...state,
        bill: {
          ...state.bill,
          coupon: { ...state.bill.coupon, name: action.payload },
        },
      };
    }
    case CLEAR_COUPON: {
      return {
        ...state,
        bill: { ...state.bill, coupon: { ...state.bill.coupon, name: null } },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
