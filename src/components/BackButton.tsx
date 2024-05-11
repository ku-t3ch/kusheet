import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "lucide-react";

interface Props { }

export default function BackButton(props: Props) {
    const router = useRouter()
    return (
        <Button onClick={() => router.back()} variant="ghost"><ChevronLeftIcon className="mr-2 h-4 w-4" /> ย้อนกลับ</Button>
    )
}