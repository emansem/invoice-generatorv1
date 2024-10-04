import HeaderFormLeft from "./HeaderFormLeft";
import HeaderFormRight from "./HeaderFormRight";

export default function InvoiceHeaderBottom() {
  return (
    <div className="flex gap-24 justify-between items-center my-4">
      <div className="flex-1">
        <HeaderFormLeft />
      </div>
      <div className="flex-2">
        <HeaderFormRight />
      </div>
    </div>
  );
}
