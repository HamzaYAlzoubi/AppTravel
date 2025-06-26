import { Button } from "@/components/ui/button"
import Image from "next/image"

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/auth-options"

export default async function HeaderDashboard() {
  const session = await getServerSession(authOptions)
  return (
    <header className="flex justify-between items-center  flex-wrap">
      <div>
        <div className="flex items-center">
          <h1 className="font-medium text-2xl mr-2">
            Welcome {session!.user?.name?.split(" ")[0]}
          </h1>
          <Image
            src="/assets/icons/Hi.png"
            alt="hi"
            width={30}
            height={100}
          />
        </div>
        <p className="text-gray-500 ">
          Track activity, trends, and popular destinations in real time
        </p>
      </div>
      <Button className="bg-blue-600 md:w-45 hover:bg-blue-700 w-full mt-3">
        + Create a trip
      </Button>
    </header>
  )
}
