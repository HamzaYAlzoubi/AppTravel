"use client"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"
import { signOut } from "next-auth/react"
import { TbLogout2 } from "react-icons/tb"

type LogoutButtonProps = {
  url?: string
}

export default function LogoutButton({ url }: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    await signOut({ callbackUrl: url })
  }

  return (
    <button
      onClick={handleLogout}
      className=" bg-none border-none text-red-500"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin" />
          {/* Logging out... */}
        </>
      ) : (
        <>
          <TbLogout2 />
        </>
      )}
    </button>
  )
}
