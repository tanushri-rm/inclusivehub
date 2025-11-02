import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart, Users } from "lucide-react";

interface NGOCardProps {
  name: string;
  description: string;
  logo?: string;
  focus: string[];
  website?: string;
  membersSupported?: number;
}

export default function NGOCard({
  name,
  description,
  logo,
  focus,
  website,
  membersSupported,
}: NGOCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`ngo-${name.toLowerCase().replace(/\s/g, '-')}`}>
      <CardHeader className="space-y-4">
        <div className="flex items-start gap-4">
          {logo ? (
            <img src={logo} alt={`${name} logo`} className="h-16 w-16 rounded-md object-cover" />
          ) : (
            <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl">{name}</CardTitle>
            {membersSupported && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <Users className="h-3 w-3" />
                {membersSupported.toLocaleString()} supported
              </div>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {focus.map((item) => (
            <Badge key={item} variant="secondary" className="text-xs">
              {item}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <Button variant="default" className="flex-1" data-testid="button-support-ngo">
          Support
        </Button>
        {website && (
          <Button variant="outline" className="gap-2" asChild data-testid="button-ngo-website">
            <a href={website} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Visit
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
