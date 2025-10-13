import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth/auth-options"
import Image from "next/image"
import { LoginTemplate } from "./LoginTemplate"

type Props = {
  type: "admin" | "client"
}
export default async function LoginPage({ type }: Props) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect(type === "admin" ? "/dashboard" : "/home")
  }

  const content = {
    admin: {
      title: "Admin Dashboard Login",
      description:
        "Sign in with Google to manage destinations, itineraries, and user activity with ease.",
      buttonUrl: "/dashboard",
    },
    client: {
      title: "Start Your Travel Journey",
      description:
        "Sign in with Google to explore AI-generated itineraries, trending destinations, and much more",
      buttonUrl: "/home",
    },
  }[type]

  return (
    <>
      <Image
        src="/assets/images/auth-img.webp"
        alt="Authentication Cover Image"
        className="object-cover w-full h-screen absolute"
        width={1000}
        height={1000}
      />
      <div className="relative flex items-center justify-center h-screen z-10">
              <LoginTemplate
                title={content.title}
                description={content.description}
                buttonUrl={content.buttonUrl}
                type={type}
              />      </div>
    </>
  )
}
