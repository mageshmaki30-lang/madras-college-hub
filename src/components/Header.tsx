import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">MADRAS</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Engineering College</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg">
              <span className="text-primary-foreground text-sm font-semibold">TNEA Code</span>
              <span className="text-primary-foreground text-lg font-bold">1203</span>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">+91 70020 80020</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <Button variant="hero" size="sm" className="md:hidden">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
