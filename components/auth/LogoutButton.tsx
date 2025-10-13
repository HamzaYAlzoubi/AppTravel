"use client"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"
import { signOut } from "next-auth/react"
import { TbLogout2 } from "react-icons/tb"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const logoutButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-none border-none text-red-500",
        homepage:
          "bg-blue-900/30 text-red-500 rounded-full h-10 w-10 cursor-pointer hover:bg-blue-900/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface LogoutButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof logoutButtonVariants> {
  url?: string
}

export default function LogoutButton({ className, variant, url, ...props }: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    await signOut({ callbackUrl: url })
  }

  return (
    <button
      onClick={handleLogout}
      className={cn(logoutButtonVariants({ variant, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin" />
        </>
      ) : (
        <>
          <TbLogout2 size={20}/>
        </>
      )}
    </button>
  )
}
