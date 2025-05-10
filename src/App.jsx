import React, { useState } from 'react'
import { Button } from "./components/ui/button"
import { Textarea } from "./components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Badge } from "./components/ui/badge"
import TopMenu from './components/TopMenu'
import { Send, Star, Eye, Route, Package, Activity } from 'lucide-react'
import TollIcon from '@mui/icons-material/Toll'
import nadzorTrasImage from './assets/images/Nadzór tras.png'

function App() {
  const [message, setMessage] = useState('Którzy kierowcy są obecnie na trasie?')
  const [activeTab, setActiveTab] = useState('ai')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle message submission here
    console.log('Message:', message)
    setMessage('')
  }

  return (
    <div className="relative min-h-screen">
      {/* Background with grain */}
      <div className="fixed inset-0 bg-gradient-to-b from-orange-50/80 via-amber-50/80 to-purple-50/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjM1Ii8+PC9zdmc+')] opacity-100"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <TopMenu />
        <main className="container mx-auto px-4 py-8">
          <div className="pt-[96px] text-center">
            <h1 className="font-satoshi font-semibold text-[48px] text-black whitespace-nowrap mb-3">
              Narzędzie dla spedytorów i dyspozytorów
            </h1>
            <p className="font-satoshi font-medium text-[20px] text-black whitespace-nowrap mb-8">
              Automatyzuj nadzór nad transportem i zmniejsz koszty operacyjne dzięki sztucznej inteligencji.
            </p>
            
            <div className="flex justify-center mb-12">
              <Tabs defaultValue="ai" className="inline-flex" onValueChange={setActiveTab}>
                <TabsList className="flex justify-between p-1 h-12 bg-transparent gap-4">
                  <TabsTrigger value="ai" className="flex items-center gap-2 whitespace-nowrap h-10 text-muted-foreground data-[state=active]:text-foreground">
                    <span className="material-symbols-outlined text-[20px]">stars_2</span>
                    Asystent AI
                  </TabsTrigger>
                  <TabsTrigger value="monitoring" className="flex items-center gap-2 whitespace-nowrap h-10 text-muted-foreground data-[state=active]:text-foreground">
                    <span className="material-symbols-outlined text-[20px]">conversion_path</span>
                    Nadzór trasy
                  </TabsTrigger>
                  <TabsTrigger value="routes" className="flex items-center gap-2 whitespace-nowrap h-10 text-muted-foreground data-[state=active]:text-foreground">
                    <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    Status floty
                  </TabsTrigger>
                  <TabsTrigger value="deliveries" className="flex items-center gap-2 whitespace-nowrap h-10 text-muted-foreground data-[state=active]:text-foreground">
                    <span className="material-symbols-outlined text-[20px]">forum</span>
                    Centralizacja komunikacji
                  </TabsTrigger>
                  <TabsTrigger value="status" className="flex items-center gap-2 whitespace-nowrap h-10 text-muted-foreground data-[state=active]:text-foreground">
                    <span className="material-symbols-outlined text-[20px]">description</span>
                    Zarządzanie CMR
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {activeTab === 'monitoring' ? (
              <div className="max-w-2xl mx-auto mt-8">
                <img src={nadzorTrasImage} alt="Nadzór tras" className="w-full rounded-lg" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
                <div className="relative">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 text-base min-h-[120px] resize-none pr-32"
                  />
                  <div className="absolute bottom-2 right-2">
                    <Button type="submit" className="h-8 px-3 text-sm gap-2">
                      Zapytaj asystenta
                      <span className="material-symbols-outlined text-[16px]">stars_2</span>
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {activeTab === 'ai' && (
              <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-2 mt-4">
                <Badge 
                  variant="outline" 
                  className="h-6 px-3 text-xs font-normal not-italic cursor-pointer hover:bg-secondary"
                  onClick={() => setMessage('Opłaty drogowe na trasie Kraków - Wiedeń')}
                >
                  <span className="italic">Opłaty drogowe na trasie...</span>
                </Badge>
                <Badge 
                  variant="outline" 
                  className="h-6 px-3 text-xs font-normal not-italic cursor-pointer hover:bg-secondary"
                  onClick={() => setMessage('Pokaż dokumenty transportowe z poprzedniego tygodnia')}
                >
                  <span className="italic">Pokaż dokumenty transportowe...</span>
                </Badge>
                <Badge 
                  variant="outline" 
                  className="h-6 px-3 text-xs font-normal not-italic cursor-pointer hover:bg-secondary"
                  onClick={() => setMessage('Zrób podsumowanie tankowań z tego miesiąca')}
                >
                  <span className="italic">Zrób podsumowanie tankowań...</span>
                </Badge>
                <Badge 
                  variant="outline" 
                  className="h-6 px-3 text-xs font-normal not-italic cursor-pointer hover:bg-secondary"
                  onClick={() => setMessage('Sprawdź status dostawy...')}
                >
                  <span className="italic">Sprawdź status dostawy...</span>
                </Badge>
                <Badge 
                  variant="outline" 
                  className="h-6 px-3 text-xs font-normal not-italic cursor-pointer hover:bg-secondary"
                  onClick={() => setMessage('Pokaż harmonogram kierowców...')}
                >
                  <span className="italic">Pokaż harmonogram kierowców...</span>
                </Badge>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
