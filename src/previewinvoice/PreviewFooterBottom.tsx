import React, { useContext } from "react";
import { invoiceDataContext } from "../contextApi/InvoiceData";

export default function PreviewFooterBottom() {
  const context = useContext(invoiceDataContext);
  if (!context) return;
  const { invoiceData } = context;
  return (
    <div className=" flex flex-col lg:w-2/4 gap-4">
      <div>
        <span className="text-xl text-stone-800 font-semibold mb-1 block">
          {" "}
          Notes
        </span>
        <p className="text-[16px] text-stone-600"> {invoiceData[0]?.notes}</p>
      </div>
      <div>
        <span className="text-xl text-stone-800 font-semibold mb-1 block">
          Terms
        </span>
        <p className="text-stone-600"> {invoiceData[0]?.terms}</p>
      </div>
    </div>
  );
}
