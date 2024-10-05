import InvoiceFormFooterLeft from "./InvoiceFormFooterLeft";
import InvoiceFormFooterRight from "./InvoiceFormFooterRight";

export default function InvoiceFormFooter() {
  return (
    <div className="flex flex-col  lg:flex-row w-full gap-10">
      <div className=" w-full lg:w-3/4">
        <InvoiceFormFooterLeft />
      </div>
      <div className=" w-full lg:w-2/4">
        <InvoiceFormFooterRight />
      </div>
    </div>
  );
}
