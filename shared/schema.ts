import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'storyline', 'js-scenario', 'microlearning', etc.
  imageUrl: text("image_url"),
  linkUrl: text("link_url"),
  linkText: text("link_text").default("View Project"),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true, createdAt: true });

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Contact Info
export const contactInfo = {
  name: "Todd F Morse",
  phone: "904-910-5977",
  email: "tfmorse@gmail.com",
  title: "Instructional Designer & E-Learning Developer",
  specialty: "Banking Risk & Compliance Specialist"
};
