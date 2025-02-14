import { Fingerprint, Shield, Zap, Clock, CheckCircle, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Lorem ipsum" ,
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: Shield,
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    icon: Zap,
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: Fingerprint,
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: Clock,
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    icon: CheckCircle,
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    icon: Lock,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Signee</h2>
          <p className="section-description">Everything you need is SIGN</p>
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

