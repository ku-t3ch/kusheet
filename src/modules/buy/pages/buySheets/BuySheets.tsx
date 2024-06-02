import { SearchIcon } from "lucide-react";
import Link from "next/link";

export default function BuySheets() {
  return (
    <>
      <div className="relative w-full">
        <div className="flex gap-3 rounded-full border px-7 py-5 placeholder:text-foreground/30">
          <SearchIcon />
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none"
            placeholder="ค้นหา ชื่อ/รหัสวิชา"
          />
        </div>
      </div>
      {/* <div className="flex flex-1 items-center justify-center rounded-lg">
                <div className="flex flex-col items-center gap-1 text-foreground/50">
                    <InboxIcon />
                    <div>ไม่พบข้อมูล</div>
                </div>
            </div> */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...new Array(9).values()].map((_, index) => (
          <Link href={`/buy/sheet/${index}`} className="flex flex-col gap-5 border p-3 cursor-pointer" key={index}>
            <div className="flex flex-col">
              <div className="text-xl">01009102</div>
              <div className="line-clamp-2 text-foreground/60">
                Humans and Natural Resources
              </div>
            </div>
            <div>50 บาท</div>
          </Link>
        ))}
      </div>
    </>
  );
}
