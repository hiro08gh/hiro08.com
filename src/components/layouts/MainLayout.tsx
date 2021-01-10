import React from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import { Meta } from '../shared/Meta';
import { GlobalStyles } from '../shared/GlobalStyles';

import { Header } from '../shared/Header';
import { Footer } from '../shared/Footer';

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
      <GlobalStyles />
      <Header siteTitle="hiro08.dev" />
      <main>{children}</main>
      <Footer />
    </>
  );
};
