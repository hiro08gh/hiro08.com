import React from 'react';
import { MainLayout } from '../components/Layouts/MainLayout';
import { NotFound } from '../components/NotFound';

const NotFoundPage: React.VFC = () => {
  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  )
} 

export default NotFoundPage;
