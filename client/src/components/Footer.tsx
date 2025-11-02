import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";

export default function Footer() {
  const footerLinks = {
    platform: [
      { label: "Directory", path: "/directory" },
      { label: "Marketplace", path: "/marketplace" },
      { label: "Community", path: "/community" },
      { label: "Learn", path: "/learn" },
    ],
    support: [
      { label: "NGO Partners", path: "/ngo-support" },
      { label: "Crowdfunding", path: "/crowdfunding" },
      { label: "Volunteer", path: "/volunteer" },
      { label: "Donate", path: "/donate" },
    ],
    resources: [
      { label: "Accessibility Guide", path: "/guide" },
      { label: "Help Center", path: "/help" },
      { label: "API Documentation", path: "/api" },
      { label: "Contact Us", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "https://facebook.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Youtube, label: "YouTube", url: "https://youtube.com" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">IH</span>
              </div>
              <span className="font-semibold text-lg">InclusiveHub</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering accessibility through AI-powered technology for everyone.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:contact@inclusivehub.org" className="hover:text-primary">
                  contact@inclusivehub.org
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+15551234567" className="hover:text-primary">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-sm text-muted-foreground hover:text-primary" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-sm text-muted-foreground hover:text-primary" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-sm text-muted-foreground hover:text-primary" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 InclusiveHub. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                asChild
                aria-label="WhatsApp"
                data-testid="social-whatsapp"
              >
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                aria-label="Telegram"
                data-testid="social-telegram"
              >
                <a href="https://t.me/inclusivehub" target="_blank" rel="noopener noreferrer">
                  <SiTelegram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
