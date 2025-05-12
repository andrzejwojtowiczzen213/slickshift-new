import React, { useState, useRef, useEffect } from 'react'
import { Button } from "./components/ui/button"
import { Textarea } from "./components/ui/textarea"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
import { Badge } from "./components/ui/badge"
import TopMenu from './components/TopMenu'
import { Send, Star, Eye, Route, Package, Activity } from 'lucide-react'
import TollIcon from '@mui/icons-material/Toll'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"

interface Images {
  nadzorTras: string;
  centralizacjaKomunikacji: string;
  logo: string;
  blackOrange: string;
  kaemTransport: string;
  recommendation1: string;
  recommendation2: string;
  spedytor: string;
  kierowca: string;
  cmr1: string;
  cmr2: string;
  cmr3: string;
  cmr4: string;
  cmr5: string;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Którzy kierowcy są obecnie na trasie?')
  const [activeTab, setActiveTab] = useState<string>('ai')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Images
  const images: Images = {
    nadzorTras: '/assets/images/nadzor-tras.png',
    centralizacjaKomunikacji: '/assets/images/centralizacja-komunikacji.png',
    logo: '/assets/images/slickshift-logo.svg',
    blackOrange: '/assets/images/black-orange.png',
    kaemTransport: '/assets/images/kaem-transport.png',
    recommendation1: '/assets/images/recommendation1.png',
    recommendation2: '/assets/images/recommendation2.png',
    spedytor: '/assets/images/spedytor.png',
    kierowca: '/assets/images/kierowca.png',
    cmr1: '/assets/images/CMR1.jpg',
    cmr2: '/assets/images/CMR2.jpg',
    cmr3: '/assets/images/CMR3.jpg',
    cmr4: '/assets/images/CMR4.jpg',
    cmr5: '/assets/images/CMR5.jpg'
  }

  // Focus textarea when Asystent AI tab is active
  useEffect(() => {
    if (activeTab === 'ai' && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [activeTab])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission here
    console.log('Message:', message)
    setMessage('')
  }

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-purple-50/40 via-purple-100/40 to-purple-50/40 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjM1Ii8+PC9zdmc+')] opacity-100 pointer-events-none z-0"></div>
        <img
          src={images.spedytor}
          alt=""
          className="hidden"
          style={{ opacity: 0.95 }}
        />
        <img
          src={images.kierowca}
          alt=""
          className="hidden"
          style={{ opacity: 0.95 }}
        />
        <div className="relative z-10">
          <TopMenu />
          <main className="container mx-auto px-4 py-8 pt-24">
            <div className="pt-[96px] text-center">
              <h1 className="font-satoshi font-semibold text-[48px] text-black whitespace-nowrap mb-3">
                Narzędzie dla spedytorów i dyspozytorów
              </h1>
              <p className="font-satoshi font-medium text-[20px] text-black whitespace-nowrap mb-8">
                Automatyzuj nadzór nad transportem i zmniejsz koszty operacyjne dzięki sztucznej inteligencji.
              </p>
              
              <div className="flex justify-center mb-12">
                <Tabs defaultValue="ai" className="w-auto" onValueChange={setActiveTab}>
                  <TabsList className="gap-2">
                    <TabsTrigger value="ai">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">stars_2</span>
                        Asystent AI
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="monitoring">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">conversion_path</span>
                        Nadzór trasy
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="routes">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                        Status floty
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="deliveries">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">forum</span>
                        Centralizacja komunikacji
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="status">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">description</span>
                        Zarządzanie CMR
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              {activeTab === 'monitoring' && (
                <div className="max-w-[800px] mx-auto mt-16 h-[420px]">
                  <img src={images.nadzorTras} alt="Nadzór tras" className="w-full rounded-lg h-full object-cover" />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App 