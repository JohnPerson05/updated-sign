"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-[#FFF5F0]">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 space-x-4">
          <span>Sign</span>
          <span role="img" aria-label="eyes">
            👀
          </span>
          <span role="img" aria-label="heart" className="text-primary">
            ❤️
          </span>
          <span role="img" aria-label="lizard">
            🦎
          </span>
          <span role="img" aria-label="|">
            |
          </span>
          <span>Not Official</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Built with Confidence 🏗️</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Home of the Orange Dynasty 🧡🚀 A community where trust, connection, and greatness thrive!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="btn-primary">
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-secondary" 
            onClick={() => window.open("https://sign.global/", "_blank")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
