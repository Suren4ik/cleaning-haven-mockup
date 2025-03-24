
import React from 'react';
import AppLayout from '@/components/AppLayout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <AppLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BeforeAfterGallery />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </AppLayout>
  );
};

export default Index;
