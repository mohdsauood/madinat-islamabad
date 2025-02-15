import {
  UPDATE_USER_ID,
  UPDATE_USER_NAME,
  UPDATE_USER_EMAIL,
  UPDATE_USER_ORDERS,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_MOBILE,
} from '../context/types/types';
export default function getUserType(property) {
  switch (property) {
    case 'id':
      return UPDATE_USER_ID;
    case 'name':
      return UPDATE_USER_NAME;
    case 'email':
      return UPDATE_USER_EMAIL;
    case 'orders':
      return UPDATE_USER_ORDERS;
    case 'mobile':
      return UPDATE_USER_MOBILE;
    case 'address':
      return UPDATE_USER_ADDRESS;
    default:
      throw new Error('invalid user property');
      break;
  }
}
