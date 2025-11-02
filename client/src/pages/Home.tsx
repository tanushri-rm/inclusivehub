import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import DirectoryCard from "@/components/DirectoryCard";
import MarketplaceCard from "@/components/MarketplaceCard";
import CommunityPost from "@/components/CommunityPost";
import EducationModule from "@/components/EducationModule";
import VoiceInputButton from "@/components/VoiceInputButton";
import AIChat from "@/components/AIChat";
import { Mic, Map, ShoppingBag, Users, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Accessibility Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by Gemini AI's multimodal capabilities for seamless interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Mic}
              title="Voice Commands"
              description="Navigate the platform hands-free using natural voice commands powered by Gemini AI"
            />
            <FeatureCard
              icon={Map}
              title="Accessible Places"
              description="Discover hospitals, restaurants, and public spaces with detailed accessibility features"
            />
            <FeatureCard
              icon={ShoppingBag}
              title="Creative Marketplace"
              description="Buy and sell creative works with AI-generated descriptions and multilingual support"
            />
            <FeatureCard
              icon={Users}
              title="Community"
              description="Share experiences, inspire others, and connect with an inclusive community"
            />
            <FeatureCard
              icon={BookOpen}
              title="Learn & Grow"
              description="Access educational modules with simplified, translated content for easy learning"
            />
            <FeatureCard
              icon={Sparkles}
              title="AI Assistant"
              description="Get personalized guidance and support from your AI companion anytime"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Places</h2>
            <Button variant="outline" data-testid="button-view-all-places">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DirectoryCard
              name="City General Hospital"
              type="Hospital"
              address="123 Healthcare Ave, Medical District"
              distance="1.2 mi"
              phone="(555) 123-4567"
              features={["wheelchair", "audio", "visual"]}
            />
            <DirectoryCard
              name="Harmony Cafe"
              type="Restaurant"
              address="456 Main Street, Downtown"
              distance="0.8 mi"
              phone="(555) 234-5678"
              features={["wheelchair", "hearing"]}
            />
            <DirectoryCard
              name="Metro Shopping Center"
              type="Shopping Mall"
              address="789 Commerce Blvd, City Center"
              distance="2.1 mi"
              features={["wheelchair", "audio", "visual", "hearing"]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Creative Marketplace</h2>
            <Button variant="outline" data-testid="button-view-all-marketplace">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MarketplaceCard
              title="Abstract Sunset"
              creator="Sarah Chen"
              price={45}
              imageUrl="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
              tags={["Art", "Painting"]}
              description="Vibrant abstract coastal sunset"
            />
            <MarketplaceCard
              title="Handcrafted Pottery"
              creator="Mike Torres"
              price={32}
              imageUrl="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop"
              tags={["Crafts", "Pottery"]}
              description="Unique ceramic bowl collection"
            />
            <MarketplaceCard
              title="Digital Portrait"
              creator="Emma Wilson"
              price={28}
              imageUrl="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop"
              tags={["Digital", "Art"]}
              description="Custom digital illustrations"
            />
            <MarketplaceCard
              title="Woven Textiles"
              creator="Alex Kumar"
              price={55}
              imageUrl="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"
              tags={["Textiles", "Crafts"]}
              description="Traditional handwoven fabrics"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Community Highlights</h2>

          <div className="space-y-6">
            <CommunityPost
              author="Alex Rodriguez"
              timestamp="2 hours ago"
              content="Just visited the new accessible cafe downtown! Amazing voice-activated ordering system and braille menus. Highly recommend to everyone in the community!"
              likes={24}
              comments={5}
            />
            <CommunityPost
              author="Jamie Lee"
              timestamp="5 hours ago"
              content="Sharing my experience with the AI assistant feature - it helped me find three wheelchair-accessible parks in my area. This platform is truly life-changing! 🌟"
              likes={42}
              comments={12}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Educational Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EducationModule
              title="Understanding Digital Accessibility"
              description="Learn the fundamentals of web accessibility and inclusive design principles"
              duration="45 min"
              difficulty="Beginner"
              topics={["WCAG Guidelines", "Screen Readers", "Keyboard Navigation"]}
            />
            <EducationModule
              title="Navigating Public Spaces"
              description="Tips and strategies for accessing public facilities with confidence"
              duration="30 min"
              difficulty="Beginner"
              topics={["Rights & Laws", "Communication", "Planning"]}
            />
            <EducationModule
              title="Assistive Technology Guide"
              description="Explore the latest assistive technologies and how to use them effectively"
              duration="60 min"
              difficulty="Intermediate"
              topics={["Voice Control", "Screen Magnifiers", "Braille Displays"]}
            />
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-40">
        <VoiceInputButton
          onVoiceInput={(text) => {
            console.log("Voice input:", text);
            setShowChat(true);
          }}
        />
      </div>

      {showChat && <AIChat onClose={() => setShowChat(false)} />}
    </div>
  );
}
