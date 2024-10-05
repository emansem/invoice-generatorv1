import React, { useContext, useEffect, useState } from "react";
import { ImageContextApi } from "../contextApi/ImageContextApi";
import { invoiceDataContext } from "../contextApi/InvoiceData";

function UploadLogo() {
  const context = useContext(ImageContextApi);

  if (!context) {
    throw new Error("ImageContextApi is missing");
  }

  const { handleFileChange, imagePreview, imageUrl } = context;
  console.log(imageUrl);

  const showBg = !imagePreview || (!imageUrl ? "bg-stone-400" : "");

  return (
    <div
      className={`h-32 flex justify-between items-center text-center w-52 ${showBg} p-5`}
    >
      <label
        className="flex-1  rounded-md overflow-hidden text-xl text-stone-600 font-[500]"
        htmlFor="logo"
      >
        {imagePreview || imageUrl ? (
          <img className="h-full w-full" src={imagePreview || imageUrl} />
        ) : (
          `+ Add Your Logo`
        )}
      </label>
      <input
        type="file"
        id="logo"
        hidden
        name="logo"
        onChange={handleFileChange}
      />
    </div>
  );
}

function InvoiceNumber() {
  const [invoiceNumber, setInvoiceNumber] = useState<string | number>(2);
  const context = useContext(invoiceDataContext);

  if (!context) return null;

  const { invoiceData, setinvoiceData } = context;

  // Handle changes to the invoice number
  function handleOnChangeInvoiceNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInvoiceNumber(value);
    setinvoiceData((previewInvoice) =>
      previewInvoice.map((invoice) => ({
        ...invoice,
        invoiceNumber: value
      }))
    );
  }

  useEffect(() => {
    if (invoiceData.length > 0) {
      setInvoiceNumber(invoiceData[0]?.invoiceNumber);
    }
  }, [invoiceData]);

  return (
    <div className="flex items-end text-right gap-2 flex-col">
      <label
        htmlFor="invoice-number"
        className="text-4xl capitalize text-stone-300 bg-transparent py-4 w-full  lg:w-[80%] text-left px-4 lg:text-right font-bold"
      >
        Invoice
      </label>
      <input
        id="invoice-number"
        onChange={handleOnChangeInvoiceNumber}
        type="text"
        className="text-right bg-[#242424] border-2 rounded-md border-stone-500 px-4 py-3 text-xl w-[250px]"
        value={invoiceNumber}
      />
    </div>
  );
}

export default function InvoiceHeaderTop() {
  return (
    <div className="flex flex-col items-start gap-2  md:flex-row md:justify-between">
      <UploadLogo />
      <InvoiceNumber />
    </div>
  );
}
