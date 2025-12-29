import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { contactInfo } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact Info Route
  app.get(api.contact.get.path, async (req, res) => {
    res.json(contactInfo);
  });

  // API Routes
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  });

  app.post(api.projects.create.path, async (req, res) => {
    try {
      const input = api.projects.create.input.parse(req.body);
      const project = await storage.createProject(input);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      throw err;
    }
  });

  // Seed data if empty (Optional, but good for testing)
  const existing = await storage.getProjects();
  if (existing.length === 0) {
    await storage.createProject({
      title: "The Science of Sleep",
      description: "Exploring the impact of sleep deprivation on health through an immersive interactive experience.",
      category: "storyline",
      linkUrl: "https://tfmorse.github.io/demo_3/?resume=false",
      linkText: "Launch Module",
      isFeatured: true
    });
    await storage.createProject({
      title: "The Deepfake Deposit",
      description: "A custom-coded HTML5/JS branching simulation on identifying AI-generated social engineering in banking.",
      category: "js-scenario",
      linkUrl: "/scenario-demo",
      linkText: "View Demo",
      isFeatured: true
    });
    await storage.createProject({
      title: "Microlearning Assets",
      description: "Modern compliance job aids and short-form video content designed for the 2025 regulatory landscape.",
      category: "microlearning",
      linkUrl: "/microlearning",
      linkText: "View Assets",
      isFeatured: true
    });
    await storage.createProject({
      title: "KYC Checklist",
      description: "Comprehensive Know Your Customer compliance checklist with AI-driven assessment tools for banking risk evaluation.",
      category: "kyc-checklist",
      imageUrl: "/images/ai-brain.jpg",
      linkUrl: "/kyc-checklist",
      linkText: "View Checklist",
      isFeatured: true
    });
    await storage.createProject({
      title: "HTML/CSS/JS Course",
      description: "A comprehensive course on modern web development, covering the fundamentals of HTML, CSS, and JavaScript.",
      category: "course",
      linkUrl: "https://replit.com/@tfmorse/html-css-js-course", // Placeholder Replit link
      linkText: "Launch Course",
      isFeatured: true
    });
  }

  return httpServer;
}
