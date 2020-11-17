import React from 'react';
import TitleHeader from '../../../components/title-header/TitleHeader';
import Addresses from '../../../components/manage-address-page/addresses/Addresses';
import NavbarDesktop from '../../../components/nav/navbar-desktop/NavbarDesktop';
import ProtectedRoute from '../../../utils/ProtectedRoute';
import BreadCrumbs from '../../../components/bread-crumbs/BreadCrumbs';

export default function index() {
  return (
    <>
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
