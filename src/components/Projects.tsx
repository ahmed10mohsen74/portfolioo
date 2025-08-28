// components/Projects.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import smartRent from "../assets/SmartRent.png";
import gym from "../assets/gym.png";
import productmanagement from "../assets/product management.png" ;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "smartRent",
      description:
        "A smart system for managing hotel and car rentals, making it easy to add, update, organize bookings, and track availability in one place.",

      image: smartRent,
      technologies: ["React", "tailwind", "animate", "typeScript"],
      githubUrl: "#",
      liveUrl: "https://elashry-realstate.vercel.app/",
    },
    {
      id: 2,
      title: "product management system",
      description:
        "A system to efficiently manage products, including adding, updating, categorizing, and tracking inventory in one place.",

      image: productmanagement,
      technologies: ["React", "TypeScript", "localStorage", "TailwindCSS"],
      githubUrl: "#",
      liveUrl: "https://ahmed10mohsen74.github.io/Prodexa/",
    },
    {
      id: 3,
      title: "Gym ",
      description:
        "A platform to manage gym members, track subscriptions, schedule classes, and monitor fitness progress.",
      image: gym,
      technologies: ["React", "tailwind", "animate", "typeScript"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Real Estate Listing",
      description:
        "Platform for property listings with search filters and interactive maps.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Leaflet", "Express", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Invest in Dubai",
      description:
        "An online clothing store offering stylish collections, easy shopping, and secure checkout.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "OpenWeather API", "GraphQL", "Netlify"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "dashboard",
      description:
        "An interactive dashboard for visualizing data, tracking performance, and managing key metrics in real time.",

      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]);

  return (
    <section id="projects" className="py-20 px-4 bg-[#0F1535]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-[#FF6B00]">Projects</span>
        </motion.h2>

        <motion.p
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of the projects I've worked on. Each project represents
          different skills and technologies I've mastered.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0A0F2C] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#E0E0E0] mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#FF6B00]/20 text-[#FF6B00] text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    className="text-white hover:text-[#FF6B00] transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-white hover:text-[#FF6B00] transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
