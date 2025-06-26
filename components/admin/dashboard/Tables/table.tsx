import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type UserSignup = {
  UserName: string
  UserImage: string
  ITNERARYCREATED: string | number
}

type TripBooking = {
  BookingName: string
  BookingImage: string
  TravelDates: string | number
}

const LastUsersSignups: UserSignup[] = [
  {
    UserName: "James Anderson",
    UserImage: "https://randomuser.me/api/portraits/men/32.jpg",
    ITNERARYCREATED: 12,
  },
  {
    UserName: "Michael Johnson",
    UserImage: "https://randomuser.me/api/portraits/men/45.jpg",
    ITNERARYCREATED: 21,
  },
  {
    UserName: "David Brown",
    UserImage: "https://randomuser.me/api/portraits/men/65.jpg",
    ITNERARYCREATED: 15,
  },
  {
    UserName: "Orlando Diggs",
    UserImage: "https://randomuser.me/api/portraits/men/14.jpg",
    ITNERARYCREATED: 26,
  },
]

const LastTripBookings: TripBooking[] = [
  {
    BookingName: "Thornridge Cir. Shiloh",
    BookingImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    TravelDates: "Jun 02 - Jun 12",
  },
  {
    BookingName: "Roraima Tepui",
    BookingImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    TravelDates: "Jun 07 - Jun 09",
  },
  {
    BookingName: "Socotra Island",
    BookingImage:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    TravelDates: "Jun 10 - Jun 23",
  },
  {
    BookingName: "San Lake Baikal",
    BookingImage:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    TravelDates: "Jun 12 - Jun 26",
  },
]
export function Tables() {
  const tablesData = [
    {
      title: "Last users signups",
      nameKey: "Name",
      data: LastUsersSignups,
      valueLabel: "ITNERARY CREATED",
    },
    {
      title: "Last trip bookings",
      nameKey: "BOOKING",
      data: LastTripBookings,
      valueLabel: "TRAVEL DATES",
    },
  ]

  const tables = tablesData.map((table, i) => {
    return (
      <Card key={i}>
        <CardHeader>
          <CardTitle className="text-[20px]">{table.title}</CardTitle>
          <hr className="mt-4" />
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-4 text-[13px] text-gray-500">
                  {table.nameKey}
                </TableHead>
                <TableHead className="text-center lg:flex lg-flex-col justify-center xl:justify-start text-gray-500">
                  <div className="flex justify-center items-center lg:flex-col xl:flex-row md:text-[12px] pt-3">
                    {table.valueLabel.split(" ").map((word, i) => (
                      <p
                        key={i}
                        className="mr-2 "
                      >
                        {word}
                      </p>
                    ))}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {table.data.map((e, i) => {
                return (
                  <TableRow
                    key={i}
                    className={i % 2 === 0 ? "bg-[#f8f8f8]" : ""}
                  >
                    <TableCell className="font-medium flex items-center p-4">
                      <Avatar>
                        <AvatarImage
                          src={"UserImage" in e ? e.UserImage : e.BookingImage}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <h1 className="ml-2">
                        {"UserName" in e ? e.UserName : e.BookingName}
                      </h1>
                    </TableCell>

                    <TableCell className="text-center xl:text-start bg-amber-30">
                      {"ITNERARYCREATED" in e
                        ? e.ITNERARYCREATED
                        : e.TravelDates}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  })

  return <section className="grid gap-10 lg:grid-cols-2">{tables}</section>
}
