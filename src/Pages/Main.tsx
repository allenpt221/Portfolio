import { MapPin, Calendar, ExternalLink, FolderGit, ChevronUp, ChevronDown, Github } from "lucide-react";
import Logos from "../components/Logos";
import GitHubCalendar from "react-github-calendar";
import { Card } from "../components/ui/card";
import { useState } from "react";
import Project from "@/components/Project";

function Main() {
  

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
      {/* Header Section */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-sm rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img 
              src="https://scontent.fcrk7-1.fna.fbcdn.net/v/t39.30808-6/428630007_1373350323386093_3092854452950680741_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFi3jQ01ryVMVD2U0wzVOebZAXXqOCnh7NkBdeo4KeHs2ashidOl1zhm_cd7G7sxKPaex_i1KFMX-TFsCtR7b1-&_nc_ohc=t8XClXL3YKsQ7kNvwEx7Lup&_nc_oc=Adm5VMZFRz79sKQZgB3ekEbzrptbIRiF14kwOWo8GUuVT8810FuA4LGOQKAdg_Azh-8&_nc_zt=23&_nc_ht=scontent.fcrk7-1.fna&_nc_gid=fg4o5mYG6J5XmxCXT2RnzA&oh=00_AfXa-M-BoEvBNnpMKBmcvUEFhkTYNBqqR6bKgGxFt9fuzg&oe=68BA0B4A" 
              alt="Patrick Allen Pena"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="absolute -bottom-2 -right-2 bg-white text-white p-1.5 rounded-full shadow-md">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Patrick Allen Pena</h1>
            <div className="flex items-center justify-center md:justify-start mt-2 text-gray-600">
              <MapPin size={16} className="mr-1.5" />
              <span>Betis Guagua Pampanga</span>
            </div>
            <p className="mt-3 text-gray-600 max-w-md">
              Passionate full-stack developer with a focus on creating clean, efficient code and delightful user experiences. 
              I enjoy turning complex problems into simple, beautiful solutions.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-3">
              <a 
                href="https://github.com/allenpt221" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Github size={16} className="mr-1" />
                GitHub
              </a>
              <span className="text-gray-300">|</span>
              <a 
                href="#" 
                className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Skills/Logos Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <div className="h-5 w-1 bg-blue-500 rounded-full"></div>
          Skills & Technologies
        </h2>
        <Card className="p-4 border-0 shadow-sm rounded-xl">
          <Logos />
        </Card>
      </div>
      
      {/* GitHub Contributions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Calendar size={20} className="text-blue-500" />
          GitHub Contributions
        </h2>
        <Card className="p-4 border-0 shadow-sm rounded-xl">
          <GitHubCalendar
            username="allenpt221"
            blockSize={13}    
            blockMargin={5}    
            colorScheme="light"
            fontSize={16}
          />
          <div className="flex justify-end mt-3">
            <a 
              href={`https://github.com/allenpt221`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 transition-colors"
            >
              View full profile
              <ExternalLink size={14} />
            </a>
          </div>
        </Card>
      </div>
      
      {/* Personal Projects */}
      <Project />
    </div>
  );
}

export default Main;