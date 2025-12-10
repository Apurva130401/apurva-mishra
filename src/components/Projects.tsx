"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "SyncFlo AI",
        description: "An advanced AI automation platform featuring multi-agent orchestration and RAG capabilities.",
        tags: ["Next.js", "AI Agents", "Tailwind"],
        link: "https://syncflo.xyz",
        colSpan: "md:col-span-2",
        gradient: "from-orange-100 to-amber-50" // Light warm gradient
    },
    {
        title: "SaaS Dashboard",
        description: "High-performance analytics dashboard with real-time data visualization.",
        tags: ["React", "D3.js", "Supabase"],
        link: "#",
        colSpan: "md:col-span-1",
        gradient: "from-stone-100 to-stone-50"
    },
    {
        title: "Travel Booking Agent",
        description: "Voice-enabled AI agent for booking flights and hotels autonomously.",
        tags: ["Python", "Twilio", "OpenAI"],
        link: "#",
        colSpan: "md:col-span-1",
        gradient: "from-orange-50 to-rose-50"
    },
    {
        title: "E-commerce Automation",
        description: "Automated inventory management and customer support system for Shopify stores.",
        tags: ["Shopify API", "n8n", "Node.js"],
        link: "#",
        colSpan: "md:col-span-2",
        gradient: "from-stone-50 to-orange-50"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative bg-[#FAFAF9]">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                        Innovation in action. Delivering value through code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden border border-stone-200 bg-gradient-to-br ${project.gradient} shadow-sm hover:shadow-xl transition-all duration-500 ${project.colSpan}`}
                        >
                            <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-10">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-stone-900" />
                                    </div>
                                    <Link href={project.link} className="p-3 rounded-full bg-white text-stone-900 shadow-sm hover:bg-stone-900 hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-stone-900 mb-3">{project.title}</h3>
                                    <p className="text-stone-600 mb-6 line-clamp-2 md:text-lg">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-stone-800 border border-stone-100 shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
