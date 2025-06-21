import { ChartBarMultiple } from "@/components/admin/dashboard/Charts";
import DataCard from "@/components/admin/dashboard/dataCard";
import HeaderDashboard from "@/components/admin/dashboard/Header";


export default function Dashboard() {

  const cardData = {
    totalUsers: {
      theTotal: 12450,
      lastMonth: 12150
    },
    totalTrips: {
      theTotal: 3210,
      lastMonth: 3290
    },
    activeUsersToday: {
      theTotal: 520,
      lastMonth: 510
    }
  }

  return (
    <div className="p-4 grid gap-6">
      <HeaderDashboard />

      <DataCard cardData={cardData} />

      <ChartBarMultiple/>

      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
      <h1 className="text-4xl">dashboard</h1>
    </div>
  );
}
