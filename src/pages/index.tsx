
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

export default function Dashboard() {
    return (
        <>
            <div className="flex items-center flex-col px-3 md:px-0 sm:flex-row justify-center gap-10 flex-1">
                <div className="flex flex-col gap-5">
                    <div className="text-5xl font-bold">KUSheet</div>
                    <div className="text-2xl font-bold">เว็บที่รวบรวมชีทของเด็กเกษตรไว้
                        ครบจบในที่เดียว</div>
                </div>
                <Image width={400} height={400} src="/book-open.webp" alt="" />
            </div>
            {/* <div className="flex flex-col">
                <div className="text-3xl">ขายได้มากสุด</div>
                <div className=""></div>
            </div> */}
        </>
    )
}
