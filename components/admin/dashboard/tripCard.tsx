import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Trip {
  id: number
  title: string
  location: string
  price: number
  imageUrl: string
  tags: string[]
}

interface TripCardProps {
  trip: Trip
}

export default function TripCard({ trip }: TripCardProps) {
  const getBadgeColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      Mountains: "bg-green-100 text-green-800",
      City: "bg-purple-100 text-purple-800",
      "Solo travel": "bg-blue-100 text-blue-800",
      Budget: "bg-gray-100 text-gray-800",
      Luxury: "bg-pink-100 text-pink-800",
      Beach: "bg-cyan-100 text-cyan-800",
      Sports: "bg-orange-100 text-orange-800",
      Adventurous: "bg-yellow-100 text-yellow-800",
    }
    return colors[tag] || "bg-gray-100 text-gray-800"
  }

  return (
    <Card className="p-0 rounded-2xl overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-36">
        <Image
          src={trip.imageUrl}
          alt={trip.title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-white text-black border-transparent">
          ${trip.price}
        </Badge>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div>
          <h1
            className="font-semibold text-base mb-1 truncate"
            title={trip.title}
          >
            {trip.title}
          </h1>
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Image
              src="/assets/icons/location-mark.svg"
              alt="location"
              width={16}
              height={16}
              className="mr-1"
            />
            <span>{trip.location}</span>
          </div>
        </div>
        <div className="flex-grow" />
        <div className="flex flex-wrap gap-2">
          {trip.tags.map((tag) => (
            <Badge key={tag} className={getBadgeColor(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
