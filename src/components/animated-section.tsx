"use client"

import { useEffect, useRef } from "react"
import type React from "react" // Added import for React

interface AnimatedSectionProps {
  children: React.ReactNode
}

export function AnimatedSection({ children }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className="opacity-0">
      {children}
    </div>
  )
}

