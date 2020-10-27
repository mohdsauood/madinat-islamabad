import React from 'react';
import {
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_COUPON,
  CLEAR_COUPON,
  UPDATE_NUMBER,
  UPDATE_REQUEST,
  UPDATE_USER_ID,
  UPDATE_USER_NAME,
  UPDATE_USER_EMAIL,
  UPDATE_USER_MOBILE,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_ORDERS,
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
    /* mobile cases*/
    case UPDATE_NUMBER: {
      return {
        ...state,
        user: { ...state.user, mobile: action.payload },
      };
    }
    case UPDATE_REQUEST: {
      return {
        ...state,
        request: action.payload,
      };
    }
    /* user cases*/
    case UPDATE_USER_ID: {
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload,
        },
      };
    }
    case UPDATE_USER_NAME: {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    }
    case UPDATE_USER_EMAIL: {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };
    }
    case UPDATE_USER_MOBILE: {
      return {
        ...state,
        user: {
          ...state.user,
          mobile: action.payload,
        },
      };
    }
    case UPDATE_USER_ADDRESS: {
      return {
        ...state,
        user: {
          ...state.user,
          address: action.payload,
        },
      };
    }
    case UPDATE_USER_ORDERS: {
      return {
        ...state,
        user: {
          ...state.user,
          orders: action.payload,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
