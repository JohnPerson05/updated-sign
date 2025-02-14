"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type React from "react"

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    router.push(href)
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}

