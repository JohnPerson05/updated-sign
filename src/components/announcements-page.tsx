import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const announcements = [
  {
    title: "Lorem ipsum",
    date: "Lorem ipsum",
    content:
      "Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum ",
  },
  {
    title: "Lorem ipsum",
    date: "May 1, 2023",
    content:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
  },
  {
    title: "Lorem ipsum",
    date: "April 10, 2023",
    content:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
  },
  {
    title: "Lorem ipsum",
    date: "March 1, 2023",
    content:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem.",
  },
]

export function AnnouncementsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Announcements</h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {announcements.map((announcement, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{announcement.title}</CardTitle>
              <CardDescription>{announcement.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

