import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCartState } from '../context/cart-provider-context/cart-provider-context';
export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const cartState = useCartState();
  useEffect(() => {
    if (!cartState.user.name) {
      router.push({
        pathname: '/sign-in',
        query: { from: router.asPath },
      });
    }
  }, [cartState]);
  return <div> {children}</div>;
}
