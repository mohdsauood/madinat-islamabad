import React, { useEffect, useState } from 'react';
import TitleHeader from '../../components/title-header/TitleHeader';
import RenderMap from '../../components/address-page/render-map/RenderMap';
import NavbarDesktop from '../../components/nav/navbar-desktop/NavbarDesktop';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
import ProtectedRoute from '../../utils/ProtectedRoute';
export default function index() {
  return (
    <>
      <ProtectedRoute>
        <NavbarDesktop />
        <BreadCrumbs
          path={[
            { name: 'home', path: '/' },
            { name: 'cart', path: '/cart' },
          ]}
          currentPage={{ name: 'add-address' }}
        />
        <TitleHeader title="Address" />
        <div>
          <RenderMap />
        </div>
      </ProtectedRoute>
    </>
  );
}
