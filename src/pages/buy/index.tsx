import { SearchIcon } from "lucide-react";

export default function Index() {
    return (
        <>
            <div className="w-full relative">
                <div className="flex border px-7 py-5 rounded-full placeholder:text-foreground/30 gap-3">
                    <SearchIcon /><input type="text" className="w-full bg-transparent focus:outline-none" placeholder="ค้นหา ชื่อ/รหัสวิชา" />
                </div>
            </div>
            {/* <div className="flex flex-1 items-center justify-center rounded-lg">
                <div className="flex flex-col items-center gap-1 text-foreground/50">
                    <InboxIcon />
                    <div>ไม่พบข้อมูล</div>
                </div>
            </div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[...new Array(9).values()].map((_, index) => (
                    <div className="border p-3 flex flex-col gap-5" key={index}>
                        <div className="flex flex-col">
                            <div className="text-xl">01009102</div>
                            <div className="text-foreground/60 line-clamp-2">Humans and Natural Resources</div>
                        </div>
                        <div>50 บาท</div>
                    </div>
                ))}

            </div>
        </>
    )
}