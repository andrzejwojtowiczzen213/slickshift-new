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
      <div className="flex h-16 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          SlickShift
        </div>

        {/* Desktop Navigation */}
        <NavigationMenuList className="hidden md:flex items-center space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              href="/"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        SlickShift
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautiful and modern UI components for your next project.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/dashboard"
                    >
                      <div className="text-sm font-medium leading-none">Dashboard</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        View your analytics and statistics
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/settings"
                    >
                      <div className="text-sm font-medium leading-none">Settings</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Configure your application preferences
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              href="/about"
            >
              About
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
            href="/"
            className="block px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
          >
            Home
          </a>
          <div className="px-6 py-3">
            <div className="text-sm font-medium mb-3">Features</div>
            <div className="pl-4 space-y-3">
              <a
                href="/dashboard"
                className="block text-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2"
              >
                Dashboard
              </a>
              <a
                href="/settings"
                className="block text-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2"
              >
                Settings
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="block px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
          >
            About
          </a>
        </div>
      )}
    </NavigationMenu>
  );
};

export default TopMenu; 