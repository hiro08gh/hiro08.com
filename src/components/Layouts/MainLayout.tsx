import React from 'react';
import { Meta } from '../Meta';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalStyles } from '../GlobalStyles';

import 'prismjs/themes/prism-tomorrow.css';

type Props = {
  children: React.ReactNode;
  metaTitle?: string | undefined;
  metaDescription?: string;
  metaImage?: string;
};

export const MainLayout: React.FC<Props> = ({ children, metaTitle = "", metaDescription, metaImage }) => {
  return (
    <div className="main">
      <Meta metaTitle={metaTitle} metaDescription={metaDescription} metaImage={metaImage} />
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
