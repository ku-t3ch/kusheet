import BuyerReview from "../../molecules/review/Review";

export default function ReviewSection() {
  return (
    <div>
      <h4 className="text-lg">รีวิวจากผู้ซื้อ</h4>
      <BuyerReview />
      <BuyerReview />
      <BuyerReview />
    </div>
  );
}
