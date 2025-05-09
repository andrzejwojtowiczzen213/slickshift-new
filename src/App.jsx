import React from 'react'
import { Button } from "./components/ui/button"
import TopMenu from './components/TopMenu'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopMenu />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to SlickShift</h1>
        <p className="text-lg text-muted-foreground">
          A modern and beautiful UI component library for your next project.
        </p>
      </main>
    </div>
  )
}

export default App
