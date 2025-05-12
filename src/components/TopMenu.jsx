import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoSvg from '../assets/images/slickshift-logo.svg';
import { DemoDialog } from "./DemoDialog";

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/60 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src={logoSvg} alt="SlickShift Logo" className="h-[28px]" />
          <div className="hidden md:flex items-center gap-6">
            <Button variant="outline">Rozwiązania</Button>
            <DemoDialog />
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
            <DemoDialog />
          </div>
        )}
      </nav>
    </div>
  );
};

export default TopMenu; 