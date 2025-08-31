import { ChevronDown, ChevronUp, ExternalLink, FolderGit, Github } from 'lucide-react'
import { useState } from 'react'
import { Card } from './ui/card'
import { Link } from 'react-router-dom';

function Project() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  const [OpenById, setOpenById] = useState<null | string>(null);

  function getColor(tool: string) {
    switch (tool.toLowerCase()) {
      case "react":
        return "bg-blue-100 text-blue-700 border border-blue-300";
      case "typescript":
        return "bg-blue-100 text-blue-700 border border-blue-300";
      case "mongodb":
      case "supabase":
        return "bg-green-100 text-green-700 border border-green-300";
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

  const projects = [{
    id: '1',
    title: "KapeTayo - Coffee Shop Management",
    image: "https://8466950.fs1.hubspotusercontent-na1.net/hubfs/8466950/illustration-of-automatic-logistics-management.png",
    description: "A comprehensive coffee shop management system with inventory tracking, order management, and customer loyalty features. Streamlines daily operations for small to medium coffee businesses.",
    tools: ['React', 'MongoDB', 'Tailwind', 'Express.js', 'Node.Js'],
    githubUrl: "https://github.com/example",
    liveUrl: "https://kapetayo.onrender.com/"
  }, {
    id: '2',
    title: "Coffee Overview - Coffee Description",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "A intuitive task management application with drag-and-drop functionality, team collaboration, and progress tracking. Helps individuals and teams stay organized and productive.",
    tools: ['React', 'Tailwind' , 'Static Website'],
    githubUrl: "https://github.com/example",
    liveUrl: "https://coffeeoverview.vercel.app/"
  }, {
    id: '3',
    title: "stockhub - Inventory Managemnt System",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "A beautiful weather application providing detailed forecasts, severe weather alerts, and customizable locations with an elegant, user-friendly interface.",
    tools: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Supabase'],
    githubUrl: "https://github.com/example",
    liveUrl: "https://stockhub-l7jk.onrender.com/"
  }];

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
    <Card className='p-4'>
        <div className="space-y-4">
            <div className='flex justify-between'>
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FolderGit size={20} className="text-black/50" />
                Personal Projects
                </h2>
                <Link to='/projects'>
                    View All
                </Link>
            </div>
            
            <div className="space-y-4">
            {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-0 shadow-sm rounded-xl transition-all duration-300 hover:shadow-md">
                <button 
                    onClick={() => handleOpenById(project.id)}
                    className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                    <div className="flex items-center space-x-3">
                    <div className={`h-3 w-3 rounded-full ${isOpen && OpenById === project.id ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                    <span className="font-semibold text-gray-800">{project.title}</span>
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
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-48 object-cover rounded-lg shadow-sm"
                        />
                        </div>
                        
                        <div className="md:w-3/5 space-y-4">
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, i) => (
                            <span 
                                key={i} 
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getColor(tool)}`}
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
            ))}
            </div>
        </div>
    </Card>
  )
}

export default Project