import { ReactNode } from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";



export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/loginadmin");
  }
  return (
    <div className="flex bg-gray-50">
      <Sidebar
        name={session.user?.name ?? undefined}
        email={session.user?.email ?? undefined}
        img={session.user?.image ?? undefined}
      />
      <main className="flex-1 p-6 md:ml-65">
        {children}
      </main>
    </div>
  );
}