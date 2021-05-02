import React from 'react';
import { MainLayout } from '../components/Layouts/MainLayout';
import { About } from '../components/About';

const AboutPage: React.VFC = () => {
  return (
    <MainLayout>
      <About />
    </MainLayout>
  )
} 

export default AboutPage;
