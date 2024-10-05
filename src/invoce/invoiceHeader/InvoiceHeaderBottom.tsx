import HeaderFormLeft from "./HeaderFormLeft";
import HeaderFormRight from "./HeaderFormRight";

export default function InvoiceHeaderBottom() {
  return (
    <div className="flex gap-4 lg:gap-24 flex-col lg:flex-row items-start sm:w-full justify-between md:items-center my-4">
      <div className=" w-full md:w-3/4 mt-4">
        <HeaderFormLeft />
      </div>
      <div className=" w-full md:flex-2">
        <HeaderFormRight />
      </div>
    </div>
  );
}
