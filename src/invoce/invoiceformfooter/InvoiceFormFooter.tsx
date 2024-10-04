import InvoiceFormFooterLeft from "./InvoiceFormFooterLeft";
import InvoiceFormFooterRight from "./InvoiceFormFooterRight";

export default function InvoiceFormFooter() {
  return (
    <div className="flex w-full gap-10">
      <div className="w-3/4">
        <InvoiceFormFooterLeft />
      </div>
      <div className="w-2/4">
        <InvoiceFormFooterRight />
      </div>
    </div>
  );
}
