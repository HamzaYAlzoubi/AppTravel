import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginButton from "./loginButton"
import Image from "next/image"


type LoginTemplateProps = {
  title: string
  description: string
  buttonUrl: string
}

export function LoginTemplate({
  title,
  description,
  buttonUrl,
}: LoginTemplateProps) {
  return (
    <Card className="w-100">
      <CardHeader className="w-full flex justify-center items-center flex-col gap-3.5">
        <CardTitle className="flex justify-center items-center gap-1.5 mb-3 text-2xl">
          <Image
            src="/assets/icons/logo.svg"
            alt="Tourvisto Logo"
            width={30}
            height={30}
          />
          Tourvisto
        </CardTitle>
        <CardTitle className="text-[25px]">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <LoginButton url={buttonUrl} />
      </CardContent>
    </Card>
  )
}
