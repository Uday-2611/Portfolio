'use client'
import Navbar from '@/components/Navbar'
import Link from '@/components/Link'
import SkillCard from '@/components/SkillCard'
import Experience from '@/components/Experience'
import ProjectCard from '@/components/ProjectCard'
import Education from '@/components/Education'
import React, { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MorphingText } from '@/components/MorphingText'
import { LavaLamp } from '@/components/fluid-blob'

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='relative w-full text-[var(--white)]'>
      <div className="fixed inset-0 -z-10 w-full h-full">
        <LavaLamp />
      </div>
      <Navbar />

      <div className='max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-30'>
        <div className='mb-12'>
          <h1 className="flex flex-wrap items-center gap-2">
            <MorphingText
              texts={["Software Developer", "Web Developer", "App Developer"]}
              className="text-4xl sm:text-6xl md:text-8xl font-['Archia'] text-[var(--white)]"
            />
          </h1>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col gap-4'>
            <Link href="https://www.linkedin.com/in/udayagarwal2611/">
              <div className='flex items-center gap-2'>

                <span>LinkedIn</span>
              </div>
            </Link>
            <Link href="https://www.instagram.com/udayy2604/">
              <div className='flex items-center gap-2'>

                <span>Instagram</span>
              </div>
            </Link>
            <Link href="https://github.com/Uday-2611">
              <div className='flex items-center gap-2'>

                <span>GitHub</span>
              </div>
            </Link>
            <Link href="https://drive.google.com/file/d/1fTjjAwByBFS7bqp1exQwdFekR23VX0Bq/view?usp=sharing">
              <div className='flex items-center gap-2'>

                <span>Resume</span>
              </div>
            </Link>
          </div>
          <div className='md:col-span-2'>
            <p className='font-["AeonikLight"] text-2xl'>I&apos;m a web and app developer who loves crafting engaging, user-centric experiences! I blend technical skills with a creative perspective inspired by history and art. I appreciate all forms of art like movies and music, which fuels my passion for creating innovative solutions that seamlessly weave together technology and creativity.</p>
          </div>
        </div>
      </div>

      <div className='max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:sticky md:top-24 h-fit'>
            <nav className='flex flex-col gap-4'>
              <Link href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</Link>
              <Link href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</Link>
              <Link href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</Link>
              <Link href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</Link>
            </nav>
          </div>

          <div className='md:col-span-2'>
            <section id="skills" className='mb-24 scroll-mt-24'>
              <h2 className='text-4xl font-["Archia"] mb-8'>Skills</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <SkillCard name="Python" icon="ri-code-box-fill" />
                <SkillCard name="React" icon="ri-reactjs-fill" />
                <SkillCard name="Next.js" icon="ri-nextjs-fill" />
                <SkillCard name="Node.js" icon="ri-nodejs-fill" />
                <SkillCard name="JavaScript" icon="ri-javascript-fill" />
                <SkillCard name="MongoDB" icon="ri-database-2-fill" />
                <SkillCard name="Tailwind" icon="ri-tailwind-css-fill" />
                <SkillCard name="HTML5" icon="ri-html5-fill" />
                <SkillCard name="CSS3" icon="ri-css3-fill" />
                <SkillCard name="Git" icon="ri-git-branch-fill" />
                <SkillCard name="Express" icon="ri-server-fill" />
                <SkillCard name="Bootstrap" icon="ri-bootstrap-fill" />
              </div>
            </section>

            <section id="projects" className='mb-24 scroll-mt-24'>
              <h2 className='text-4xl font-["Archia"] mb-2'>Projects</h2>
              <p className='text-[var(--white)]/60 font-["AeonikLight"] text-sm mb-6 flex items-center gap-2'>
                <i className="ri-arrow-right-line"></i>
                Swipe left to see more
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <ProjectCard title="Biblio" description="Buy,and sell second-hand books with ease" image="/images/biblio.png" githubLink="https://biblio-self-kappa.vercel.app/" />
                  </CarouselItem>
                  <CarouselItem>
                    <ProjectCard title="Strada" description=" Your ride, your rules. Cars and bikes, just a click away." image="/images/strada.png" githubLink="https://strada-three.vercel.app/" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-[var(--white)]/10 hover:bg-[var(--white)]/20 text-[var(--white)] border-[var(--white)]/20" />
                <CarouselNext className="bg-[var(--white)]/10 hover:bg-[var(--white)]/20 text-[var(--white)] border-[var(--white)]/20" />
              </Carousel>
            </section>

            <section id="experience" className='mb-24 scroll-mt-24'>
              <h2 className='text-4xl font-["Archia"] mb-8'>Experience</h2>
              <div className='flex flex-col gap-8'>
                <Experience company="Celebal Technologies" position="Summer Intern" duration="May 2025 - July 2025" image="/images/celebal.jpg" responsibilities={[
                  "Completed a remote, industry-oriented internship focused on React JS development.",
                  "Independently built and deployed a project applying React concepts such as components, hooks, state management, and routing.",
                  "Gained practical experience in designing and developing interactive, responsive web interfaces.",
                  "Enhanced technical proficiency and project management skills through hands-on, real-world application.",
                ]} />
                <Experience company="CodeAlpha" position="Front End Intern" duration="June 2024 - July 2024" responsibilities={[
                  "Contributed to hands-on projects at CodeAlpha, enhancing skills in web development",
                  "Gained practical experience through tasks such as building interactive web applications",
                ]} />
              </div>
            </section>

            <section id="education" className='mb-24 scroll-mt-24'>
              <h2 className='text-4xl font-["Archia"] mb-8'>Education</h2>
              <div className='flex flex-col gap-8'>
                <Education institution="Manipal University Jaipur" degree="Bachelor of Technology in Computer Science" duration="2022 - 2026" image="/images/manipal.webp" />
                <Education institution="BVB Vidyashram" degree="Higher Secondary Education" duration="2020 - 2022" image="/images/BVB.png" />
              </div>
            </section>

            <section id="mail" className='mb-24 scroll-mt-24'>
              <h2 className='text-4xl font-["Archia"] mb-8'>Contact Me</h2>
              <div className='w-full p-6 border border-[var(--gray)] rounded-sm bg-[var(--blackSecondary)]'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-[var(--white)]/90 font-["AeonikLight"]'>Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className='w-full p-3 bg-[var(--black)] border border-[var(--gray)] rounded-sm text-[var(--white)] focus:outline-none focus:border-[var(--white)]/50' placeholder='Enter your name' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-[var(--white)]/90 font-["AeonikLight"]'>Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className='w-full p-3 bg-[var(--black)] border border-[var(--gray)] rounded-sm text-[var(--white)] focus:outline-none focus:border-[var(--white)]/50' placeholder='Enter your email' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="subject" className='text-[var(--white)]/90 font-["AeonikLight"]'>Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className='w-full p-3 bg-[var(--black)] border border-[var(--gray)] rounded-sm text-[var(--white)] focus:outline-none focus:border-[var(--white)]/50' placeholder='Enter subject' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-[var(--white)]/90 font-["AeonikLight"]'>Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className='w-full p-3 bg-[var(--black)] border border-[var(--gray)] rounded-sm text-[var(--white)] focus:outline-none focus:border-[var(--white)]/50 resize-none' placeholder='Enter your message' />
                  </div>
                  {status.message && (
                    <div className={`p-3 rounded-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                      {status.message}
                    </div>
                  )}
                  <button type="submit" disabled={isLoading} className='w-full sm:w-auto px-6 py-3 bg-[var(--white)] text-[var(--primary)] font-["Archia"] hover:bg-[var(--white)]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4'>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
