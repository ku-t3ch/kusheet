import { ThumbsUpIcon } from "lucide-react";

export default function BuyerReview() {
  return (
    <div className="mt-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">สบายดีครับ</h5>
          <h6 className="text-sm text-zinc-600">02/06/2024 • 01:24</h6>
        </div>
        <ThumbsUpIcon size="1.5rem" className="text-lime-500" />
      </div>
      <p className="mt-2 text-sm">
        คุ้มค่าเกินราคาจริง ๆ ครับ ใช้อ่านเตรียมสอบดีมาก
      </p>
    </div>
  );
}
