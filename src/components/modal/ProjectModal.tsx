import { ExternalLink, Github, X } from "lucide-react";
import { Card } from "../ui/card";
import { getColor, projects } from "@/lib/project";
import { motion } from 'framer-motion'

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ isOpen, onClose }: ProjectModalProps) {

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Projects
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{once: true}}
              >
                <Card 
                  key={project.id} 
                  className="p-4 h-full flex flex-col group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden rounded-md mb-4">
                    <img
                      src={project.imageUrl || "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 flex-1 sm:line-clamp-2" title={project.description}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 ">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getColor(tool)}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2 border-t border-gray-100 dark:border-gray-700">
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
                      className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectModal;
