import React, { useEffect, useState } from 'react';
import TitleHeader from '../../components/title-header/TitleHeader';
import RenderMap from '../../components/address-page/render-map/RenderMap';
import NavbarDesktop from '../../components/nav/navbar-desktop/NavbarDesktop';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
import ProtectedRoute from '../../utils/ProtectedRoute';
import { NextSeo } from 'next-seo';
export default function index() {
  return (
    <>
      <NextSeo {...seo} />
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

const seo = {
  title: ' Madinat Islamabad Restaurant | Add Your Address ',
  noindex: true,
};
