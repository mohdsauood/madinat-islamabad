import React, { useState } from 'react';
import TitleHeader from '../../components/title-header/TitleHeader';
import RenderMap from '../../components/address-page/render-map/RenderMap';
import NavbarDesktop from '../../components/nav/navbar-desktop/NavbarDesktop';
export default function index() {
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
