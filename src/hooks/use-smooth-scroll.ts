"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute("href")

      if (href === "/") {
        e.preventDefault()
        // Scroll to the top smoothly when clicking Home
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      } else if (href && href.startsWith("#")) {
        // Handle smooth scrolling to section
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll as EventListener)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll as EventListener)
      })
    }
  }, [])
}

