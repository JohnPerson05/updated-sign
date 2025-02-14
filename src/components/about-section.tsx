import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#FFF5F0]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/signdad.jpg?height=600&width=600"
              alt="About Sign"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded bg-[#FF6B2B]/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-[#FF6B2B]">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Sign PH: Built with Trust and Confidence for a Digital World 🧡✨</h2>
            <p className="text-lg text-muted-foreground">
            We started Sign PH with a simple mission: to build a strong and connected community in the Philippines. A space where authenticity thrives, trust is the foundation, and confidence fuels every interaction.
            </p>

            <p className="text-lg text-muted-foreground">
            🚀 What Makes Sign PH Special?
           </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="rounded-full bg-[#FF6B2B]/10 p-1">
                  <svg
                    className="w-4 h-4 text-[#FF6B2B]"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>A safe space for real connections</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="rounded-full bg-[#FF6B2B]/10 p-1">
                  <svg
                    className="w-4 h-4 text-[#FF6B2B]"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>Empowering individuals to express themselves</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="rounded-full bg-[#FF6B2B]/10 p-1">
                  <svg
                    className="w-4 h-4 text-[#FF6B2B]"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>A growing movement built on trust and positivity</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground">
            Join the revolution. Sign is more than just a platform—it’s a community. Welcome to the future of digital connection. 🧡 #SignPH #BuiltOnTrust
           </p>
            <Button className="bg-[#FF6B2B] hover:bg-[#FF6B2B]/90" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

