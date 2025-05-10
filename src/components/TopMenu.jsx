import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoSvg from '../assets/images/slickshift logo.svg';

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src={logoSvg} alt="SlickShift Logo" className="h-[28px]" />
          <div className="hidden md:flex items-center gap-6">
            <Button variant="outline">Rozwiązania</Button>
            <Button>Umów demo</Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Button variant="outline" className="w-full">Rozwiązania</Button>
            <Button className="w-full">Umów demo</Button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default TopMenu; 