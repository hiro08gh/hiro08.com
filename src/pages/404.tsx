import React from 'react';

import { MainLayout } from '../components/layouts/MainLayout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
);

export default NotFoundPage;
