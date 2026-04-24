import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ContactSection() {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "nicolifelipe01@gmail.com",
            href: "mailto:nicolifelipe01@gmail.com"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "/in/nicoli-felipe",
            href: "https://www.linkedin.com/in/nicoli-felipe/"
        },
        {
            icon: Phone,
            label: "Telefone",
            value: "+55 11 93055-6255",
            href: "tel:+5511930556255"
        },
        {
            icon: MapPin,
            label: "Localização",
            value: "São Paulo, Brasil",
            href: null
        }
    ];

    return (
        <section id="contato" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-medium tracking-widest uppercase text-sm">
                        Contato
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">
                        Vamos conversar?
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Estou aberta a novas oportunidades e colaborações. Entre em contato!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target={item.href?.startsWith('http') ? '_blank' : undefined}
                                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center ${
                                    item.href ? 'cursor-pointer' : 'cursor-default'
                                }`}
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                                <p className="text-slate-900 font-medium text-sm break-all">
                                    {item.value}
                                </p>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <a 
                            href="mailto:nicolifelipe01@gmail.com"
                            className="inline-flex"
                        >
                            <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-6 rounded-full font-medium shadow-lg shadow-purple-500/25 transition-all duration-300 group">
                                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                                Enviar mensagem
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}