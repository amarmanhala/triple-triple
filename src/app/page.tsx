'use client';
import * as React from 'react';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amarpreet Singh",
    "jobTitle": "Frontend & Backend Developer",
    "description": "Experienced software developer specializing in React, Node.js, TypeScript, iOS development, and UI/UX design",
    "url": "https://amarpreetsingh.com",
    "email": "amar.manhala@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "ExpenAI"
    },
    "alumniOf": {
      "@type": "Organization", 
      "name": "Fintelics"
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript", 
      "React.js",
      "Redux",
      "Node.js",
      "HTML",
      "CSS",
      "Responsive Web Design",
      "UI/UX Design",
      "Figma",
      "Accessibility",
      "Security",
      "Java",
      "Spring Boot",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "iOS Development",
      "Swift",
      "SwiftUI", 
      "Xcode",
      "App Development",
      "Apple Ecosystem"
    ],
    "seeks": {
      "@type": "JobPosting",
      "jobLocation": [
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toronto",
            "addressRegion": "ON", 
            "addressCountry": "CA"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "name": "Remote"
        }
      ],
      "occupationalCategory": ["Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "iOS Developer"]
    },
    "sameAs": [
      "https://x.com/amarsinghca",
      "https://www.linkedin.com/in/hyumanamar/",
      "https://github.com/amarmanhala"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white dark:bg-zinc-950 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="bg-zinc-300/15 dark:bg-zinc-700/20 backdrop-blur-2xl border border-zinc-400/10 dark:border-zinc-600/20 rounded-full px-4 py-2">
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 text-lg font-medium">
              About
            </a>
            <a href="#work" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 text-lg font-medium">
              Work
            </a>
            <a href="#contact" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 text-lg font-medium">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-6xl">
            <h1 className="text-2xl text-zinc-950 dark:text-zinc-100 mb-6 tracking-tight leading-tight">
              <span className="text-zinc-600 dark:text-zinc-400">Hello, I&apos;m </span>Amarpreet Singh
            </h1>
            <p className="text-2xl text-zinc-950 dark:text-zinc-100 mb-2 max-w-2xl">
              <span className="text-zinc-600 dark:text-zinc-400">Currently building</span> ExpenAI.
            </p>
            <p className="text-2xl text-zinc-950 dark:text-zinc-100 mb-8 max-w-2xl">
              <span className="text-zinc-600 dark:text-zinc-400">Previously at</span> Fintelics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-6xl mb-16">
            <h2 className="text-2xl text-zinc-950 dark:text-zinc-100 mb-2 tracking-tight leading-tight">
              <span className="text-zinc-600 dark:text-zinc-400">Featured </span>Projects.
            </h2>
            <p className="text-2xl text-zinc-950 dark:text-zinc-100">
              <span className="text-zinc-600 dark:text-zinc-400">Each app designed to make</span> technology feel human.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-4xl aspect-[16/9] mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="text-zinc-400 text-center">
                    <div className="w-16 h-16 bg-zinc-300 rounded-lg mx-auto mb-3"></div>
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs">800x600px</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-zinc-950 dark:text-zinc-100">
                Text Reels - Learn with reels <span className="text-2xl text-zinc-500">Web app</span>
              </h3>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="bg-zinc-100 rounded-3xl aspect-[16/9] mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <div className="text-zinc-400 text-center">
                    <div className="w-16 h-16 bg-zinc-300 rounded-lg mx-auto mb-3"></div>
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs">800x600px</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-zinc-950 dark:text-zinc-100">
                SaaS Dashboard <span className="text-2xl text-zinc-500">Web app</span>
              </h3>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="bg-zinc-100 rounded-3xl aspect-[16/9] mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                  <div className="text-zinc-400 text-center">
                    <div className="w-16 h-16 bg-zinc-300 rounded-lg mx-auto mb-3"></div>
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs">800x600px</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-zinc-950 dark:text-zinc-100">
                Fitness App <span className="text-2xl text-zinc-500">Web app</span>
              </h3>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="bg-zinc-100 rounded-3xl aspect-[16/9] mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                  <div className="text-zinc-400 text-center">
                    <div className="w-16 h-16 bg-zinc-300 rounded-lg mx-auto mb-3"></div>
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs">800x600px</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-zinc-950 dark:text-zinc-100">
                Banking Platform <span className="text-2xl text-zinc-500">Web app</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-6xl">
            <div className="text-xl text-zinc-950 dark:text-zinc-100 space-y-3 max-w-4xl">
              <p>A passionate product designer with over 5 years of experience crafting digital experiences.</p>
              <p>I specialize in user research, interface design, and creating products that solve real problems.</p>
              <p>Currently building ExpenAI, an innovative expense tracking solution for modern businesses.</p>
              <p>Previously worked at Fintelics, where I led design for financial technology products.</p>
              <p>I believe great design happens when creativity meets strategy and user needs.</p>
            </div>
          </div>

          {/* Reel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl aspect-[3/4] mb-4 overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted
                  playsInline
                >
                  <source src="/toronto.mov" type="video/mp4" />
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <div className="text-zinc-400 text-center">
                      <div className="w-16 h-16 bg-zinc-300 rounded-lg mx-auto mb-3"></div>
                      <p className="text-sm">Toronto Video</p>
                      <p className="text-xs">3:4 aspect</p>
                    </div>
                  </div>
                </video>
              </div>
              <h3 className="text-lg text-zinc-950 dark:text-zinc-100">
                Toronto is home
              </h3>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl aspect-[3/4] mb-4 overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted
                  playsInline
                >
                  <source src="/coffee.mov" type="video/mp4" />
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <div className="text-zinc-400 text-center">
                      <div className="w-16 h-16 bg-zinc-300 rounded-lg mx-auto mb-3"></div>
                      <p className="text-sm">Coffee Video</p>
                      <p className="text-xs">3:4 aspect</p>
                    </div>
                  </div>
                </video>
              </div>
              <h3 className="text-lg text-zinc-950 dark:text-zinc-100">
                Coffee is my fuel
              </h3>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl aspect-[3/4] mb-4 overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted
                  playsInline
                >
                  <source src="/nature.mov" type="video/mp4" />
                  <div className="w-full h-full bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                    <div className="text-zinc-400 text-center">
                      <div className="w-16 h-16 bg-zinc-300 rounded-lg mx-auto mb-3"></div>
                      <p className="text-sm">Nature Video</p>
                      <p className="text-xs">3:4 aspect</p>
                    </div>
                  </div>
                </video>
              </div>
              <h3 className="text-lg text-zinc-950 dark:text-zinc-100">
                Nature is love
              </h3>
            </div>

            {/* Card 4 */}
            <div className="group cursor-pointer">
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl aspect-[3/4] mb-4 overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted
                  playsInline
                >
                  <source src="/running.mov" type="video/mp4" />
                  <div className="w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                    <div className="text-zinc-400 text-center">
                      <div className="w-16 h-16 bg-zinc-300 rounded-lg mx-auto mb-3"></div>
                      <p className="text-sm">Running Video</p>
                      <p className="text-xs">3:4 aspect</p>
                    </div>
                  </div>
                </video>
              </div>
              <h3 className="text-lg text-zinc-950 dark:text-zinc-100">
                Running is blessing
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-6xl">
            <h2 className="text-2xl text-zinc-950 dark:text-zinc-100 mb-6 tracking-tight leading-tight">
              <span className="text-zinc-600 dark:text-zinc-400">I&apos;m willing to </span>chat, collaborate and coffee.
            </h2>
            
            {/* Social Links */}
            <div className="flex space-x-8">
              <a href="mailto:amar.manhala@gmail.com" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 text-lg font-medium">
                email
              </a>
              <a href="https://x.com/amarsinghca" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 text-lg font-medium">
                follow on X
              </a>
              <a href="https://www.linkedin.com/in/hyumanamar/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 text-lg font-medium">
                linkedIn
              </a>
              <a href="https://github.com/amarmanhala" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 text-lg font-medium">
                gitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Copyright © 2025 Amarpreet Singh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
