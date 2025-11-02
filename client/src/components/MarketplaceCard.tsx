import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface MarketplaceCardProps {
  title: string;
  creator: string;
  price: number;
  imageUrl: string;
  tags: string[];
  description?: string;
}

export default function MarketplaceCard({
  title,
  creator,
  price,
  imageUrl,
  tags,
  description,
}: MarketplaceCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Card className="hover-elevate overflow-hidden" data-testid={`card-marketplace-${title.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
        <Button
          size="icon"
          variant="secondary"
          className={`absolute top-2 right-2 rounded-full ${isFavorited ? 'bg-destructive text-destructive-foreground' : ''}`}
          onClick={() => setIsFavorited(!isFavorited)}
          aria-label="Add to favorites"
          data-testid="button-favorite"
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
        </Button>
      </div>
      <CardHeader className="space-y-2">
        <h3 className="font-semibold text-lg leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">by {creator}</p>
        {description && <p className="text-sm text-foreground line-clamp-2">{description}</p>}
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardFooter className="flex items-center justify-between gap-2">
        <span className="text-2xl font-bold text-primary">${price}</span>
        <Button className="gap-2" data-testid="button-add-to-cart">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
