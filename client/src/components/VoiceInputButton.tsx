import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface VoiceInputButtonProps {
  onVoiceInput?: (transcript: string) => void;
  className?: string;
}

export default function VoiceInputButton({ onVoiceInput, className }: VoiceInputButtonProps) {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    console.log(isListening ? 'Stopped listening' : 'Started listening');
    
    if (!isListening && onVoiceInput) {
      setTimeout(() => {
        onVoiceInput("Example voice command: Find nearby hospitals");
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <Button
      size="icon"
      variant={isListening ? "destructive" : "default"}
      onClick={handleVoiceToggle}
      className={`h-14 w-14 rounded-full shadow-lg ${className}`}
      aria-label={isListening ? "Stop voice input" : "Start voice input"}
      data-testid="button-voice-input"
    >
      {isListening ? (
        <MicOff className="h-6 w-6" />
      ) : (
        <Mic className="h-6 w-6" />
      )}
    </Button>
  );
}
