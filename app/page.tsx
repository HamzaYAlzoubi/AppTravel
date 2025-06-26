import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/loginadmin");
  }else{
    redirect("/dashboard");
  }

  return (
    <>
      <h1>Main Page</h1>
    </>
  );
}
