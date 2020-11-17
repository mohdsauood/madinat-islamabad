import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';

export default function BreadCrumbs({ path, currentPage }) {
  const crumbs = path.map((item) => {
    return (
      <Breadcrumb.Item>
        <Link href={item.path}>{item.name}</Link>
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
