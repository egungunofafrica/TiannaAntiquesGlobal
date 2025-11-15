import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static website - all content is client-side
  // No API routes needed currently
  
  const httpServer = createServer(app);

  return httpServer;
}
