import { useCartState } from '../context/cart-provider-context/cart-provider-context';

export default function isUserAuthenticated() {
  const cartState = useCartState();
  const { user } = cartState;
  if (user.name) {
    return true;
  } else {
    return false;
  }
}
