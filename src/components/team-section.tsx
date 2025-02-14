import Image from "next/image"

const teamMembers = [
  {
    name: "Sign Intern",
    role: "The Best Intern of Sign",
    image: "/images/signslo.jpg?height=400&width=400",
    description: "The hardworking and dedicated force behind the scenes, supporting the growth and innovation of Sign with fresh ideas and creativity.",
  },
  {
    name: "General LJ",
    role: "General MOD – The 1st Member of Sign",
    image: "/images/general.jpg?height=400&width=400",
    description: "A true pioneer and pillar of the Sign community, helping shape its foundation with leadership, passion, and commitment.",
  },
  {
    name: "Zoe Chan",
    role: "The Cutest MOD of Sign",
    image: "/images/cutezoe.jpg?height=400&width=400",
    description: "Spreading positivity and good vibes, Zoe brings a fun and welcoming energy to the community, making Sign feel like home.",
  },
  {
    name: "Xin (Shin) Yan",
    role: "CEO & Creator of Sign",
    image: "/images/daddy.jpg?height=400&width=400",
    description: "The visionary behind Sign, leading the community with innovation, trust, and confidence in the digital world.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-[#fdfdfd]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Mods</h2>
          <p className="section-description">The talented developers and designers behind Sign</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-[#FF6B2B] font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

