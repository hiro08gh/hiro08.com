import React from 'react';
import { Meta } from '../shared/Meta';
import 'prismjs/themes/prism-tomorrow.css';
import '../../styles/reset.scss';

import { Header } from '../shared/Header';

type Props = {
  children: React.childeNode;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
};

export const MainLayout: React.FC<Props> = (props) => {
  const { children, metaTitle, metaDescription, metaImage } = props;
  return (
    <>
      <Meta metaTitle={metaTitle} metaDescription={metaDescription} metaImage={metaImage} />
      <Header siteTitle="hiro08.dev" />
      <main>{children}</main>
    </>
  );
};
