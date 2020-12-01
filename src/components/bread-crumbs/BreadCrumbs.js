import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';
import styles from './BreadCrumbs.module.css';
import { useRouter } from 'next/router';

export default function BreadCrumbs({ path, currentPage }) {
  const router = useRouter();
  const crumbs = path.map((item) => {
    return (
      <Breadcrumb.Item key={item.name} onClick={() => router.push(item.path)}>
        {item.name}
      </Breadcrumb.Item>
    );
  });
  return (
    <Breadcrumb>
      {crumbs}
      <Breadcrumb.Item active>{currentPage.name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
