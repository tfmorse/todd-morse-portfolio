import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Partial<Project> & {
    title: string;
    description: string;
    linkUrl?: string | null;
    linkText?: string | null;
    internalLink?: string;
  };
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="glass-card flex flex-col h-full overflow-hidden group"
    >
      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-4">
          <div className="w-12 h-1 bg-primary/30 rounded-full mb-6 group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="mt-auto pt-6">
          {project.internalLink ? (
            <Link 
              href={project.internalLink}
              className="inline-flex items-center text-primary font-semibold hover:text-cyan-300 transition-colors"
            >
              {project.linkText || "View Project"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : project.linkUrl ? (
            <a 
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:text-cyan-300 transition-colors"
            >
              {project.linkText || "Visit Link"}
              <ExternalLink className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ) : null}
        </div>
      </div>
      
      {/* Decorative gradient overlay at bottom */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
