import Image from "next/image"
import { Button } from "@/components/ui/button"
import BackButton from "@/components/BackButton"

export default function SignIn() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen relative">
        <div className="fixed top-3 left-3">
            <BackButton />
        </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">เข้าสู่ระบบ</h1>
            <p className="text-balance text-muted-foreground">
              กรุณาเข้าสู่ระบบด้วยอีเมล @ku.th
            </p>
          </div>
          <div className="grid gap-4">
            <Button className="w-full">
              Login with Google
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
