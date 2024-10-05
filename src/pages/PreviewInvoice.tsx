import PreviewInvoiceHeader from "../previewinvoice/PreviewInvoiceHeader/PreviewInvoiceHeader";
import PreviewBody from "../previewinvoice/PreviewBody";

import PreviewInvoiceFooterTop from "../previewinvoice/PreviewInvoiceFooterTop";
import PreviewFooterBottom from "../previewinvoice/PreviewFooterBottom";

export default function PreviewInvoice() {
  return (
    <div className="max-w-7xl mx-auto  flex justify-center ">
      <div
        id="element-to-print"
        className=" w-full  bg-stone-50 shadow-md  min-h-screen text-black rounded-md overflow-hidden p-10 mx-6 lg:mx-0 flex flex-col gap-4"
      >
        <PreviewInvoiceHeader />
        <PreviewBody />
        <PreviewInvoiceFooterTop />
        <PreviewFooterBottom />
      </div>
    </div>
  );
}
