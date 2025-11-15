// Storage interface for potential future expansion
export interface IStorage {
  // Future methods can be added here if needed
}

export class MemStorage implements IStorage {
  constructor() {
    // Static website - no data persistence needed currently
  }
}

export const storage = new MemStorage();
