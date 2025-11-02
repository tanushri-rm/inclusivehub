import {
  type Place,
  type InsertPlace,
  type MarketplaceItem,
  type InsertMarketplaceItem,
  type CommunityPost,
  type InsertCommunityPost,
  type EducationModule,
  type InsertEducationModule,
  type NGO,
  type InsertNGO,
  type CrowdfundingCampaign,
  type InsertCrowdfundingCampaign,
  type ChatMessage,
  type InsertChatMessage,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Places
  getPlaces(filters?: { type?: string; features?: string[] }): Promise<Place[]>;
  getPlace(id: string): Promise<Place | undefined>;
  createPlace(place: InsertPlace): Promise<Place>;
  
  // Marketplace
  getMarketplaceItems(): Promise<MarketplaceItem[]>;
  getMarketplaceItem(id: string): Promise<MarketplaceItem | undefined>;
  createMarketplaceItem(item: InsertMarketplaceItem): Promise<MarketplaceItem>;
  
  // Community Posts
  getCommunityPosts(): Promise<CommunityPost[]>;
  getCommunityPost(id: string): Promise<CommunityPost | undefined>;
  createCommunityPost(post: InsertCommunityPost): Promise<CommunityPost>;
  likePost(id: string): Promise<CommunityPost | undefined>;
  
  // Education
  getEducationModules(): Promise<EducationModule[]>;
  getEducationModule(id: string): Promise<EducationModule | undefined>;
  createEducationModule(module: InsertEducationModule): Promise<EducationModule>;
  
  // NGOs
  getNGOs(): Promise<NGO[]>;
  getNGO(id: string): Promise<NGO | undefined>;
  createNGO(ngo: InsertNGO): Promise<NGO>;
  
  // Crowdfunding
  getCrowdfundingCampaigns(): Promise<CrowdfundingCampaign[]>;
  getCrowdfundingCampaign(id: string): Promise<CrowdfundingCampaign | undefined>;
  createCrowdfundingCampaign(campaign: InsertCrowdfundingCampaign): Promise<CrowdfundingCampaign>;
  donateToCampaign(id: string, amount: number): Promise<CrowdfundingCampaign | undefined>;
  
  // Chat Messages
  getChatMessages(sessionId?: string): Promise<ChatMessage[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
}

export class MemStorage implements IStorage {
  private places: Map<string, Place>;
  private marketplaceItems: Map<string, MarketplaceItem>;
  private communityPosts: Map<string, CommunityPost>;
  private educationModules: Map<string, EducationModule>;
  private ngos: Map<string, NGO>;
  private crowdfundingCampaigns: Map<string, CrowdfundingCampaign>;
  private chatMessages: Map<string, ChatMessage>;

  constructor() {
    this.places = new Map();
    this.marketplaceItems = new Map();
    this.communityPosts = new Map();
    this.educationModules = new Map();
    this.ngos = new Map();
    this.crowdfundingCampaigns = new Map();
    this.chatMessages = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed places
    const placesData: InsertPlace[] = [
      {
        name: "City General Hospital",
        type: "Hospital",
        address: "123 Healthcare Ave, Medical District",
        phone: "(555) 123-4567",
        lat: "37.7749",
        lng: "-122.4194",
        features: ["wheelchair", "audio", "visual"],
        description: "Full-service hospital with comprehensive accessibility features",
      },
      {
        name: "Harmony Cafe",
        type: "Restaurant",
        address: "456 Main Street, Downtown",
        phone: "(555) 234-5678",
        lat: "37.7849",
        lng: "-122.4094",
        features: ["wheelchair", "hearing"],
        description: "Cozy cafe with braille menus and voice-activated ordering",
      },
      {
        name: "Metro Shopping Center",
        type: "Shopping Mall",
        address: "789 Commerce Blvd, City Center",
        phone: "(555) 345-6789",
        lat: "37.7649",
        lng: "-122.4294",
        features: ["wheelchair", "audio", "visual", "hearing"],
        description: "Modern mall with full accessibility across all levels",
      },
    ];
    
    placesData.forEach(place => this.createPlace(place));
    
    // Seed marketplace items
    const marketplaceData: InsertMarketplaceItem[] = [
      {
        title: "Abstract Sunset",
        creator: "Sarah Chen",
        price: "45.00",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        tags: ["Art", "Painting"],
        description: "Vibrant abstract coastal sunset",
      },
      {
        title: "Handcrafted Pottery",
        creator: "Mike Torres",
        price: "32.00",
        imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
        tags: ["Crafts", "Pottery"],
        description: "Unique ceramic bowl collection",
      },
    ];
    
    marketplaceData.forEach(item => this.createMarketplaceItem(item));
    
    // Seed community posts
    const postsData: InsertCommunityPost[] = [
      {
        author: "Alex Rodriguez",
        content: "Just visited the new accessible cafe downtown! Amazing voice-activated ordering system and braille menus. Highly recommend to everyone in the community!",
      },
      {
        author: "Jamie Lee",
        content: "Sharing my experience with the AI assistant feature - it helped me find three wheelchair-accessible parks in my area. This platform is truly life-changing!",
      },
    ];
    
    postsData.forEach(post => this.createCommunityPost(post));
    
    // Seed education modules
    const educationData: InsertEducationModule[] = [
      {
        title: "Understanding Digital Accessibility",
        description: "Learn the fundamentals of web accessibility and inclusive design principles",
        duration: "45 min",
        difficulty: "Beginner",
        topics: ["WCAG Guidelines", "Screen Readers", "Keyboard Navigation"],
      },
    ];
    
    educationData.forEach(module => this.createEducationModule(module));
    
    // Seed NGOs
    const ngosData: InsertNGO[] = [
      {
        name: "Access Alliance",
        description: "Dedicated to creating accessible infrastructure and advocating for disability rights worldwide",
        focus: ["Infrastructure", "Advocacy", "Education"],
        website: "https://example.org",
        membersSupported: 15000,
      },
    ];
    
    ngosData.forEach(ngo => this.createNGO(ngo));
    
    // Seed crowdfunding campaigns
    const campaignsData: InsertCrowdfundingCampaign[] = [
      {
        title: "Accessible Playground Equipment",
        organizer: "Community First Initiative",
        description: "Help us build an inclusive playground with wheelchair-accessible swings, sensory play areas, and adaptive equipment for all children",
        goal: "25000.00",
        daysLeft: 15,
        category: "Community",
        imageUrl: "https://images.unsplash.com/photo-1586105449897-20b5efeb3229?w=400&h=300&fit=crop",
      },
    ];
    
    campaignsData.forEach(campaign => this.createCrowdfundingCampaign(campaign));
  }

  // Places
  async getPlaces(filters?: { type?: string; features?: string[] }): Promise<Place[]> {
    let places = Array.from(this.places.values());
    
    if (filters?.type) {
      places = places.filter(p => p.type === filters.type);
    }
    
    if (filters?.features?.length) {
      places = places.filter(p => 
        filters.features!.some(f => p.features.includes(f))
      );
    }
    
    return places;
  }

  async getPlace(id: string): Promise<Place | undefined> {
    return this.places.get(id);
  }

  async createPlace(insertPlace: InsertPlace): Promise<Place> {
    const id = randomUUID();
    const place: Place = { 
      ...insertPlace,
      phone: insertPlace.phone ?? null,
      lat: insertPlace.lat ?? null,
      lng: insertPlace.lng ?? null,
      features: insertPlace.features ?? [],
      imageUrl: insertPlace.imageUrl ?? null,
      description: insertPlace.description ?? null,
      id, 
      createdAt: new Date() 
    };
    this.places.set(id, place);
    return place;
  }

  // Marketplace
  async getMarketplaceItems(): Promise<MarketplaceItem[]> {
    return Array.from(this.marketplaceItems.values());
  }

  async getMarketplaceItem(id: string): Promise<MarketplaceItem | undefined> {
    return this.marketplaceItems.get(id);
  }

  async createMarketplaceItem(insertItem: InsertMarketplaceItem): Promise<MarketplaceItem> {
    const id = randomUUID();
    const item: MarketplaceItem = { 
      ...insertItem,
      tags: insertItem.tags ?? [],
      description: insertItem.description ?? null,
      id, 
      createdAt: new Date() 
    };
    this.marketplaceItems.set(id, item);
    return item;
  }

  // Community Posts
  async getCommunityPosts(): Promise<CommunityPost[]> {
    return Array.from(this.communityPosts.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getCommunityPost(id: string): Promise<CommunityPost | undefined> {
    return this.communityPosts.get(id);
  }

  async createCommunityPost(insertPost: InsertCommunityPost): Promise<CommunityPost> {
    const id = randomUUID();
    const post: CommunityPost = { 
      ...insertPost,
      authorImage: insertPost.authorImage ?? null,
      imageUrl: insertPost.imageUrl ?? null,
      id, 
      likes: 0,
      comments: 0,
      createdAt: new Date() 
    };
    this.communityPosts.set(id, post);
    return post;
  }

  async likePost(id: string): Promise<CommunityPost | undefined> {
    const post = this.communityPosts.get(id);
    if (post) {
      post.likes += 1;
      this.communityPosts.set(id, post);
    }
    return post;
  }

  // Education
  async getEducationModules(): Promise<EducationModule[]> {
    return Array.from(this.educationModules.values());
  }

  async getEducationModule(id: string): Promise<EducationModule | undefined> {
    return this.educationModules.get(id);
  }

  async createEducationModule(insertModule: InsertEducationModule): Promise<EducationModule> {
    const id = randomUUID();
    const module: EducationModule = { 
      ...insertModule,
      topics: insertModule.topics ?? [],
      content: insertModule.content ?? null,
      id, 
      createdAt: new Date() 
    };
    this.educationModules.set(id, module);
    return module;
  }

  // NGOs
  async getNGOs(): Promise<NGO[]> {
    return Array.from(this.ngos.values());
  }

  async getNGO(id: string): Promise<NGO | undefined> {
    return this.ngos.get(id);
  }

  async createNGO(insertNGO: InsertNGO): Promise<NGO> {
    const id = randomUUID();
    const ngo: NGO = { 
      ...insertNGO,
      logo: insertNGO.logo ?? null,
      focus: insertNGO.focus ?? [],
      website: insertNGO.website ?? null,
      membersSupported: insertNGO.membersSupported ?? 0,
      id, 
      createdAt: new Date() 
    };
    this.ngos.set(id, ngo);
    return ngo;
  }

  // Crowdfunding
  async getCrowdfundingCampaigns(): Promise<CrowdfundingCampaign[]> {
    return Array.from(this.crowdfundingCampaigns.values());
  }

  async getCrowdfundingCampaign(id: string): Promise<CrowdfundingCampaign | undefined> {
    return this.crowdfundingCampaigns.get(id);
  }

  async createCrowdfundingCampaign(insertCampaign: InsertCrowdfundingCampaign): Promise<CrowdfundingCampaign> {
    const id = randomUUID();
    const campaign: CrowdfundingCampaign = { 
      ...insertCampaign,
      imageUrl: insertCampaign.imageUrl ?? null,
      id,
      raised: "0",
      backers: 0,
      createdAt: new Date() 
    };
    this.crowdfundingCampaigns.set(id, campaign);
    return campaign;
  }

  async donateToCampaign(id: string, amount: number): Promise<CrowdfundingCampaign | undefined> {
    const campaign = this.crowdfundingCampaigns.get(id);
    if (campaign) {
      const currentRaised = parseFloat(campaign.raised);
      campaign.raised = (currentRaised + amount).toFixed(2);
      campaign.backers += 1;
      this.crowdfundingCampaigns.set(id, campaign);
    }
    return campaign;
  }

  // Chat Messages
  async getChatMessages(sessionId?: string): Promise<ChatMessage[]> {
    let messages = Array.from(this.chatMessages.values());
    
    if (sessionId) {
      messages = messages.filter(m => m.sessionId === sessionId);
    }
    
    return messages.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = randomUUID();
    const message: ChatMessage = { 
      ...insertMessage,
      sessionId: insertMessage.sessionId ?? null,
      id, 
      createdAt: new Date() 
    };
    this.chatMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
