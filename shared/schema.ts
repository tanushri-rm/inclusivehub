import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const places = pgTable("places", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: text("type").notNull(),
  address: text("address").notNull(),
  phone: text("phone"),
  lat: numeric("lat", { precision: 10, scale: 7 }),
  lng: numeric("lng", { precision: 10, scale: 7 }),
  features: text("features").array().notNull().default(sql`ARRAY[]::text[]`),
  imageUrl: text("image_url"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const marketplaceItems = pgTable("marketplace_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  creator: text("creator").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("image_url").notNull(),
  tags: text("tags").array().notNull().default(sql`ARRAY[]::text[]`),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const communityPosts = pgTable("community_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  author: text("author").notNull(),
  authorImage: text("author_image"),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  likes: integer("likes").notNull().default(0),
  comments: integer("comments").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const educationModules = pgTable("education_modules", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  duration: text("duration").notNull(),
  difficulty: text("difficulty").notNull(),
  topics: text("topics").array().notNull().default(sql`ARRAY[]::text[]`),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const ngos = pgTable("ngos", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  logo: text("logo"),
  focus: text("focus").array().notNull().default(sql`ARRAY[]::text[]`),
  website: text("website"),
  membersSupported: integer("members_supported").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const crowdfundingCampaigns = pgTable("crowdfunding_campaigns", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  organizer: text("organizer").notNull(),
  description: text("description").notNull(),
  goal: numeric("goal", { precision: 10, scale: 2 }).notNull(),
  raised: numeric("raised", { precision: 10, scale: 2 }).notNull().default("0"),
  backers: integer("backers").notNull().default(0),
  daysLeft: integer("days_left").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chatMessages = pgTable("chat_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  role: text("role").notNull(),
  content: text("content").notNull(),
  sessionId: text("session_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPlaceSchema = createInsertSchema(places).omit({
  id: true,
  createdAt: true,
});

export const insertMarketplaceItemSchema = createInsertSchema(marketplaceItems).omit({
  id: true,
  createdAt: true,
});

export const insertCommunityPostSchema = createInsertSchema(communityPosts).omit({
  id: true,
  createdAt: true,
  likes: true,
  comments: true,
});

export const insertEducationModuleSchema = createInsertSchema(educationModules).omit({
  id: true,
  createdAt: true,
});

export const insertNGOSchema = createInsertSchema(ngos).omit({
  id: true,
  createdAt: true,
});

export const insertCrowdfundingCampaignSchema = createInsertSchema(crowdfundingCampaigns).omit({
  id: true,
  createdAt: true,
  raised: true,
  backers: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  createdAt: true,
});

export type Place = typeof places.$inferSelect;
export type InsertPlace = z.infer<typeof insertPlaceSchema>;

export type MarketplaceItem = typeof marketplaceItems.$inferSelect;
export type InsertMarketplaceItem = z.infer<typeof insertMarketplaceItemSchema>;

export type CommunityPost = typeof communityPosts.$inferSelect;
export type InsertCommunityPost = z.infer<typeof insertCommunityPostSchema>;

export type EducationModule = typeof educationModules.$inferSelect;
export type InsertEducationModule = z.infer<typeof insertEducationModuleSchema>;

export type NGO = typeof ngos.$inferSelect;
export type InsertNGO = z.infer<typeof insertNGOSchema>;

export type CrowdfundingCampaign = typeof crowdfundingCampaigns.$inferSelect;
export type InsertCrowdfundingCampaign = z.infer<typeof insertCrowdfundingCampaignSchema>;

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
