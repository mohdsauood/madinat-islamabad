import React, { useEffect, useState } from 'react';
import TitleHeader from '../../components/title-header/TitleHeader';
import RenderMap from '../../components/address-page/render-map/RenderMap';
import NavbarDesktop from '../../components/nav/navbar-desktop/NavbarDesktop';
import getUserType from '../../utils/getUserType';
import { useCartDispatch } from '../../context/cart-provider-context/cart-provider-context';
import { providers, useSession, signIn } from 'next-auth/client';
import updateUserFromSession from '../../utils/updateUserFromSession';

export default function index() {
  const [session] = useSession();
  const cartDispatch = useCartDispatch();
  useEffect(() => {
    updateUserFromSession(session, cartDispatch);
  }, [session]);
  return (
    <>
      <NavbarDesktop />
      <TitleHeader title="Address" />
      <div>
        <RenderMap />
      </div>
    </>
  );
}
