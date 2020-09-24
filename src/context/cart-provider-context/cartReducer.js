import React from 'react';
import {
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_ITEM,
  REMOVE_ITEM,
} from '../types/types';
export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case REMOVE_ITEM: {
      return state.filter((item) => item.name !== action.payload.name);
    }
    case INCREASE_ITEM: {
      return state.map((item) => {
        if (item.name == action.payload.name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    }
    case DECREASE_ITEM: {
      return state.map((item) => {
        if (item.name == action.payload.name) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
