import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';

export default function BreadCrumbs({ path, currentPage }) {
  console.log(path);
  return (
    <Breadcrumb>
      {path?.map((item) => {
        return (
          <Breadcrumb.Item>
            <Link href={item.href}>{item.name}</Link>
          </Breadcrumb.Item>
        );
      })(<Breadcrumb.Item active>{currentPage.name}</Breadcrumb.Item>)}
    </Breadcrumb>
  );
}
