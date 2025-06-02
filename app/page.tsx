import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/home/hero-section'
import CarCategories from '@/components/home/car-categories'
import FeaturedListings from '@/components/home/featured-listings'
import ComparisonTool from '@/components/home/comparison-tool'
import PremiumServices from '@/components/home/premium-services'
import NewsletterSection from '@/components/home/newsletter-section'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CarCategories />
        <FeaturedListings />
        <ComparisonTool />
        <PremiumServices />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}