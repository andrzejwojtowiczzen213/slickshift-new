import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

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
            <Button asChild>
              <a href="/demo">Umów demo</a>
            </Button>
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
          <Button asChild className="w-full">
            <a href="/demo">Umów demo</a>
          </Button>
        </div>
      )}
    </NavigationMenu>
  );
};

export default TopMenu; 