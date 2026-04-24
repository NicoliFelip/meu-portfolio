import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function EducationSection() {
    const education = [
        {
            degree: "Superior de Tecnologia em Ciência de Dados",
            institution: "SENAI",
            hours: "2320h",
            period: "Jan 2025 - Dez 2026",
            status: "Em andamento"
        },
        {
            degree: "Superior de Tecnologia em Informática para Negócios",
            institution: "FATEC",
            hours: "2800h",
            period: "Fev 2025 - Dez 2027",
            status: "Em andamento"
        },
        {
            degree: "Técnico em Administração",
            institution: "ETEC",
            hours: "1200h",
            period: "Jul 2023 - Dez 2024",
            status: "Concluído"
        }
    ];

    const courses = [
        { name: "Assistente de Recursos Humanos", institution: "SENAI", hours: "160h" },
        { name: "Ferramentas da Qualidade", institution: "SENAI", hours: "40h" },
        { name: "Avançado nos Conceitos de Programação", institution: "UFABC", hours: "15h" },
        { name: "Programação em Python", institution: "SENAI", hours: "80h" },
        { name: "Power BI", institution: "SENAI", hours: "20h" },
        { name: "Excel Completo", institution: "SENAI", hours: "160h" },
        { name: "Informática Básica", institution: "SENAI", hours: "80h" }
    ];

    return (
        <section id="formacao" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-400 font-medium tracking-widest uppercase text-sm">
                        Formação
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                        Educação & Certificações
                    </h2>
                </motion.div>

                {/* Academic Education */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-purple-300 font-medium mb-3">
                                {edu.institution}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full">
                                    {edu.hours}
                                </span>
                                <span className={`text-xs px-3 py-1 rounded-full ${
                                    edu.status === "Concluído" 
                                        ? "bg-green-500/20 text-green-400" 
                                        : "bg-orange-500/20 text-orange-400"
                                }`}>
                                    {edu.status}
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm">
                                {edu.period}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Complementary Courses */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="w-6 h-6 text-orange-400" />
                        <h3 className="text-xl font-bold text-white">
                            Cursos Complementares
                        </h3>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-3">
                                    <BookOpen className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-white text-sm font-medium leading-tight">
                                            {course.name}
                                        </p>
                                        <p className="text-slate-400 text-xs mt-1">
                                            {course.institution} • {course.hours}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}