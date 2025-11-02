import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: string;
}

interface MapViewProps {
  locations: Location[];
  center?: { lat: number; lng: number };
  onLocationClick?: (location: Location) => void;
}

export default function MapView({ locations, center, onLocationClick }: MapViewProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location.id);
    onLocationClick?.(location);
  };

  return (
    <Card className="relative overflow-hidden h-[500px]" data-testid="map-view">
      <div className="absolute inset-0 bg-muted flex items-center justify-center">
        <div className="text-center space-y-4 p-6">
          <MapPin className="h-16 w-16 text-primary mx-auto" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Interactive Map View</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              In the full version, this will display an interactive map with {locations.length} accessible locations
              using Google Maps or Leaflet integration
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center pt-4">
            {locations.slice(0, 3).map((location) => (
              <Button
                key={location.id}
                variant={selectedLocation === location.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleLocationClick(location)}
                className="gap-2"
                data-testid={`map-location-${location.id}`}
              >
                <MapPin className="h-3 w-3" />
                {location.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <Button variant="secondary" size="icon" aria-label="Zoom in" data-testid="button-zoom-in">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Zoom out" data-testid="button-zoom-out">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Get directions" data-testid="button-my-location">
          <Navigation className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
