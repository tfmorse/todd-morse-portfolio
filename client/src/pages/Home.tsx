import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  const staticProjects = [
    {
      id: 1,
      title: "Articulate Storyline 360",
      description: "The Science of Sleep: Exploring the impact of sleep deprivation on cognitive performance and long-term health. Features complex state management and custom variable tracking.",
      linkUrl: "https://tfmorse.github.io/demo_3/?resume=false",
      linkText: "Launch Module",
      category: "storyline"
    },
    {
      id: 2,
      title: "Interactive JS Scenario",
      description: "The Deepfake Deposit: A custom-coded HTML5/JS branching simulation designed to test fraud detection skills in a realistic banking environment.",
      internalLink: "/scenario-demo",
      linkText: "View Demo",
      category: "js-scenario"
    },
    {
      id: 3,
      title: "Microlearning & Support",
      description: "Modern compliance job aids and short-form video content designed for just-in-time performance support. Focusing on high-retention visual strategies.",
      internalLink: "/microlearning",
      linkText: "View Assets",
      category: "microlearning"
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left z-10"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Todd Morse
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-4xl lg:text-6xl mt-2">
                  Learning Solutions
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Bridging the gap between complex regulatory risk and high-performance training through interactive storytelling and cutting-edge web technologies.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="#projects" 
                  className="btn-primary"
                >
                  View My Work
                </a>
                <a 
                  href="mailto:contact@example.com"
                  className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-white font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
              
              <div className="mt-12 flex gap-6 justify-center lg:justify-start text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-[60px] opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full p-2 border border-white/10 bg-white/5 backdrop-blur-sm">
                <img 
                  src="https://github.com/tfmorse.png" 
                  alt="Todd Morse"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                  onError={(e) => {
                    // Fallback if github image fails
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Todd+Morse&background=00e5ff&color=000b18&size=512";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={index + 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
