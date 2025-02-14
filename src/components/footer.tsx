import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/ethsign" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
]

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <link.icon className="h-6 w-6" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Sign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

