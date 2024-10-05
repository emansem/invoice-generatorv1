import InvoiceMain from "./InvoiceMain";
import InvoiceSideBar from "./InvoiceSideBar";

export default function InvoiceLayout() {
  return (
    <div className="max-w-7xl p-4  mx-auto flex  flex-col-reverse lg:flex-row gap-8 items-start">
      <div className="lg:w-3/4 bg-stone-900">
        <InvoiceMain />
      </div>
      <div className="500 w-full flex-1">
        <InvoiceSideBar />
      </div>
    </div>
  );
}
