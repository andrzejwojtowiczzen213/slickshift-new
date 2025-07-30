import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { DemoDialog } from "./DemoDialog";
import { cn } from "../lib/utils";

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <h3 className="mb-1 text-base font-medium leading-none">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

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
          ? 'backdrop-blur-md border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src="assets/images/slickshift-logo.svg" alt="SlickShift Logo" className="h-[28px]" />
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger variant="outline">Rozwiązania</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem
                        title="Nadzór trasy"
                        href="/nadzor-trasy"
                      >
                        Monitorowanie i optymalizacja tras w czasie rzeczywistym.
                      </ListItem>
                      <ListItem
                        title="Status floty"
                        href="/status-floty"
                      >
                        Pełny podgląd na lokalizację i status każdego pojazdu.
                      </ListItem>
                      <ListItem
                        title="Centralizacja komunikacji"
                        href="/centralizacja-komunikacji"
                      >
                        Wszystkie rozmowy między biurem a kierowcami w jednym miejscu.
                      </ListItem>
                      <ListItem
                        title="Zarządzanie CMR"
                        href="/zarzadzanie-cmr"
                      >
                        Cyfrowe dokumenty CMR z automatycznym procesowaniem.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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