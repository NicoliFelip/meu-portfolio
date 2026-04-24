import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import EducationSection from '@/components/portfolio/EducationSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}