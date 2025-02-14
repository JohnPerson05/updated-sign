import { Users, MessageSquare, Share2, Trophy, Heart, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Global Connections",
    description: "Join thousands of users worldwide sharing knowledge and experiences in digital document signing",
    icon: Globe,
  },
  {
    title: "Discussion Forums",
    description: "Join a diverse community of people who share ideas, experiences, and passions",
    icon: MessageSquare,
  },
  {
    title: "Collaboration & Friendship",
    description: "Create or join specialized groups based on your industry, role, or interests",
    icon: Users,
  },
  {
    title: "Resource Sharing",
    description: "Exchange knowledge, tips, and resources to help each other learn and grow",
    icon: Share2,
  },
  {
    title: "Recognition Program",
    description: "Celebrate contributions, earn recognition, and be part of something bigger",
    icon: Trophy,
  },
  {
    title: " Community-Driven Support",
    description: "Get advice, share insights, and be there for one another.",
    icon: Heart,
  },
]

export function FeaturesSection() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Join Our Community</h2>
          <p className="section-description">
            Connect, collaborate, and grow with thousands of professionals in our global signing community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

