import React, { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { DemoDialog } from "./DemoDialog"
import { cn } from "../lib/utils"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const TopMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/60 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src="/assets/images/slickshift-logo.svg" alt="Slickshift Logo" className="h-5" />
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Test Button</Button>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Rozwiązania</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem
                        title="Centralizacja komunikacji"
                        href="/centralizacja-komunikacji"
                      >
                        Wszystkie rozmowy między biurem a kierowcami w jednym miejscu.
                      </ListItem>
                      <ListItem
                        title="Kontrola nad opóźnieniami"
                        href="/kontrola-opoznien"
                      >
                        Monitoruj i zapobiegaj opóźnieniom w czasie rzeczywistym.
                      </ListItem>
                      <ListItem
                        title="Status floty w czasie rzeczywistym"
                        href="/status-floty"
                      >
                        Pełny podgląd na lokalizację i status każdego pojazdu.
                      </ListItem>
                      <ListItem
                        title="Automatyczne zarządzanie CMR"
                        href="/zarzadzanie-cmr"
                      >
                        Cyfrowe dokumenty CMR z automatycznym procesowaniem.
                      </ListItem>
                      <ListItem
                        title="Zarządzanie flotą"
                        href="/zarzadzanie-flota"
                      >
                        Kompleksowe narzędzia do zarządzania flotą pojazdów.
                      </ListItem>
                      <ListItem
                        title="Zarządzanie flotą z telefonu"
                        href="/aplikacja-mobilna"
                      >
                        Pełna kontrola nad flotą z poziomu aplikacji mobilnej.
                      </ListItem>
                      <ListItem
                        title="Komunikacja w różnych językach"
                        href="/komunikacja-wielojezyczna"
                      >
                        Automatyczne tłumaczenia dla międzynarodowych zespołów.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <DemoDialog />
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu 