import React, { useState, useRef, useEffect } from 'react'
import { Button } from "./components/ui/button"
import { Textarea } from "./components/ui/textarea"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
import { Badge } from "./components/ui/badge"
import { Skeleton } from "./components/ui/skeleton"
import TopMenu from './components/TopMenu'
import { Send, Star, Eye, Route, Package, Activity } from 'lucide-react'
import TollIcon from '@mui/icons-material/Toll'
import nadzorTrasImage from './assets/images/Nadzór tras.png'
import centralizacjaKomunikacjiImage from './assets/images/Centralizacja komunikacji.png'
import logoSvg from './assets/images/slickshift logo.svg'
import blackOrangeLogo from './assets/images/Black-Orange.png'
import kaemTransportLogo from './assets/images/KAEM Transport.png'
import recommendation1Image from './assets/images/Recommendation1.png'
import recommendation2Image from './assets/images/Recommendation2.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"
import spedytorImage from './assets/images/Spedytor.png'
import kierowcaImage from './assets/images/kierowca.png'
import cmr1Image from './assets/images/CMR1.jpg'
import cmr2Image from './assets/images/CMR2.jpg'
import cmr3Image from './assets/images/CMR3.jpg'
import cmr4Image from './assets/images/CMR4.jpg'
import cmr5Image from './assets/images/CMR5.jpg'

