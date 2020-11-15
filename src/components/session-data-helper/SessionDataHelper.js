import React, { useEffect } from 'react';
import { useCartDispatch } from '../../context/cart-provider-context/cart-provider-context';
import updateUserFromSession from '../../utils/updateUserFromSession';
import { useSession } from 'next-auth/client';

export default function SessionDataHelper({ Component, pageProps }) {
  const cartDispatch = useCartDispatch();
  const [session] = useSession();

  useEffect(() => {
    console.log('session change triggered useEffect');
    updateUserFromSession(session, cartDispatch);
  }, [session]);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
