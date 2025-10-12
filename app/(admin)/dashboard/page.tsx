import { Cards } from "@/components/admin/dashboard/Cards";
import { Charts } from "@/components/admin/dashboard/Charts/Charts";
import DataCard from "@/components/admin/dashboard/dataCard";
import HeaderDashboard from "@/components/admin/dashboard/Header";
import { Tables } from "@/components/admin/dashboard/Tables/table";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import Image from "next/image";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  const cardData = {
    totalUsers: {
      theTotal: 12450,
      lastMonth: 12150,
    },
    totalTrips: {
      theTotal: 3210,
      lastMonth: 3290,
    },
    activeUsersToday: {
      theTotal: 520,
      lastMonth: 510,
    },
  };

  const title = (
    <div className="flex items-center">
      <span className="mr-2">
        Welcome {session!.user?.name?.split(" ")[0]}
      </span>
      <Image src="/assets/icons/Hi.png" alt="hi" width={30} height={30} />
    </div>
  );

  return (
    <div className="p-4 grid gap-6">
      <HeaderDashboard
        title={title}
        subtitle="Track activity, trends, and popular destinations in real time"
        buttonText="+ Create a trip"
      />

      <DataCard cardData={cardData} />

      <Cards />

      <Charts />

      <Tables />
    </div>
  );
}