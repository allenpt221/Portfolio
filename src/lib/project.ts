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
  import Kapetayo3 from "../assets/ProjectImage/KapeTayo4.png";

  import MainStockHub from "../assets/ProjectImage/Stockhub.png";
  import MainStudySphere from "../assets/ProjectImage/StudySphere.png";
  import MainKapeTayo from "../assets/ProjectImage/KapeTayo.png";
  import MainCoffeeOverView from "../assets/ProjectImage/CoffeeOverview.png";


  
export const projects = [
    {
      id: "1",
      title: "KapeTayo - Coffee Shop Management",
      image: [Kapetayo, Kapetayo1, Kapetayo2, Kapetayo3],
      description:
        "is a full-stack system that design both on customer-facing and back-end operations of a coffee shop. It handles ordering, payments, and customer service",
      tools: ["React", "MongoDB", "Tailwind", "Express.js", "Node.Js"],
      githubUrl: "https://github.com/allenpt221",
      liveUrl: "https://kapetayo.onrender.com/",
      imageUrl: MainKapeTayo
    },
    {
      id: "2",
      title: "Coffee Overview - Coffee Description",
      image: [coffeeOverview, coffeeOverview1, coffeeOverview2],
      description:
        "Is a static website that provides information about different types of coffee, their flavors, and dessert pairings.",
      tools: ["React", "Tailwind", "Static Website"],
      githubUrl: "https://github.com/allenpt221/static-coffee-outline",
      liveUrl: "https://coffeeoverview.vercel.app/",
      imageUrl: MainCoffeeOverView
    },
    {
      id: "3",
      title: "Stockhub - Inventory Management System",
      image: [StockHub, StockHub1, StockHub2, StockHub3],
      description:
        "Is a system designed to help business owners track and manage products. It monitors stock levels, updates product details, generates reports, and allows the admin to include up to three users to assist with inventory tracking and updates.",
      tools: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Supabase",
        "Tailwind",
        "Shadcn ui",
      ],
      githubUrl: "https://github.com/allenpt221",
      liveUrl: "https://stockhub-l7jk.onrender.com/",
      imageUrl: MainStockHub
    },{
        id: "4",
      title: "StudySphere - Learning Management System",
      image: [StockHub, StockHub1, StockHub2, StockHub3],
      description:
        "Is a platform built to make learning more social and enjoyable. It combines community features with courses, posts, follows, likes, and comments, creating an interactive space where learners can connect, share, and grow together.",
      tools: [
        "Nextjs",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Postgresql",
        "Prisma",
        "Tailwind",
        "Shadcn ui",
      ],
      githubUrl: "https://github.com/allenpt221",
      liveUrl: "#",
      imageUrl: MainStudySphere
    }

  ];


export function getColor(tool: string) {
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
      case "nextjs":
      case "prisma":
        return "bg-black/20  dark:bg-white/40 dark:border-white text-black/90 border border-black";
        case "postgresql":
        return "bg-blue-100 text-blue-500 border border-blue-500";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-300";
    }
  }
