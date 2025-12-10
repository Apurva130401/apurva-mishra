"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        title: "Founder & Lead Developer",
        company: "SyncFlo",
        period: "2024 - Present",
        description: "Designing and deploying intelligent WhatsApp and Voice AI agents using n8n and Google Gemini. Engineered scalable backend workflows integrated with Supabase and third-party APIs for real-time data sync. Built the company website using React and Node.js while managing end-to-end client onboarding systems.",
        tags: ["Next.js", "n8n", "LangChain", "RAG", "React", "Supabase", "LLMs", "Node.js", "API"]
    },
    {
        title: "AI Automation Developer",
        company: "Freelance",
        period: "2022 - Present",
        description: "Designed and deployed custom automation solutions for global clients. Optimized business processes using Python scripts, API integrations, and cloud-native architectures.",
        tags: ["Python", "Automation", "AWS", "API"]
    },
    {
        title: "E-Commerce Operations & Automation",
        company: "Cinch Fashion",
        period: "2022 - 2024",
        description: "Customized a Shopify website using code to optimize product offerings and minimize costs. Implemented a WhatsApp API to automate customer order tracking and streamline marketing processes. Executed high-ROI ad campaigns that drove significant revenue growth within two months",
        tags: ["Shopify Liquid", "WhatsApp API", "E-commerce", "Automation"]
    },
    {
        title: "Marketing Associate & Web Contributor",
        company: "Zoxima Solutions",
        period: "2023 - 2024",
        description: "Contributed significantly to the development of the company's prime website, Zoxprime. Managed targeted advertising campaigns on LinkedIn and Instagram to promote software products and webinars. Organized digital events and created compelling ad sets for software solutions",
        tags: ["UI/UX", "Web Development", "LinkedIn Ads", "Lead Generation", "CRM"]
    },
    {
        title: "Sales & Academic Consultant",
        company: "Mentor Me Careers",
        period: "2023 - 2024",
        description: "Spearheaded the acquisition of over 100 contract manufacturers and design houses globally within three months. Utilized strategic planning and negotiation to secure agreements and expand market reach.",
        tags: ["EdTech Sales", "Client Relations", "CRM Management"]
    },
    {
        title: "Sales & Strategic Partnerships",
        company: "Find Manufacturing LLC",
        period: "2021 - 2022",
        description: "Facilitated course enrollments and provided personalized career guidance to over 30 students. Coordinated live webinars and sessions to ensure high participation and student satisfaction.",
        tags: ["B2B Sales", "Vendor Acquisition", "Negotiation"]
    },
    {
        title: "Marketing & Operations",
        company: "Upthrust Esports",
        period: "2020 - 2021",
        description: "Orchestrated large-scale tournament operations across India and South-East Asia using digital marketing channels. Analyzed marketing metrics to make data-driven adjustments for campaign optimization. Managed cross-functional teams to ensure seamless execution of events and brand visibility.",
        tags: ["Data Analysis", "Event Operations", "Strategic Planning"]
    }
];

const ExperienceItem = ({ experience, index }: { experience: any; index: number }) => {
    return (
        <div className="flex flex-row items-center w-full min-h-screen py-24 relative z-10">
            {/* Left Side (45% width): Company Name */}
            <div className="w-[45%] flex justify-end items-center pr-16">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-right leading-[0.85] tracking-tighter"
                >
                    {experience.company}
                </motion.h2>
            </div>

            {/* Spacer for Center Line */}
            <div className="w-[10%]"></div>

            {/* Right Side (45% width): Role and Description */}
            <div className="w-[45%] flex flex-col justify-center pl-16">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-px w-12 bg-green-500/50"></span>
                        <span className="text-green-500 font-mono text-lg tracking-wider uppercase">
                            {experience.period}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        {experience.title}
                    </h3>

                    <p className="text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light opacity-80">
                        {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {experience.tags.map((tag: string) => (
                            <span key={tag} className="px-4 py-2 text-sm border bg-opacity-10 rounded-full transition-colors duration-300 border-current opacity-70 hover:opacity-100">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scrollYProgressSpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Theme Transition Colors
    // Adjusted for longer scroll interaction
    const backgroundColor = useTransform(
        scrollYProgressSpring,
        [0, 0.05, 0.1, 0.9, 0.95, 1],
        ["#e0e0e0", "#e0e0e0", "#0e0e0e", "#0e0e0e", "#e0e0e0", "#e0e0e0"]
    );

    const textColor = useTransform(
        scrollYProgressSpring,
        [0, 0.05, 0.1, 0.9, 0.95, 1],
        ["#1a1a1a", "#1a1a1a", "#ffffff", "#ffffff", "#1a1a1a", "#1a1a1a"]
    );

    // Sync Navbar Theme Logic
    useMotionValueEvent(backgroundColor, "change", (latest) => {
        if (typeof window !== "undefined") {
            const isDark = latest === "#0e0e0e";
            window.dispatchEvent(new CustomEvent("theme-change", {
                detail: { theme: isDark ? "dark" : "light" }
            }));
        }
    });

    // Vertical Line Fill
    const lineHeight = useTransform(scrollYProgressSpring, [0.05, 0.9], ["0%", "100%"]);

    return (
        <motion.section
            ref={containerRef}
            id="experience"
            style={{ backgroundColor, color: textColor }}
            className="relative w-screen ml-[calc(-50vw+50%)] pt-32 pb-32 overflow-hidden"
        >
            {/* The Curve Transition (Top) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[98%] leading-[0] z-20 pointer-events-none text-[#e0e0e0]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[120px] md:h-[180px] fill-current"
                >
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                    <path d="M0,0V15.81C13,36.92,46,62.34,98,74.52c53.36,12.5,108.77,5.56,164.26-6.18C362.4,43.37,455.51,20.06,558.12,27c87.35,5.91,167.35,42.3,247.35,62.33,70.52,17.66,138.68,14.71,200.75-2.58,58.82-16.39,94.22-54.74,117.84-82.69V0Z"></path>
                </svg>
            </div>

            {/* Continuous Vertical Line Container */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 -translate-x-1/2 h-full z-0 opacity-20"></div>

            {/* Filling Green Line */}
            <motion.div
                style={{ height: lineHeight }}
                className="absolute left-1/2 top-0 w-px bg-green-500 -translate-x-1/2 z-0 origin-top"
            />

            <div className="w-full max-w-[90%] mx-auto relative z-10">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} experience={exp} index={index} />
                ))}
            </div>

        </motion.section>
    );
};
