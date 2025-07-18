import React from 'react';
import HeroSection from '../components/Homepage/HeroSection';
import FeaturesSection from '../components/Homepage/FeaturesSection';
import ImpactSection from '../components/Homepage/ImpactSection';
import HowItWorksSection from '../components/Homepage/HowItWorksSection';
import TestimonialsSection from '../components/Homepage/TestimonialsSection';
import PartnersSection from '../components/Homepage/PartnersSection';
import MarqueeSection from '../components/Homepage/MarqueeSection';
import FooterSection from '../components/Homepage/FooterSection';
import AnimatedStatsSection from '../components/Homepage/AnimatedStatsSection';
import CTABannerSection from '../components/Homepage/CTABannerSection';
import FAQSection from '../components/Homepage/FAQSection';
import BlogHighlightsSection from '../components/Homepage/BlogHighlightsSection';
import TrustBadgesSection from '../components/Homepage/TrustBadgesSection';

const Homepage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <HeroSection />
            <AnimatedStatsSection />
            <FeaturesSection />
            <CTABannerSection />
            <HowItWorksSection />
            <ImpactSection />
            <TrustBadgesSection />
            <TestimonialsSection />
            <PartnersSection />
            <BlogHighlightsSection />
            <FAQSection />
        </div>
    );
};

export default Homepage; 