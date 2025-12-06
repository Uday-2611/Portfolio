'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    year: string;
    tags: string[];
}

interface ProjectListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col w-full">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group border-b border-[var(--white)]/20 last:border-b-0"
                    onMouseEnter={() => { }}
                >
                    {/* Header Bar */}
                    <div
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className={cn(
                            "flex items-center justify-between py-8 px-4 cursor-pointer transition-all duration-300",
                            "hover:bg-[#FFC800] hover:text-black",
                            activeIndex === index ? "bg-[var(--white)]/5" : "bg-transparent"
                        )}
                    >
                        <h3 className="text-2xl md:text-4xl font-['Archia'] uppercase">{project.title}</h3>

                        <div className="flex items-center gap-4 md:gap-12">
                            <div className="hidden md:flex gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full border border-current text-xs font-['AeonikLight'] uppercase opacity-80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="font-['AeonikLight'] text-lg">{project.year}</span>
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div
                        className={cn(
                            "grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden transition-all duration-500 ease-in-out",
                            activeIndex === index ? "max-h-[600px] opacity-100 py-8 px-4" : "max-h-0 opacity-0 py-0"
                        )}
                    >
                        <div className="flex flex-col justify-between h-full gap-6">
                            <div>
                                <h4 className="text-xl font-['Archia'] mb-4 text-[var(--white)]">{project.title}</h4>
                                <p className="text-[var(--white)]/80 font-['AeonikLight'] text-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <Link
                                href={project.link}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--white)] text-[var(--primary)] w-fit  hover:bg-[#FFC800] transition-colors duration-300 font-['Aeonik']"
                            >
                                View Project
                                <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>

                        <div className="relative h-[200px] md:h-[300px] w-full rounded-lg overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
