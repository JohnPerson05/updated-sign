"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function SiteHeader() {
  useSmoothScroll()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
      <Link href="/" >
      <div className="flex items-center gap-2">
          <Image src="/images/signslo.jpg" alt="Sign Logo" width={40} height={40} className="rounded" />
          <span className="text-xl font-semibold">Sign</span>
        </div>
          </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="#community" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Community
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="#team" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Team
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            FAQ
          </Link>
        </nav>
        <Button className="bg-[#FF6B2B] hover:bg-[#FF6B2B]/90">Get Started</Button>
      </div>
    </header>
  )
}

