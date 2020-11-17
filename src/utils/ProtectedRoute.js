import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCartState } from '../context/cart-provider-context/cart-provider-context';
export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const cartState = useCartState();
  useEffect(() => {
    if (!cartState.user.name) {
      router.push('/sign-in');
    }
  }, [cartState]);
  return <div> {children}</div>;
}
