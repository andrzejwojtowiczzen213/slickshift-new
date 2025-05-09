import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";

const TopMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavigationMenu className="w-full border-b">
      <div className="flex h-16 items-center justify-between px-6 md:px-[200px]">
        {/* Logo */}
        <div className="text-xl font-bold">
          SlickShift
        </div>

        {/* Desktop Navigation */}
        <NavigationMenuList className="hidden md:flex items-center">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              href="/demo"
            >
              Umów demo
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 space-y-3">
          <a
            href="/demo"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          >
            Umów demo
          </a>
        </div>
      )}
    </NavigationMenu>
  );
};

export default TopMenu; 