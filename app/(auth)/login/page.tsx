import LoginPage from "@/components/auth/LoginPage"
import Link from "next/link"
export default function Page() {
  return (
    <>
      <Link
        className=" absolute z-20 px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg  hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 "
        href="/loginadmin"
      >
        Admin Dashboard Login
      </Link>

      <LoginPage type="client" />
    </>
  )
}
