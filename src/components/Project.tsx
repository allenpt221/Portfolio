import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FolderGit,
  Github,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

import coffeeOverview from "../assets/ProjectImage/CoffeeOverview1.png";
import coffeeOverview1 from "../assets/ProjectImage/CoffeeOverview2.png";
import coffeeOverview2 from "../assets/ProjectImage/CoffeeOverview3.png";

import StockHub from "../assets/ProjectImage/Stockhub1.png";
import StockHub1 from "../assets/ProjectImage/Stockhub2.png";
import StockHub2 from "../assets/ProjectImage/Stockhub3.png";
import StockHub3 from "../assets/ProjectImage/Stockhub4.png";

import Kapetayo from "../assets/ProjectImage/KapeTayo1.png";
import Kapetayo1 from "../assets/ProjectImage/KapeTayo2.png";
import Kapetayo2 from "../assets/ProjectImage/KapeTayo3.png";

import FullscreenImageModal from "./FullscreenImageModal";


function Project() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [OpenById, setOpenById] = useState<null | string>(null);


  function getColor(tool: string) {
    switch (tool.toLowerCase()) {
      case "react":
      case "typescript":
        return "bg-blue-100 text-blue-700 border border-blue-300";
      case "mongodb":
      case "supabase":
      case "node.js":
      case "node":
        return "bg-green-100 text-green-700 border border-green-300";
      case "tailwind":
        return "bg-cyan-100 text-cyan-700 border border-cyan-300";
      case "express.js":
        return "bg-yellow-100 text-yellow-700 border border-yellow-300";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-300";
    }
  }

  const projects = [
    {
      id: "1",
      title: "KapeTayo - Coffee Shop Management",
      image: [Kapetayo, Kapetayo1, Kapetayo2],
      description:
        "A comprehensive coffee shop management system with inventory tracking, order management, and customer loyalty features.",
      tools: ["React", "MongoDB", "Tailwind", "Express.js", "Node.Js"],
      githubUrl: "https://github.com/example",
      liveUrl: "https://kapetayo.onrender.com/",
    },
    {
      id: "2",
      title: "Coffee Overview - Coffee Description",
      image: [coffeeOverview, coffeeOverview1, coffeeOverview2],
      description:
        "An intuitive task management application with drag-and-drop functionality, team collaboration, and progress tracking.",
      tools: ["React", "Tailwind", "Static Website"],
      githubUrl: "https://github.com/example",
      liveUrl: "https://coffeeoverview.vercel.app/",
    },
    {
      id: "3",
      title: "Stockhub - Inventory Management System",
      image: [StockHub, StockHub1, StockHub2, StockHub3],
      description:
        "A beautiful weather application providing detailed forecasts, severe weather alerts, and customizable locations.",
      tools: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Supabase",
        "Shadcn ui",
      ],
      githubUrl: "https://github.com/example",
      liveUrl: "https://stockhub-l7jk.onrender.com/",
    },
  ];

  function handleOpenById(id: string) {
    if (isOpen && OpenById === id) {
      setIsOpen(false);
      setOpenById(null);
    } else {
      setIsOpen(true);
      setOpenById(id);
    }
  }

  return (
    <Card className="p-4 dark:bg-black">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white/60 flex items-center gap-2">
            <FolderGit size={20} className="text-black/50 dark:text-white/60" />
            Projects
          </h2>
          <Link
            to="/projects"
            className="text-gray-400 flex items-center text-sm gap-1"
          >
            View All
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const [current, setCurrent] = useState(0);

            useEffect(() => {
              if (project.image.length > 1) {
                const interval = setInterval(() => {
                  setCurrent((prev) => (prev + 1) % project.image.length);
                }, 3000);
                return () => clearInterval(interval);
              }
            }, [project.image.length]);

            return (
              <Card
                key={project.id}
                className="overflow-hidden border-0 shadow-sm rounded-xl transition-all duration-300 hover:shadow-md p-2"
              >
                <button
                  onClick={() => handleOpenById(project.id)}
                  className="flex justify-between items-center w-full sm:p-4 p-3 text-left hover:bg-gray-50 dark:hover:bg-white/30 rounded transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-800 dark:text-[#F3F4F6]">
                      {project.title}
                    </span>
                  </div>
                  {isOpen && OpenById === project.id ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>

                {isOpen && OpenById === project.id && (
                  <div className="border-t border-gray-100 p-4 animate-fadeIn">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div className="md:w-2/5">
                        <FullscreenImageModal
                          src={project.image[current]} 
                          alt={project.title}
                        />
                      </div>

                      <div className="md:w-3/5 space-y-4">
                        <p className="text-gray-600 leading-relaxed dark:text-[#F3F4F6]">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getColor(
                                tool
                              )}`}
                            >
                              #{tool}
                            </span>
                          ))}
                        </div>

                        <div className="flex space-x-3 pt-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export default Project;
