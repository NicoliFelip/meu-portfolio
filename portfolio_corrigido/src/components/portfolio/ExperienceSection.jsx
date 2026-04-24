import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
    const experiences = [
        {
            title: "Estágio em Dados",
            company: "Quipe-AI – Startup de Tecnologia",
            duration: "3 meses",
            location: "Remoto",
            description: [
                "Testes de novas IAs e engenharia de prompts",
                "Elaboração de plataformas feitas por IA e automatização de front-end",
                "Coleta de dados na web para atualização de memória de IA",
                "Descrição e mapeamento de projetos",
                "Gestão de redes sociais e design de anúncios"
            ]
        },
        {
            title: "Mentora - Technovation Summer School",
            company: "Grace ICMC-USP",
            duration: "4 meses",
            location: "Remoto",
            description: [
                "Mentoria de programação, web design e empreendedorismo",
                "Desenvolvimento de projetos de IA e aplicativos web/mobile",
                "Treinamento de estudantes para competição internacional Technovation Girls"
            ]
        },
        {
            title: "Bolsista em Iniciação Científica",
            company: "FATEC",
            duration: "6 meses",
            location: "Presencial",
            description: [
                "Pesquisa: Impactos da Aplicação da IA Junto a Indústria 5.0 no Âmbito Corporativo e Acadêmico"
            ]
        },
        {
            title: "Monitora de Curso em Python",
            company: "UFABC – Projeto Educamin@",
            duration: "1 mês",
            location: "Presencial",
            description: [
                "Auxílio a alunos com dúvidas sobre Python",
                "Resolução de exercícios e desafios",
                "Complementação na explicação das aulas"
            ]
        },
        {
            title: "Monitora - Coletivo Mirtha Lina",
            company: "UFABC",
            duration: "1 mês",
            location: "Presencial",
            description: [
                "Incentivo à carreira feminina na área STEM",
                "Organização de visitas técnicas e palestras",
                "Aulas práticas de eletrônica e visitas a laboratórios"
            ]
        },
        {
            title: "Membro de Atlética e Representante",
            company: "SENAI",
            duration: "Atual",
            location: "Híbrido",
            description: [
                "Organização de projetos e semanas acadêmicas",
                "Gestão de eventos e redes sociais",
                "Mediação entre gerência e alunos"
            ]
        }
    ];

    return (
        <section id="experiencia" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-medium tracking-widest uppercase text-sm">
                        Trajetória
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
                        Experiência Profissional
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-orange-400 to-purple-500" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center mb-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10" />

                                {/* Content card */}
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-purple-600 font-medium text-sm">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                                <Briefcase className="w-5 h-5 text-purple-600" />
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3 mb-4">
                                            <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                                <Calendar className="w-3 h-3" />
                                                {exp.duration}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                                <MapPin className="w-3 h-3" />
                                                {exp.location}
                                            </span>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}