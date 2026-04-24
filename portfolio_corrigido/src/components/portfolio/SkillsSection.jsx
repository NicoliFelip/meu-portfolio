import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart3, Users2, Brain, Zap, MessageSquare, Globe } from 'lucide-react';

export default function SkillsSection() {
    const technicalSkills = [
        { name: "Python", level: 75 },
        { name: "Power BI", level: 70 },
        { name: "Excel Avançado", level: 90 },
        { name: "Estatística Aplicada", level: 70 },
        { name: "Análise de Dados", level: 75 },
        { name: "Metodologias Ágeis", level: 80 }
    ];

    const softSkills = [
        { icon: Brain, name: "Visão Analítica", description: "Interpretação de dados e soluções estratégicas" },
        { icon: Users2, name: "Liderança Colaborativa", description: "Mobilização de equipes multidisciplinares" },
        { icon: MessageSquare, name: "Comunicação", description: "Feedbacks construtivos e apresentações assertivas" },
        { icon: Zap, name: "Aprendizagem Contínua", description: "Busca constante por conhecimento e inovação" }
    ];

    const languages = [
        { name: "Português", level: "Nativo", percentage: 100 },
        { name: "Inglês", level: "Intermediário", percentage: 60 },
        { name: "Espanhol", level: "Básico", percentage: 30 }
    ];

    const tools = [
        "Python", "Power BI", "Microsoft Office", "Git", "SQL", "Figma", "Canva", "Trello"
    ];

    return (
        <section id="habilidades" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-medium tracking-widest uppercase text-sm">
                        Competências
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
                        Habilidades & Ferramentas
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Technical Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Code className="w-5 h-5 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Habilidades Técnicas</h3>
                        </div>
                        <div className="space-y-5">
                            {technicalSkills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-700 font-medium">{skill.name}</span>
                                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                <Users2 className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Soft Skills</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="p-4 bg-slate-50 rounded-xl hover:shadow-md transition-all duration-300"
                                >
                                    <skill.icon className="w-6 h-6 text-purple-600 mb-3" />
                                    <h4 className="font-semibold text-slate-900 mb-1">{skill.name}</h4>
                                    <p className="text-slate-500 text-sm">{skill.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Languages & Tools */}
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-16">
                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-50 rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Globe className="w-5 h-5 text-purple-600" />
                            <h3 className="text-lg font-bold text-slate-900">Idiomas</h3>
                        </div>
                        <div className="space-y-4">
                            {languages.map((lang, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div>
                                        <span className="font-medium text-slate-800">{lang.name}</span>
                                        <span className="text-slate-500 text-sm ml-2">({lang.level})</span>
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-3 h-3 rounded-full ${
                                                    i < Math.floor(lang.percentage / 20)
                                                        ? 'bg-orange-500'
                                                        : 'bg-slate-200'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-slate-50 rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <BarChart3 className="w-5 h-5 text-purple-600" />
                            <h3 className="text-lg font-bold text-slate-900">Ferramentas</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tools.map((tool, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}