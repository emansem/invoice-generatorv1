import React, { createContext, useContext, useEffect, useState } from "react";
import { invoiceDataContext } from "./InvoiceData";
interface InvoiceFooterRIghtProps {
  onchangeDiscount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onchangeTaxValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onchangeShipping: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onchangeAmountPaid: (e: React.ChangeEvent<HTMLInputElement>) => void;
  discount: number;
  tax: number;
  shippingCost: number;
  amountPaid: number;
}

export const InvoiceFooterRightContext =
  createContext<InvoiceFooterRIghtProps | null>(null);

export default function InvoiceFooterRightContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [amountPaid, setamountPaid] = useState(0);
  const { invoiceData, setinvoiceData } = useContext(invoiceDataContext);
  const onchangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setDiscount(value);
    setinvoiceData((preInvoice) =>
      preInvoice.map((invoice) => ({ ...invoice, discount: value }))
    );
  };
  const onchangeAmountPaid = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setamountPaid(value);
    setinvoiceData((preInvoice) =>
      preInvoice.map((invoice) => ({ ...invoice, amountPaid: value }))
    );
  };
  const onchangeTaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setTax(value);
    setinvoiceData((preInvoice) =>
      preInvoice.map((invoice) => ({ ...invoice, tax: value }))
    );
  };
  const onchangeShipping = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setShippingCost(value);
    setinvoiceData((preInvoice) =>
      preInvoice.map((invoice) => ({ ...invoice, shipping: value }))
    );
  };
  useEffect(() => {
    if (invoiceData.length > 0) {
      setDiscount(invoiceData[0]?.discount);
      setTax(invoiceData[0]?.tax);
      setamountPaid(invoiceData[0]?.amountPaid);
      setShippingCost(invoiceData[0]?.shipping);
    }
  }, [invoiceData]);

  return (
    <InvoiceFooterRightContext.Provider
      value={{
        onchangeAmountPaid,
        onchangeDiscount,
        onchangeShipping,
        onchangeTaxValue,
        shippingCost,
        amountPaid,
        tax,
        discount
      }}
    >
      {children}
    </InvoiceFooterRightContext.Provider>
  );
}
