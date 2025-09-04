import Marquee from "react-fast-marquee";
import html from "../assets/html.svg"
import cpp from "../assets/C++.svg"
import javascript from "../assets/JavaScript.svg"
import mysql from "../assets/mysql.svg"
import css from "../assets/css.svg"
import python from "../assets/Python.svg"
import github from "../assets/github.svg"
import mongodb from "../assets/mongodb.png"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
import typescript from "../assets/typescript.png"
import vite from "../assets/vite.svg"
import vercel from "../assets/vercel.svg"
import prisma from "../assets/prisma.png"
import postsql from "../assets/postgre.png"
import { motion } from 'framer-motion';


function Logos() {

  const logo = [
      html,
      css,
      mysql,
      postsql,
      python,
      cpp,
      javascript,
      react,
      typescript,
      github,
      tailwind,
      mongodb,
      vite,
      vercel,
      prisma
    ]
  
  return (
   <div className="relative mt-8">
  <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent " />
  <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent " />

  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.10 }}
    viewport={{ once: true, amount: 0.3 }}
  className="overflow-x-hidden">
    <Marquee speed={50} gradient={false} pauseOnHover={true}>
      {logo.map((techStack, index) => (
        <div className="mx-2" key={index}>
          <img src={techStack} alt={`tech-${index}`} className="w-16" />
        </div>
      ))}
    </Marquee>
  </motion.div>
</div>

  )
}

export default Logos