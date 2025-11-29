import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const NavLinks = () => (
    <>
      <button
        onClick={() => scrollToSection("samaritan-laws")}
        className="text-foreground/80 hover:text-foreground transition-colors"
      >
        Samaritan Laws
      </button>
      <button
        onClick={() => scrollToSection("emergency-numbers")}
        className="text-foreground/80 hover:text-foreground transition-colors"
      >
        Emergency Numbers
      </button>
      <button
        onClick={() => scrollToSection("training")}
        className="text-foreground/80 hover:text-foreground transition-colors"
      >
        Training
      </button>
      <button
        onClick={() => scrollToSection("take-action")}
        className="text-foreground/80 hover:text-foreground transition-colors"
      >
        Take Action
      </button>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emergency to-trust text-emergency-foreground font-bold text-xl">
            SOS
          </div>
          <span className="font-bold text-xl">Unify SOS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
