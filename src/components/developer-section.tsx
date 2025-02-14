import { Code, Webhook, Database, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "RESTful API",
    description: "Integrate Sign into your applications with our comprehensive API",
    icon: Code,
  },
  {
    title: "Webhooks",
    description: "Get real-time updates on document statuses and user actions",
    icon: Webhook,
  },
  {
    title: "SDKs & Libraries",
    description: "Official SDKs for popular programming languages and frameworks",
    icon: Database,
  },
  {
    title: "Secure Authentication",
    description: "OAuth 2.0 and API key authentication for secure access",
    icon: Lock,
  },
]

export function DeveloperSection() {
  return (
    <section id="developers" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Built for Developers</h2>
          <p className="section-description">Powerful tools and resources to integrate Sign into your applications</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
        <div className="text-center">
          <Button className="bg-[#FF6B2B] hover:bg-[#FF6B2B]/90" size="lg">
            Explore Developer Docs
          </Button>
        </div>
      </div>
    </section>
  )
}

