import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Sobre", href: "#sobre" },
        { label: "Experiência", href: "#experiencia" },
        { label: "Formação", href: "#formacao" },
        { label: "Habilidades", href: "#habilidades" },
        { label: "Contato", href: "#contato" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/90 backdrop-blur-lg shadow-sm' 
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <a 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`text-xl font-bold transition-colors ${
                                isScrolled ? 'text-slate-900' : 'text-white'
                            }`}
                        >
                            NF
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                                        isScrolled ? 'text-slate-600' : 'text-white/80'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors ${
                                isScrolled ? 'text-slate-900' : 'text-white'
                            }`}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-lg shadow-lg md:hidden"
                    >
                        <div className="container mx-auto px-6 py-6">
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        className="text-slate-700 font-medium py-2 hover:text-orange-500 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}