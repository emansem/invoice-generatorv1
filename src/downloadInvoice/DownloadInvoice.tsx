import PreviewInvoiceHeader from "../previewinvoice/PreviewInvoiceHeader/PreviewInvoiceHeader";
import PreviewBody from "../previewinvoice/PreviewBody";
import html2pdf from "html2pdf.js";
import PreviewInvoiceFooterTop from "../previewinvoice/PreviewInvoiceFooterTop";
import PreviewFooterBottom from "../previewinvoice/PreviewFooterBottom";
import { FaArrowDown } from "react-icons/fa6";

function handlePrint() {
  const printElement = document.getElementById("print");
  if (printElement) {
    html2pdf(printElement);
  }
}

export default function DownloadInvoice() {
  return (
    <div className="max-w-7xl mx-auto gap-4 flex-col h-full flex justify-center">
      <button
        onClick={handlePrint}
        className="flex gap-1 self-end bg-[#2596BE] py-4 w-[200px] text-center justify-center rounded-md text-xl font-semibold cursor-pointer text-stone-300 bg- items-center hover:bg-[#0b749b] transition-all ease-linear duration-300"
      >
        <span>
          <FaArrowDown />
        </span>
        <span>Download</span>
      </button>
      <div
        id="print" // Using elementId correctly here
        className="w-full bg-white h-full text-black rounded-md overflow-hidden p-10 mx-6 flex flex-col gap-4"
      >
        <PreviewInvoiceHeader />
        <PreviewBody />
        <PreviewInvoiceFooterTop />
        <PreviewFooterBottom />
      </div>
    </div>
  );
}
