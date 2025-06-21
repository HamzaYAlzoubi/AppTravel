import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function HomePage() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  
  return (
    <>
      <header className=" flex justify-between items-center px-5 ml-auto mr-auto p-4  lg:pl-40 lg:pr-40 absolute w-full ">
        <div className="flex justify-center items-center gap-1.5 mb-3 text-2xl">
          <img src="/assets/icons/logo.svg" alt="Tourvisto Logo" />
          Tourvisto
        </div>
        <LogoutButton url="/login" />
      </header>


      <section className="bg-green-500 h-screen">

        <h1>uigyfthvjhiu</h1>

      </section>
    </>
  );
}
