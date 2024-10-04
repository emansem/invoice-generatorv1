import React, { createContext, useState, useEffect } from "react";
interface InvoiceItem {
  id: number;
  details: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface InvoiceData {
  items: InvoiceItem[];
  logo: string;
  billTo: string;
  from: string;
  shipTo: string;
  date: String;
  paymentTerms: string;
  dueDate: string;
  poNumber: number;
  notes: string;
  terms: string;
  invoiceNumber: string;
  currency: string;
  shipping: number;
  tax: number;
  discount: number;
  amountPaid: number;
  openShipping: boolean;
  openDiscount: boolean;
  openTax: boolean;
  showTax: boolean;
  showShipping: boolean;
  showDiscount: boolean;
  subTotal: number;
  total: number;
  balance: number;
  invoiceId: number;
}

export const invoiceDataContext = createContext<{
  invoiceData: InvoiceData[];
  setinvoiceData: React.Dispatch<React.SetStateAction<InvoiceData[]>>;
}>({ invoiceData: [], setinvoiceData: () => {} });

export default function InvoiceDataProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [invoiceData, setinvoiceData] = useState<InvoiceData[]>([]);
  const invoiceDataArray: InvoiceData[] = [
    {
      items: [
        {
          id: Date.now(),
          details: "Description of item/service",
          quantity: 0,
          rate: 1,
          amount: 0
        }
      ],
      logo: "",
      billTo: "Who is this to?",
      from: "Who is this from?",
      shipTo: "Optional",
      date: "2024-10-03",
      paymentTerms: "",
      dueDate: "2024-10-03",
      poNumber: 0,
      notes: "Notes- any relevant information not already covered",
      terms: "Terms and contion-late fees, payment methods",
      invoiceNumber: "#000",
      currency: "$",
      shipping: 0,
      tax: 0,
      discount: 0,
      amountPaid: 0,
      openShipping: true,
      openDiscount: true,
      openTax: true,
      showTax: false,
      showShipping: false,
      showDiscount: false,
      subTotal: 0,
      total: 0,
      balance: 0,
      invoiceId: 1
    }
  ];
  useEffect(() => {
    const invoiceSavedData = JSON.parse(
      localStorage.getItem("invoiceData") || "[]"
    ) as InvoiceData[];

    if (invoiceSavedData.length > 0) {
      setinvoiceData(invoiceSavedData);
    } else {
      setinvoiceData(invoiceDataArray);
      localStorage.setItem("invoiceData", JSON.stringify(invoiceDataArray));
    }
  }, []);

  useEffect(() => {
    if (invoiceData.length > 0) {
      localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
    }
  }, [invoiceData]);
  console.log(invoiceData);
  return (
    <invoiceDataContext.Provider value={{ invoiceData, setinvoiceData }}>
      {children}
    </invoiceDataContext.Provider>
  );
}
