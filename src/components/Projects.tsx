import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Entrepreneur Assistant",
    description: "AI-powered web app that predicts business licenses in India using LLMs and fuzzy logic.",
    tech: "Django, OpenAI, SQLite, Tailwind",
    link: "https://github.com/weeaboo23/Entrepreneur-Assistant",
  },
  {
    title: "Music Streaming App",
    description: "Full-stack React + Django music streaming platform with user auth, playlists, and search.",
    tech: "React, Django, PostgreSQL",
    link: "https://github.com/weeaboo23/music-app",
  },
  {
    title: "Threads/X Clone",
    description: "Social media clone with posting, following, likes, editing, and pagination.",
    tech: "Django, JavaScript, Bootstrap",
    link: "https://github.com/weeaboo23/threads-clone",
  },
  {
    title: "Spot-Exposure-Hedging-Bot",
    description: "A Python-based Telegram bot for crypto risk management that calculates real-time Greeks and automates hedging using Bybit and Deribit APIs. Supports perpetual and options-based strategies with portfolio analytics",
    tech: "Python, Telegram Bot API, Bybit & Deribit APIs, SQLite, Black-Scholes model, and risk libraries like NumPy and Pandas.",
    link: "https://github.com/weeaboo23/Spot-Exposure-Hedging-Bot",
  },
  {
    title: "Landing-Page Template",
    description: "A responsive, modern landing page for Beyond Career—an IIT Kharagpur student-led startup—built to showcase mentorship, internships, and community-driven career support.",
    tech: "React.js, Tailwind CSS, Formspree (contact form), deployed on Vercel.",
    link: "https://github.com/weeaboo23/beyondcareer_Assignment",
  },
  {
    title: "E-Commerce Listing Page",
    description: "A fully responsive Next.js + TypeScript + Tailwind CSS project that showcases a modern product listing layout with sidebar, advertisement banner, pagination, and reusable components.",
    tech: "Next.js, TypeScript, React, Tailwind CSS",
    link: "https://github.com/weeaboo23/Ecommerce-listingPage",
    demo: "https://ecommerce-listing-page.vercel.app",
  },
  {
    title: "Book Finder",
    description: "A minimalist React + Vite application that allows users to search for books by title or author using the Open Library API, with a clean Tailwind CSS interface.",
    tech: "React.js, Vite, Tailwind CSS, Open Library API",
    link: "https://github.com/weeaboo23/Book-Finder",
    demo: "https://9qs6k9-5173.csb.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-white dark:bg-gray-950 text-black dark:text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {project.tech}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  GitHub →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 font-medium hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
