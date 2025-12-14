'use client'
import Navbar from '@/components/Navbar'
import Link from '@/components/Link'
import ProjectList from '@/components/ProjectList'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import React, { useState } from 'react'
import FlipText from '@/components/FlipText'

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
      <Navbar />

      <div className='max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-30'>
        <div className='mb-12'>
          <h1 className="flex flex-wrap items-center gap-2">
            <FlipText
              words={["SOFTWARE DEVELOPER", "FULL STACK DEVELOPER", "DATA ANALYST"]}
              className="text-4xl sm:text-6xl md:text-8xl font-['Archia'] font-bold text-[var(--white)] uppercase"
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
            <Link href="https://drive.google.com/file/d/1FKKbLEozXj4TQMaP502hjTi6_vab2L48/view?usp=sharing">
              <div className='flex items-center gap-2'>
                <span>Resume</span>
              </div>
            </Link>
          </div>
          <div className='md:col-span-2'>
            <p className='font-["AeonikLight"] text-2xl'>I’m a full stack developer who loves creating engaging, user-centric web experiences. I combine solid technical skills with a creative perspective inspired by art, design, and storytelling. I’m also expanding my skills in data analytics and DevOps to better understand systems, insights, and automation. My work is driven by a passion for building thoughtful, intuitive, and innovative digital solutions.</p>
          </div>
        </div>
      </div>

      <div className='max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:sticky md:top-24 h-fit'>
            <nav className='flex flex-col gap-4'>
              <Link href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</Link>
              <Link href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</Link>
              <Link href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</Link>
            </nav>
          </div>

          <div className='md:col-span-2'>

            <section id="projects" className='mb-32 scroll-mt-24'>
              <h2 className='text-5xl md:text-7xl font-["Archia"] font-bold uppercase mb-16'>Projects</h2>
              <ProjectList projects={[
                {
                  title: "Biblio",
                  description: "Buy and sell second-hand books with ease. A platform connecting book lovers to give their old books a new home.",
                  image: "/images/biblio.png",
                  link: "https://biblio-self-kappa.vercel.app/",
                  year: "2025",
                  tags: ["ReactJS", "MongoDB", "ExpressJS"]
                },
                {
                  title: "Strada",
                  description: "Your ride, your rules. Cars and bikes, just a click away. A modern vehicle rental platform.",
                  image: "/images/strada.png",
                  link: "https://strada-three.vercel.app/",
                  year: "2025",
                  tags: ["NextJS", "Supabase", "Tailwind"]
                },
                {
                  title: "Framix",
                  description: "Your art, amplified. Sketches and styles, perfectly blended. A modern intelligent design tool.",
                  image: "/images/framix.png",
                  link: "https://github.com/Uday-2611/Framix.git",
                  year: "2025",
                  tags: ["NextJS", "Convex"]
                },
              ]} />
            </section>

            <section id="experience" className='mb-32 scroll-mt-24'>
              <h2 className='text-5xl md:text-7xl font-["Archia"] font-bold uppercase mb-16'>Experience</h2>
              <div className='flex flex-col'>
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

            <section id="education" className='mb-32 scroll-mt-24'>
              <h2 className='text-5xl md:text-7xl font-["Archia"] font-bold uppercase mb-16'>Education</h2>
              <div className='flex flex-col'>
                <Education institution="Manipal University Jaipur" degree="Bachelor of Technology in Computer Science" duration="2022 - 2026" image="/images/manipal.webp" />
                <Education institution="BVB Vidyashram" degree="Higher Secondary Education" duration="2020 - 2022" image="/images/BVB.png" />
              </div>
            </section>

            <section id="mail" className='mb-32 scroll-mt-24'>
              <h2 className='text-5xl md:text-7xl font-["Archia"] font-bold uppercase mb-16'>Contact Me</h2>
              <div className='w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="name" className='text-[var(--white)]/60 font-["AeonikLight"] uppercase text-sm'>Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className='w-full py-4 bg-transparent border-b border-[var(--white)]/20 text-[var(--white)] text-xl focus:outline-none focus:border-[#FFC800] transition-colors placeholder:text-[var(--white)]/20' placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="email" className='text-[var(--white)]/60 font-["AeonikLight"] uppercase text-sm'>Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className='w-full py-4 bg-transparent border-b border-[var(--white)]/20 text-[var(--white)] text-xl focus:outline-none focus:border-[#FFC800] transition-colors placeholder:text-[var(--white)]/20' placeholder='Enter your email' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="subject" className='text-[var(--white)]/60 font-["AeonikLight"] uppercase text-sm'>Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className='w-full py-4 bg-transparent border-b border-[var(--white)]/20 text-[var(--white)] text-xl focus:outline-none focus:border-[#FFC800] transition-colors placeholder:text-[var(--white)]/20' placeholder='Enter subject' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-[var(--white)]/60 font-["AeonikLight"] uppercase text-sm'>Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className='w-full py-4 bg-transparent border-b border-[var(--white)]/20 text-[var(--white)] text-xl focus:outline-none focus:border-[#FFC800] transition-colors resize-none placeholder:text-[var(--white)]/20' placeholder='Enter your message' />
                  </div>
                  {status.message && (
                    <div className={`p-3 rounded-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                      {status.message}
                    </div>
                  )}
                  <button type="submit" disabled={isLoading} className='w-full sm:w-auto px-8 py-4 bg-[var(--white)] text-[var(--primary)] font-["Aeonik"] hover:bg-[#FFC800] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 self-start flex items-center gap-2'>
                    {isLoading ? 'Sending...' : 'Send Message'}
                    {!isLoading}
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
