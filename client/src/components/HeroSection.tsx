import { Button } from "@/components/ui/button";
import { Mic, Search, Map } from "lucide-react";
import heroImage from "@assets/generated_images/diverse_accessible_technology_users_8a767f62.png";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Empowering Accessibility
          <br />
          Through Technology
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Connect, learn, and thrive with AI-powered tools designed for everyone.
          Use voice, text, or visuals to navigate your world.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            variant="default"
            className="gap-2 text-lg h-12 px-6 bg-primary/90 backdrop-blur-sm border border-primary-border hover:bg-primary"
            data-testid="button-voice-search"
          >
            <Mic className="h-5 w-5" />
            Start Voice Search
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-lg h-12 px-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            data-testid="button-explore-directory"
          >
            <Map className="h-5 w-5" />
            Explore Directory
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-white/80 pt-4">
          <Search className="h-4 w-4" />
          <span>Try: "Find nearby hospitals with disability support"</span>
        </div>
      </div>
    </section>
  );
}
