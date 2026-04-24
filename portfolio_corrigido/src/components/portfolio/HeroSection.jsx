import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Phone, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-purple-500/20">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6907d3392ec7afba0996ec0c/e86e0a3ec_image.png"
                                alt="Nicoli Felipe"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xs text-center leading-tight px-2">Data<br/>Science</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left max-w-xl"
                    >
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-orange-400 font-medium tracking-widest uppercase text-sm mb-4"
                        >
                            Bem-vindo ao meu portfólio
                        </motion.p>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                            Nicoli Felipe
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-purple-200/80 font-light mb-6">
                            Ciência de Dados & Inteligência de Negócios
                        </p>

                        <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-8">
                            <MapPin className="w-4 h-4" />
                            <span>São Paulo, Brasil</span>
                        </div>

                        {/* Contact Links */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                            <a 
                                href="mailto:nicolifelipe01@gmail.com"
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/80 hover:text-white transition-all duration-300"
                            >
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">Email</span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/nicoli-felipe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/80 hover:text-white transition-all duration-300"
                            >
                                <Linkedin className="w-4 h-4" />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            <a 
                                href="tel:+5511930556255"
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/80 hover:text-white transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">Telefone</span>
                            </a>
                        </div>

                        <Button 
                            onClick={() => scrollToSection('sobre')}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-full font-medium shadow-lg shadow-orange-500/25 transition-all duration-300"
                        >
                            Conhecer mais
                        </Button>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-white/40 cursor-pointer"
                        onClick={() => scrollToSection('sobre')}
                    >
                        <ChevronDown className="w-8 h-8" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}