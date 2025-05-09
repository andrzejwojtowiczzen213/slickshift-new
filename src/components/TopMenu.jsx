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
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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
            className="block px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-center"
          >
            Umów demo
          </a>
        </div>
      )}
    </NavigationMenu>
  );
};

export default TopMenu; 