import { Badge } from "@/components/ui/badge";
import { Accessibility, Volume2, Eye, Ear, type LucideIcon } from "lucide-react";

interface AccessibilityBadgeProps {
  type: "wheelchair" | "audio" | "visual" | "hearing";
  label?: string;
}

const badgeConfig: Record<string, { icon: LucideIcon; label: string; variant: "default" | "secondary" | "outline" }> = {
  wheelchair: { icon: Accessibility, label: "Accessibility Access", variant: "default" },
  audio: { icon: Volume2, label: "Audio Support", variant: "secondary" },
  visual: { icon: Eye, label: "Visual Aids", variant: "secondary" },
  hearing: { icon: Ear, label: "Hearing Support", variant: "secondary" },
};

export default function AccessibilityBadge({ type, label }: AccessibilityBadgeProps) {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <Badge variant={config.variant} className="gap-1" data-testid={`badge-accessibility-${type}`}>
      <Icon className="h-3 w-3" />
      {label || config.label}
    </Badge>
  );
}
