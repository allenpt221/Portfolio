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

import { motion } from 'framer-motion'




import FullscreenImageModal from "./FullscreenImageModal";
import { getColor, projects } from "@/lib/project";
import ProjectModal from "./modal/projectModal";


function Project() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [OpenById, setOpenById] = useState<null | string>(null);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);






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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.10 }}
          viewport={{ once: true, amount: 0.3 }}
        className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white/60 flex items-center gap-2">
            <FolderGit size={20} className="text-black/50 dark:text-white/60" />
            Projects
          </h2>
          <button
          onClick={() => setIsOpenModal(true)}
            className="text-gray-400 flex items-center text-sm gap-1"
          >
            View All
            <ArrowUpRight size={15} />
          </button>
        </motion.div>

        <div className="space-y-4">
          {projects.slice(0, 3).map((project) => {
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
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true, amount: 0.3 }}
                  onClick={() => handleOpenById(project.id)}
                  className="cursor-pointer flex justify-between items-center w-full sm:p-4 p-3 text-left hover:bg-gray-50 dark:hover:bg-white/30 rounded transition-colors duration-200"
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
                </motion.button>   
                {isOpen && OpenById === project.id && (
                  <motion.div 
                  initial={{opacity: 0, y: -10}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -10}}
                  transition={{duration: 0.5}}
                  className="border-t border-gray-100 p-4 animate-fadeIn">
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
                            className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:hover:text-white hover:text-gray-900 transition-colors"
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {isOpenModal && (
        <ProjectModal
        isOpen={true}
        onClose={() => setIsOpenModal(false)} 
        />
      )}
    </Card>
  );
}

export default Project;
