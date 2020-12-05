import React from 'react';
import TitleHeader from '../../../components/title-header/TitleHeader';
import Addresses from '../../../components/manage-address-page/addresses/Addresses';
import NavbarDesktop from '../../../components/nav/navbar-desktop/NavbarDesktop';
import ProtectedRoute from '../../../utils/ProtectedRoute';
import BreadCrumbs from '../../../components/bread-crumbs/BreadCrumbs';
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
            { name: 'view-account', path: '/user/account' },
          ]}
          currentPage={{ name: 'manage-address' }}
        />
        <TitleHeader title="manage address" />
        <Addresses />
      </ProtectedRoute>
    </>
  );
}

const seo = {
  title: 'Madinat Islamabad Sharjah | Manage Address',
  noindex: true,
};
