import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Volume2 } from "lucide-react";
import { useState } from "react";

interface CommunityPostProps {
  author: string;
  authorImage?: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
}

export default function CommunityPost({
  author,
  authorImage,
  timestamp,
  content,
  imageUrl,
  likes: initialLikes,
  comments,
}: CommunityPostProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card data-testid={`post-${author.toLowerCase().replace(/\s/g, '-')}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Avatar>
              {authorImage && <AvatarImage src={authorImage} alt={author} />}
              <AvatarFallback>{getInitials(author)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{author}</p>
              <p className="text-sm text-muted-foreground">{timestamp}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Read aloud"
            data-testid="button-read-aloud"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-foreground leading-relaxed">{content}</p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Post content"
            className="w-full rounded-md object-cover max-h-96"
          />
        )}
      </CardContent>
      <CardFooter className="flex items-center gap-2 border-t pt-4">
        <Button
          variant="ghost"
          className={`gap-2 ${isLiked ? 'text-destructive' : ''}`}
          onClick={handleLike}
          data-testid="button-like"
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          {likes}
        </Button>
        <Button variant="ghost" className="gap-2" data-testid="button-comment">
          <MessageCircle className="h-4 w-4" />
          {comments}
        </Button>
        <Button variant="ghost" className="gap-2" data-testid="button-share">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
