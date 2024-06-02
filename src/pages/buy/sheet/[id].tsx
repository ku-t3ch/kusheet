import { Button } from "@/components/ui/button";
import LayoutTypeA from "@/layouts/LayoutTypeA";
import { ThumbsUp } from "lucide-react";
import React from "react";

const Review = () => {
  return (
    <div className="mt-4 border p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">สบายดีครับ</h5>
          <h6 className="text-sm text-zinc-600">02/06/2024 • 01:24</h6>
        </div>
        <ThumbsUp size="1.5rem" className="text-lime-500" />
      </div>
      <p className="mt-2 text-sm">
        คุ้มค่าเกินราคาจริง ๆ ครับ ใช้อ่านเตรียมสอบดีมาก
      </p>
    </div>
  );
};

function SheetViewPage() {
  return (
    <LayoutTypeA>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="h-[700px] w-full flex-1 overflow-hidden rounded-lg border bg-zinc-50 lg:w-[400px]">
          <img src="https://www.bloggang.com/data/p/peechulatutordelivery/picture/1618101888.jpg" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-3xl">01009102 Humans and Natural Resources</h3>
          <h4>
            โดย <span className="font-bold">นักจดสรุป</span>
          </h4>
          <span className="text-4xl font-bold">
            20 <span className="text-lg font-normal">บาท</span>
          </span>
          <h5 className="text-sm font-bold">รายละเอียด</h5>
          <ul className="list-disc list-inside">
            <li>มีทั้งหมด 2 หน้า</li>
            <li>ของภาคการศึกษา 2566/1</li>
            <li>คิดไม่ออก</li>
            <li>คิดไม่ออก</li>
            <li>คิดไม่ออก</li>
            <li>คิดไม่ออก</li>
            <li>คิดไม่ออก</li>
          </ul>
          <Button className="h-12 my-4 px-24">ซื้อชีท</Button>
        </div>
      </div>
      <div>
        <h4 className="text-lg">รีวิวจากผู้ซื้อ</h4>
        <Review />
        <Review />
        <Review />
      </div>
    </LayoutTypeA>
  );
}

export default SheetViewPage;
