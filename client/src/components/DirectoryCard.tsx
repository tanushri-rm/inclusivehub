import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone } from "lucide-react";
import AccessibilityBadge from "./AccessibilityBadge";

interface DirectoryCardProps {
  name: string;
  type: string;
  address: string;
  distance?: string;
  phone?: string;
  features: Array<"wheelchair" | "audio" | "visual" | "hearing">;
  imageUrl?: string;
}

export default function DirectoryCard({
  name,
  type,
  address,
  distance,
  phone,
  features,
  imageUrl,
}: DirectoryCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-directory-${name.toLowerCase().replace(/\s/g, '-')}`}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl">{name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{type}</p>
          </div>
          {distance && (
            <span className="text-sm font-medium text-primary whitespace-nowrap">{distance}</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <AccessibilityBadge key={feature} type={feature} />
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
          <span className="text-foreground">{address}</span>
        </div>
        {phone && (
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{phone}</span>
          </div>
        )}
        <div className="flex gap-2">
          <Button variant="default" className="flex-1 gap-2" data-testid="button-get-directions">
            <Navigation className="h-4 w-4" />
            Directions
          </Button>
          <Button variant="outline" className="flex-1" data-testid="button-view-details">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
