import { z } from "zod";

// Auth Validation Schema
export const authSchema = z.object({
  username: z.string().min(3, "Username should have at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password should have at least 6 characters"),
  role: z.enum(["user", "admin"]),
  adminSecret: z.string(),
});

// Game Validation Schema
export const gameSchema = z.object({
  title: z.string().min(1, "Title is required"),
  genre: z.string().min(1, "Genre is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be greater than 0"),
  systemRequirements: z.object({
    cpu: z.string().min(1, "CPU requirement is required"),
    gpu: z.string().min(1, "GPU requirement is required"),
    ram: z.string().min(1, "RAM requirement is required"),
    storage: z.string().min(1, "Storage requirement is required"),
  }),
});

// Rating Validation Schema
export const ratingSchema = z.object({
  score: z.number().min(1).max(5, "Rating must be between 1 and 5"),
  comment: z.string().min(1, "Comment can't be empty").optional(),
});
