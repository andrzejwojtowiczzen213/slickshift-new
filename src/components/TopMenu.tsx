import React, { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DemoDialog } from "./DemoDialog"

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
      <NavigationMenu>
        <div className="container mx-auto px-4 py-4">
          <NavigationMenuList className="flex items-center justify-between">
            <NavigationMenuItem>
              <img src="/assets/images/slickshift-logo.svg" alt="Slickshift Logo" className="h-5" />
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex items-center gap-4">
              <DemoDialog />
            </NavigationMenuItem>
            <NavigationMenuItem className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  )
}

export default TopMenu 