import { MapPin, ExternalLink,  Github, ClipboardList, Moon, Sun, Phone } from "lucide-react";
import Logos from "../components/Logos";
import GitHubCalendar from "react-github-calendar";
import { Card } from "../components/ui/card";
import Project from "@/components/Project";
import { useTheme } from "@/components/theme-provider";
import { motion } from 'framer-motion';

function Main() {
  const { theme, setTheme } = useTheme();
  
  // Define a consistent color palette
  const colors = {
    light: {
      primary: '#000000',
      secondary: '#6366F1',
      text: '#374151',
      lightText: '#6B7280',
      background: '#F9FAFB',
      card: '#FFFFFF'
    },
    dark: {
      primary: '#60A5FA',
      secondary: '#818CF8',
      text: '#F3F4F6',
      lightText: '#D1D5DB',
      background: '#111827',
      card: '#000000'
    }
  };

  const currentColors = theme === 'dark' ? colors.dark : colors.light;

  return (
    <div 
      className="max-w-7xl mx-auto p-4 md:p-6 space-y-8"
      style={{ color: currentColors.text, backgroundColor: currentColors.background }}
    >
      {/* Header Section */}
      <Card 
        className="p-6 border-0 shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl"
        style={{ 
          background: theme === 'dark' 
            ? 'linear-gradient(to right, #000000, #f5f5f55b)' 
            : 'linear-gradient(to right, #f1f1f1, #1a1a1aa6)'
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-7">
          <div className="md:w-[13rem]">
            <img 
              src="https://scontent.fcrk7-1.fna.fbcdn.net/v/t39.30808-6/428630007_1373350323386093_3092854452950680741_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFi3jQ01ryVMVD2U0wzVOebZAXXqOCnh7NkBdeo4KeHs2ashidOl1zhm_cd7G7sxKPaex_i1KFMX-TFsCtR7b1-&_nc_ohc=t8XClXL3YKsQ7kNvwEx7Lup&_nc_oc=Adm5VMZFRz79sKQZgB3ekEbzrptbIRiF14kwOWo8GUuVT8810FuA4LGOQKAdg_Azh-8&_nc_zt=23&_nc_ht=scontent.fcrk7-1.fna&_nc_gid=fg4o5mYG6J5XmxCXT2RnzA&oh=00_AfXa-M-BoEvBNnpMKBmcvUEFhkTYNBqqR6bKgGxFt9fuzg&oe=68BA0B4A" 
              alt="Patrick Allen Pena"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md transition-all duration-300 hover:scale-105"
            />
          </div>
          
          <div className="flex md:flex-row flex-col justify-between w-full md:items-baseline items-center">
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold" style={{ color: currentColors.text }}>
                Patrick Allen Peña
              </h1>
              <div className="flex items-center justify-center md:justify-start mt-2" style={{ color: currentColors.lightText }}>
                <MapPin size={16} className="mr-1.5" />
                <span>Betis Guagua Pampanga</span>
              </div>
              <p className="mt-3 max-w-md" style={{ color: currentColors.lightText }}>
                Passionate full-stack developer with a focus on creating clean, efficient code and delightful user experiences. 
                I enjoy turning complex problems into simple, beautiful solutions.
              </p>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://github.com/allenpt221" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm transition-colors hover:opacity-80 font-medium"
                  style={{ color: currentColors.primary }}
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-sm transition-colors hover:opacity-80 font-medium"
                  style={{ color: currentColors.primary }}
                >
                  <ExternalLink size={16} className="mr-1" />
                  Portfolio
                </a>
              </div>
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-10 w-10 ml-auto flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 mt-4 md:mt-0"
              style={{ 
                borderColor: theme === 'dark' ? '#4B5563' : '#D1D5DB',
                backgroundColor: theme === 'dark' ? '#374151' : '#F3F4F6'
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-300" />
              ) : (
                <Moon size={18} style={{ color: currentColors.text }} />
              )}
            </button>
          </div>
        </div>
      </Card>
      
      {/* Skills/Logos Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <div className="h-5 w-1 rounded-full" style={{ backgroundColor: currentColors.primary }}></div>
          Skills & Technologies
        </h2>
        <Card className="p-4 border-0 shadow-lg rounded-xl" style={{ backgroundColor: currentColors.card }}>
          <Logos />
        </Card>
      </div>
      
      {/* About & GitHub Container */}
      <div className="flex lg:flex-row flex-col gap-6">
        {/* About */}
        <Card className="p-6 shadow-lg rounded-xl" style={{ backgroundColor: currentColors.card }}>
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.10 }}
              viewport={{ once: true, amount: 0.3 }}
              
            className="flex gap-2 font-semibold text-lg items-center mb-4" style={{ color: currentColors.primary }}>
              <ClipboardList size={18}/>
              About
            </motion.span>

            <p className="leading-relaxed" style={{ color: currentColors.lightText }}>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                I'm an Information Technology student currently in my 3rd year, skilled and passionate about website development. 
                I primarily work with the PERN and MERN stacks (PostgreSQL, MongoDB, Express, React, Node.js), and I can also develop 
                applications using Next.js with pure JavaScript and PostgreSQL as the database.
              </motion.p>
              <br />
              <br />
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.20 }}
                viewport={{ once: true, amount: 0.3 }}
                  >
                I specialize in building dynamic, responsive, and user-friendly web applications. My experience with both PERN and MERN 
                stacks allows me to create scalable back-end architectures while delivering smooth front-end experiences. Using Next.js, 
                I develop performant, SEO-friendly web applications, combining modern frameworks with efficient database management.
              </motion.p>
              <br />
              <br />
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Although I'm still a 3rd year, I am passionate about solving real-world problems through technology, optimizing workflows, 
                and continuously learning new tools and frameworks to stay ahead in the ever-evolving tech landscape. I enjoy working in 
                collaborative environments where innovation and creativity drive impactful results.
                Whether it's developing full-stack applications from scratch, integrating APIs, or optimizing existing platforms, I am 
                committed to delivering high-quality solutions that meet both company and user needs.
              </motion.p>
            </p>
          </div>
        </Card>

        {/* GitHub Contributions */}
        <div className="space-y-2 lg:w-[30rem]">
          <div className="space-y-4 overflow-hidden">
            <Card className="p-6 shadow-lg rounded-xl" style={{ backgroundColor: currentColors.card }}>
              <div className="flex items-center gap-2 mb-4" style={{ color: currentColors.primary }}>
                <Github size={18} />
                <span className="font-semibold">GitHub Contributions</span>
              </div>
              <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.10 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center">
                <GitHubCalendar
                  username="allenpt221"
                  blockSize={12}
                  blockMargin={4}
                  theme={{
                    light: ['#EBEDF0', '#9BE9A8', '#40C463', '#30A14E', '#216E39'],
                    dark: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353']
                  }}
                  fontSize={12}
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true, amount: 0.3 }}
              className="flex justify-end mt-4">
                <a 
                  href={`https://github.com/allenpt221`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:opacity-80 flex items-center gap-1 font-medium"
                  style={{ color: currentColors.primary }}
                >
                  View full profile
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            </Card>
          </div>
            <Card className="p-3">
              <div className="space-y-1">
                <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.10 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-center gap-2 font-medium text-black/70 text-lg dark:text-white">
                  <Phone size={20} />
                  Connect With Me
                </motion.span>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true, amount: 0.3 }}
                className="text-gray-500 text-sm px-3">
                  I’m actively seeking new job opportunities. If you know of any roles or have feedback to share, I’d be grateful for your insights.
                </motion.p>

                <motion.form 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true, amount: 0.3 }}
                className="space-y-2 text-gray-500">
                  <label>Email</label>
                  <input type="text"
                  name="email" className="w-full border p-2 rounded dark:border-white bg-gray-100"/>

                  <label>Perspective</label>
                  <input type="text"
                  name="email" className="w-full border p-2 rounded dark:border-white bg-gray-100"/>

                  <button type="submit" className="bg-black/50 rounded text-white  w-full font-medium p-2 mt-2">
                    Submit
                  </button>
                </motion.form>
              </div>
            </Card>
        </div>
      </div>

      {/* Personal Projects */}
      <Project />
    </div>
  );
}

export default Main;