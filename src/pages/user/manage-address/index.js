import React from 'react';
import styles from './index.module.css';
import Header from '../../../components/header/Header';
import TitleHeader from '../../../components/title-header/TitleHeader';
import Addresses from '../../../components/manage-address-page/addresses/Addresses';
import NavbarDesktop from '../../../components/nav/navbar-desktop/NavbarDesktop';
import ProtectedRoute from '../../../utils/ProtectedRoute';
export default function index() {
  return (
    <>
      <ProtectedRoute>
        <NavbarDesktop />
        <TitleHeader title="manage address" />
        <Addresses />
      </ProtectedRoute>
    </>
  );
}
