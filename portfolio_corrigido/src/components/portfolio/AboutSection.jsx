import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';

export default function AboutSection() {
    const highlights = [
        {
            icon: Target,
            title: "Foco em Resultados",
            description: "Análise de dados para gerar insights acionáveis e apoiar a tomada de decisões"
        },
        {
            icon: Lightbulb,
            title: "Inovação",
            description: "Utilização de metodologias ágeis e inteligência artificial para melhoria contínua"
        },
        {
            icon: TrendingUp,
            title: "Estratégia",
            description: "Monitoramento de KPIs e elaboração de relatórios objetivos"
        },
        {
            icon: Users,
            title: "Colaboração",
            description: "Liderança participativa e trabalho em equipes multidisciplinares"
        }
    ];

    return (
        <section id="sobre" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <span className="text-orange-500 font-medium tracking-widest uppercase text-sm">
                        Sobre Mim
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
                        Transformando dados em decisões estratégicas
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Imersão em estudos de tecnologia da informação e inteligência de negócios, 
                        com foco em melhoria e inovação por meio de metodologias ágeis, análise de dados 
                        e inteligência artificial. Forte interesse em projetos e pesquisas que visem 
                        identificar comportamentos e propor soluções para problemas organizacionais, 
                        técnicos e societários.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 bg-slate-50 rounded-2xl hover:bg-gradient-to-br hover:from-purple-900 hover:to-slate-900 transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-orange-100 group-hover:bg-orange-500 rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
                                <item.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors duration-500">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors duration-500">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}