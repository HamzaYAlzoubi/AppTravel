import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

type cardDataType = {
  cardData: {
    totalUsers: {
      theTotal: number
      lastMonth: number
    }
    totalTrips: {
      theTotal: number
      lastMonth: number
    }
    activeUsersToday: {
      theTotal: number
      lastMonth: number
    }
  }
}

export default function DataCard({ cardData }: cardDataType) {
  const calculateGrowth = (current: number, previous: number): number => {
    if (previous === 0) return 0
    return ((current - previous) / previous) * 100
  }

  const updatedData = {
    totalUsers: {
      ...cardData.totalUsers,
      theGrow: calculateGrowth(
        cardData.totalUsers.theTotal,
        cardData.totalUsers.lastMonth
      ),
    },
    totalTrips: {
      ...cardData.totalTrips,
      theGrow: calculateGrowth(
        cardData.totalTrips.theTotal,
        cardData.totalTrips.lastMonth
      ),
    },
    activeUsersToday: {
      ...cardData.activeUsersToday,
      theGrow: calculateGrowth(
        cardData.activeUsersToday.theTotal,
        cardData.activeUsersToday.lastMonth
      ),
    },
  }

  const cards = [
    {
      title: "Total Users",
      data: updatedData.totalUsers,
      colSpan: "",
    },
    {
      title: "Total Trips",
      data: updatedData.totalTrips,
      colSpan: "",
    },
    {
      title: "Active Users Today",
      data: updatedData.activeUsersToday,
      colSpan: "sm:col-span-2 lg:col-span-1",
    },
  ]

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => {
        const userTotalLength =
          card.title === "Active Users Today"
            ? card.data.theTotal.toLocaleString().length
            : 0

        return (
          <Card
            key={index}
            className={card.colSpan}
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>

            <CardContent className="flex justify-between">
              <div className="flex justify-between flex-col">
                <h1
                  className={`text-3xl font-bold ${userTotalLength <= 3 && userTotalLength > 0 ? "w-20" : ""}`}
                >
                  {card.data.theTotal.toLocaleString()}
                </h1>
                <div
                  className={`flex justify-center items-center ${
                    card.title === "Active Users Today"
                      ? "lg:flex-col mt-4"
                      : "sm:flex-col sm:mt-4"
                  } [@media(min-width:1465px)]:flex-row [@media(min-width:1465px)]:mt-7`}
                >
                  <div className="flex justify-center items-center">
                    <Image
                      className="mr-1"
                      src={
                        card.data.theGrow >= 0
                          ? "/assets/icons/arrow-up-green.svg"
                          : "/assets/icons/arrow-down-red.svg"
                      }
                      alt=""
                      width={20}
                      height={20}
                    />
                    <p
                      className={`mr-1.5 ${
                        card.data.theGrow >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {card.data.theGrow.toFixed(0)}%
                    </p>
                  </div>
                  <p className="text-gray-600 text-[13px]">vs last month</p>
                </div>
              </div>

              <div>
                <Image
                  src={
                    card.data.theTotal > card.data.lastMonth
                      ? "/assets/icons/increment.svg"
                      : "/assets/icons/decrement.svg"
                  }
                  alt=""
                  width={160}
                  height={10}
                />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </section>
  )
}