function App() {
  const [message, setMessage] = useState('Którzy kierowcy są obecnie na trasie?')
  const [activeTab, setActiveTab] = useState('ai')
  const [isLoading, setIsLoading] = useState(true)
  const textareaRef = useRef(null)

  // Focus textarea when Asystent AI tab is active
  useEffect(() => {
    if (activeTab === 'ai' && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [activeTab])

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle message submission here
    console.log('Message:', message)
    setMessage('')
  }

  const FleetCardSkeleton = () => (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="mb-4 flex justify-between items-center">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center mt-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-2 w-full mt-6" />
      </div>
    </div>
  )

  const CarouselItemSkeleton = () => (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex gap-6">
        <Skeleton className="h-20 w-20 rounded-lg" />
        <div className="flex flex-col h-full flex-1">
          <Skeleton className="h-20 w-full mb-2" />
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-5 w-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-purple-50/40 via-purple-100/40 to-purple-50/40 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjM1Ii8+PC9zdmc+')] opacity-100 pointer-events-none z-0"></div>
        <img
          src={spedytorImage}
          alt=""
          className="hidden"
          style={{ opacity: 0.95 }}
        />
        <img
          src={kierowcaImage}
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
                <div className="max-w-[800px] mx-auto mt-16 h-[420px]">
                  <img src={nadzorTrasImage} alt="Nadzór tras" className="w-full rounded-lg h-full object-cover" />
                </div>
              ) : activeTab === 'routes' ? (
                <div className="max-w-[800px] mx-auto mt-16 h-[420px] overflow-y-auto">
                  <div className="grid grid-cols-3 gap-4">
                    {isLoading ? (
                      <>
                        <FleetCardSkeleton />
                        <FleetCardSkeleton />
                        <FleetCardSkeleton />
                        <FleetCardSkeleton />
                        <FleetCardSkeleton />
                        <FleetCardSkeleton />
                      </>
                    ) : (
                      <>
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-black" style={{ borderWidth: '0.8px' }}>
                          <div className="mb-4 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Jan Kowalski</h3>
                            <span className="text-sm font-medium text-green-700">Na trasie</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm text-gray-600">Cel</span>
                              <span className="text-sm font-medium">Bydgoszcz</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Przyjazd</span>
                              <span className="text-sm font-medium">9 Maj 12:45</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Pozostało</span>
                              <span className="text-sm font-medium">100 km (20%)</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2" style={{ marginTop: '26px' }}>
                              <div className="bg-green-700 h-2 rounded-full" style={{ width: '20%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-4 border border-black" style={{ borderWidth: '0.8px' }}>
                          <div className="mb-4 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Piotr Nowak</h3>
                            <span className="text-sm font-medium text-green-700">Na trasie</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm text-gray-600">Cel</span>
                              <span className="text-sm font-medium">Warszawa</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Przyjazd</span>
                              <span className="text-sm font-medium">9 Maj 15:30</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Pozostało</span>
                              <span className="text-sm font-medium">320 km (55%)</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2" style={{ marginTop: '26px' }}>
                              <div className="bg-green-700 h-2 rounded-full" style={{ width: '55%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-4 border border-black" style={{ borderWidth: '0.8px' }}>
                          <div className="mb-4 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Maciej Zieliński</h3>
                            <span className="text-sm font-medium text-green-700">Na trasie</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm text-gray-600">Cel</span>
                              <span className="text-sm font-medium">Poznań</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Przyjazd</span>
                              <span className="text-sm font-medium">9 Maj 18:15</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Pozostało</span>
                              <span className="text-sm font-medium">420 km (70%)</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2" style={{ marginTop: '26px' }}>
                              <div className="bg-green-700 h-2 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col h-full border border-black" style={{ borderWidth: '0.8px' }}>
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-left">Marek Dąbek</h3>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Lokalizacja</span>
                              <span className="text-sm font-medium">Gdańsk</span>
                            </div>
                          </div>
                          <div className="mt-auto pt-12">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gray-300 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-4 border border-black" style={{ borderWidth: '0.8px' }}>
                          <div className="mb-4 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Tomasz Soboń</h3>
                            <span className="text-sm font-medium text-green-700">Na trasie</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm text-gray-600">Cel</span>
                              <span className="text-sm font-medium">Drezno</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Przyjazd</span>
                              <span className="text-sm font-medium">9 Maj 22:15</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Pozostało</span>
                              <span className="text-sm font-medium">150 km (55%)</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2" style={{ marginTop: '26px' }}>
                              <div className="bg-green-700 h-2 rounded-full" style={{ width: '55%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-4 border border-black" style={{ borderWidth: '0.8px' }}>
                          <div className="mb-4 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Karol Osiak</h3>
                            <span className="text-sm font-medium text-red-700">Poza trasą</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm text-gray-600">Cel</span>
                              <span className="text-sm font-medium">Bratysława</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Przyjazd</span>
                              <span className="text-sm font-medium">10 Maj 01:30</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Pozostało</span>
                              <span className="text-sm font-medium">280 km (40%)</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2" style={{ marginTop: '26px' }}>
                              <div className="bg-red-700 h-2 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : activeTab === 'deliveries' ? (
                <div className="max-w-[800px] mx-auto mt-16 h-[420px]">
                  <img src={centralizacjaKomunikacjiImage} alt="Centralizacja komunikacji" className="w-full rounded-lg h-full object-cover" />
                </div>
              ) : activeTab === 'status' ? (
                <div className="max-w-[800px] mx-auto mt-16 h-[420px] overflow-auto">
                  <div className="overflow-hidden rounded-[12px] border border-black" style={{ borderWidth: '0.8px' }}>
                    <table className="w-full border-collapse bg-white">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Kierowca</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Pojazd</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Lokalizacja</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Data</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">CMR</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Dokument</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Feliks Solovev</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">GPS1</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">IV Obwodnica, Kryspinów, Powiat krakowski, Polska, 32-060</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">09.05.2025 10:51</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Tak</td>
                          <td className="px-4 py-3 text-left">
                            <img src={cmr1Image} alt="CMR Document" className="h-8 w-6 object-cover rounded" />
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Feliks Solovev</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">GPS1</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">IV Obwodnica, Kryspinów, Powiat krakowski, Polska, 32-060</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">07.05.2025 14:39</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Tak</td>
                          <td className="px-4 py-3 text-left">
                            <img src={cmr2Image} alt="CMR Document" className="h-8 w-6 object-cover rounded" />
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Marek Nowak</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">GPS3</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Aleja Pokoju 18, Kraków, Polska, 31-564</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">07.05.2025 12:15</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Tak</td>
                          <td className="px-4 py-3 text-left">
                            <img src={cmr3Image} alt="CMR Document" className="h-8 w-6 object-cover rounded" />
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Jan Kowalski</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">GPS2</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Zakopiańska 244, Kraków, Polska, 30-435</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">07.05.2025 09:30</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Tak</td>
                          <td className="px-4 py-3 text-left">
                            <img src={cmr4Image} alt="CMR Document" className="h-8 w-6 object-cover rounded" />
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Piotr Zieliński</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">GPS4</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Wielicka 28B, Kraków, Polska, 30-552</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">07.05.2025 08:45</td>
                          <td className="px-4 py-3 text-sm text-left text-gray-900">Tak</td>
                          <td className="px-4 py-3 text-left">
                            <img src={cmr5Image} alt="CMR Document" className="h-8 w-6 object-cover rounded" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="max-w-[800px] mx-auto mt-16 h-[420px]">
                  <form onSubmit={handleSubmit} className="h-full flex flex-col">
                    <div className="relative">
                      <Textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 min-h-[240px] resize-none pr-12"
                      />
                      <div className="absolute bottom-4 right-4">
                        <Button type="submit" size="sm" className="gap-2">
                          Zapytaj asystenta
                          <span className="material-symbols-outlined text-[16px]">stars_2</span>
                        </Button>
                      </div>
                    </div>

                    {activeTab === 'ai' && (
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <Badge 
                          variant="outline" 
                          className="cursor-pointer hover:bg-secondary"
                          onClick={() => setMessage('Opłaty drogowe na trasie Kraków - Wiedeń')}
                        >
                          Opłaty drogowe na trasie...
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className="cursor-pointer hover:bg-secondary"
                          onClick={() => setMessage('Pokaż dokumenty transportowe z poprzedniego tygodnia')}
                        >
                          Pokaż dokumenty transportowe...
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className="cursor-pointer hover:bg-secondary"
                          onClick={() => setMessage('Zrób podsumowanie tankowań z tego miesiąca')}
                        >
                          Zrób podsumowanie tankowań...
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className="cursor-pointer hover:bg-secondary"
                          onClick={() => setMessage('Sprawdź status dostawy...')}
                        >
                          Sprawdź status dostawy...
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className="cursor-pointer hover:bg-secondary"
                          onClick={() => setMessage('Pokaż harmonogram kierowców...')}
                        >
                          Pokaż harmonogram kierowców...
                        </Badge>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </main>

          <div className="max-w-[800px] mx-auto mt-16 mb-32">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold">Realne wyniki, konkretne oszczędności</h2>
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {isLoading ? (
                  <>
                    <CarouselItem>
                      <CarouselItemSkeleton />
                    </CarouselItem>
                    <CarouselItem>
                      <CarouselItemSkeleton />
                    </CarouselItem>
                  </>
                ) : (
                  <>
                    <CarouselItem>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex gap-6">
                          <img src={recommendation1Image} alt="Recommendation" className="h-20 w-20 object-cover rounded-lg" />
                          <div className="flex flex-col h-full">
                            <p className="text-base text-gray-600 mb-2 italic">Asystent Slick odciąża nasz zespół – automatyzuje śledzenie tras i porządkuje komunikację. Ogromne ułatwienie na co dzień!</p>
                            <div className="mt-auto">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium">Janek Piątkowski</p>
                                  <p className="text-sm text-gray-500">Spedytor</p>
                                </div>
                                <img src={blackOrangeLogo} alt="Black-Orange Logo" className="h-5 mt-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex gap-6">
                          <img src={recommendation2Image} alt="Recommendation" className="h-20 w-20 object-cover rounded-lg" />
                          <div className="flex flex-col h-full">
                            <p className="text-base text-gray-600 mb-2 italic">Skupienie rozmów, map i nadzoru nad wykonaniem trasy dzięki asystentowi Slick jest największą wartością.</p>
                            <div className="mt-auto">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium">Michał Konpka</p>
                                  <p className="text-sm text-gray-500">Kierownik firmy transportowej</p>
                                </div>
                                <img src={kaemTransportLogo} alt="KAEM Transport Logo" className="h-5 mt-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="max-w-[800px] mx-auto mt-16 mb-32">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold">Najczęściej zadawane pytania</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Jak działa centralizacja komunikacji w Slickshift?</AccordionTrigger>
                <AccordionContent>
                  Centralizacja komunikacji pozwala prowadzić wszystkie rozmowy między biurem a kierowcami w jednym miejscu. Dzięki temu zmniejsza się chaos informacyjny, a decyzje są podejmowane szybciej.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Czy asystent monitoruje flotę w czasie rzeczywistym?</AccordionTrigger>
                <AccordionContent>
                  Tak, asystent Slickshift monitoruje flotę na żywo, dostarczając kluczowe informacje i wspierając szybką reakcję na zmiany oraz nieprzewidziane sytuacje.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Na czym polega zarządzanie dokumentami?</AccordionTrigger>
                <AccordionContent>
                  Asystent automatycznie porządkuje dokumenty transportowe, takie jak CMR i inne dokumenty przewozowe, udostępniając je każdemu w firmie w łatwy i szybki sposób. Możesz także wyszukiwać dokumenty po kodzie pocztowym.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Jak działają tłumaczenia wiadomości?</AccordionTrigger>
                <AccordionContent>
                  Asystent automatycznie tłumaczy wiadomości kierowców na język polski, dzięki czemu cały zespół może działać bez barier językowych.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Jak wygląda wdrożenie?</AccordionTrigger>
                <AccordionContent>
                  Wdrożenie Slickshift trwa tylko 40 minut. Całe biuro zostaje dodane do systemu, a kierowcy nie muszą zmieniać swoich przyzwyczajeń – nadal mogą korzystać z WhatsAppa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <footer className="w-full border-t border-200 mt-16 py-8 bg-transparent">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={logoSvg} alt="Slickshift Logo" className="h-5 mr-4" />
            <div className="text-xs text-gray-500 text-center md:text-right">
              Kontakt: <a href="mailto:alex@slickshift.ai" className="underline">alex@slickshift.ai</a>
              <br />
              &copy; {new Date().getFullYear()} Slickshift. Wszelkie prawa zastrzeżone.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
