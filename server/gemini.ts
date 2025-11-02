// Integration: blueprint:javascript_gemini
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function chatWithAI(message: string, conversationHistory?: Array<{ role: string; content: string }>): Promise<string> {
  try {
    const systemPrompt = `You are an AI accessibility assistant for InclusiveHub, a platform dedicated to empowering individuals with diverse disabilities. 
Your role is to:
- Help users find accessible places (hospitals, restaurants, public spaces)
- Provide guidance on accessibility features and assistive technology
- Offer encouragement and support for navigating daily challenges
- Answer questions about disability rights and resources
- Be respectful, patient, and encouraging in all interactions

Be conversational, empathetic, and practical in your responses.`;

    // Build conversation context
    const contents = conversationHistory
      ? conversationHistory.map(msg => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        }))
      : [];

    // Add current message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: systemPrompt,
      },
      contents: contents,
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini chat error:", error);
    throw new Error(`Failed to chat with AI: ${error}`);
  }
}

export async function processVoiceCommand(transcript: string): Promise<{ action: string; response: string; data?: any }> {
  try {
    const systemPrompt = `You are processing voice commands for an accessibility platform. 
Analyze the user's voice command and determine what action they want to take.
Possible actions: "search_places", "ask_question", "navigate", "general_chat"

For "search_places" commands, extract location type and accessibility needs.
For "navigate" commands, extract destination.
For other commands, just provide a helpful response.

Respond with JSON in this format:
{
  "action": "action_type",
  "response": "natural language response to user",
  "data": {
    "type": "location type if applicable",
    "features": ["accessibility features if mentioned"]
  }
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            action: { type: "string" },
            response: { type: "string" },
            data: {
              type: "object",
              properties: {
                type: { type: "string" },
                features: { type: "array", items: { type: "string" } },
              },
            },
          },
          required: ["action", "response"],
        },
      },
      contents: transcript,
    });

    const rawJson = response.text;
    if (rawJson) {
      return JSON.parse(rawJson);
    } else {
      throw new Error("Empty response from model");
    }
  } catch (error) {
    console.error("Voice processing error:", error);
    throw new Error(`Failed to process voice command: ${error}`);
  }
}

export async function generateMarketplaceDescription(title: string, imageAnalysis?: string): Promise<{ description: string; tags: string[] }> {
  try {
    const prompt = imageAnalysis
      ? `Based on this artwork titled "${title}" and the following image analysis: "${imageAnalysis}", generate a compelling marketplace description and relevant tags.`
      : `Generate a compelling marketplace description and relevant tags for an artwork titled "${title}".`;

    const systemPrompt = `You are helping creators on an accessible marketplace platform. 
Generate attractive, accessible descriptions that highlight the creative work's unique qualities.
Also suggest relevant tags for categorization.

Respond with JSON in this format:
{
  "description": "1-2 sentence description",
  "tags": ["tag1", "tag2", "tag3"]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            description: { type: "string" },
            tags: { type: "array", items: { type: "string" } },
          },
          required: ["description", "tags"],
        },
      },
      contents: prompt,
    });

    const rawJson = response.text;
    if (rawJson) {
      return JSON.parse(rawJson);
    } else {
      throw new Error("Empty response from model");
    }
  } catch (error) {
    console.error("Description generation error:", error);
    throw new Error(`Failed to generate description: ${error}`);
  }
}

export async function simplifyEducationalContent(content: string, level: "beginner" | "intermediate" | "advanced"): Promise<string> {
  try {
    const prompt = `Simplify the following educational content for a ${level} level audience. 
Make it accessible and easy to understand while maintaining accuracy.

Content: ${content}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || content;
  } catch (error) {
    console.error("Content simplification error:", error);
    return content; // Return original if simplification fails
  }
}

export async function analyzeAccessibilityFromImage(imageBase64: string): Promise<{ features: string[]; description: string }> {
  try {
    const systemPrompt = `You are analyzing images to identify accessibility features in public spaces.
Look for: wheelchair ramps, elevators, accessible restrooms, braille signage, visual/audio aids, wide doorways, etc.

Respond with JSON in this format:
{
  "features": ["wheelchair", "audio", "visual", "hearing"],
  "description": "Description of accessibility features found"
}`;

    const contents = [
      {
        inlineData: {
          data: imageBase64,
          mimeType: "image/jpeg",
        },
      },
      "Analyze this image for accessibility features. What accessibility accommodations can you identify?",
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            features: { type: "array", items: { type: "string" } },
            description: { type: "string" },
          },
          required: ["features", "description"],
        },
      },
      contents: contents,
    });

    const rawJson = response.text;
    if (rawJson) {
      return JSON.parse(rawJson);
    } else {
      throw new Error("Empty response from model");
    }
  } catch (error) {
    console.error("Image analysis error:", error);
    throw new Error(`Failed to analyze image: ${error}`);
  }
}
