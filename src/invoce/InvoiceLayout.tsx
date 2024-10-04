import InvoiceMain from "./InvoiceMain";
import InvoiceSideBar from "./InvoiceSideBar";

export default function InvoiceLayout() {
  return (
    <div className="max-w-7xl  mx-auto flex gap-8 items-start">
      <div className="w-3/4 bg-stone-900">
        <InvoiceMain />
      </div>
      <div className="500 flex-1">
        <InvoiceSideBar />
      </div>
    </div>
  );
}
