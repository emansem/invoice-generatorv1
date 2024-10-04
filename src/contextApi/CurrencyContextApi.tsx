import React, { createContext, useContext, useEffect, useState } from "react";
import { invoiceDataContext } from "./InvoiceData";
interface CurrencyProps {
  currency: string;
  handleCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrencyContextApi = createContext<CurrencyProps | null>(null);
export default function CurrencyContextApiProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const context = useContext(invoiceDataContext);
  if (!context) return;
  const { invoiceData, setinvoiceData } = context;

  const [currency, setCurrency] = useState<string>("USD");
  function handleCurrency(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setCurrency(value);
    setinvoiceData((prevInvoice) =>
      prevInvoice.map((invoice) => ({ ...invoice, currency: value }))
    );
  }
  useEffect(() => {
    if (invoiceData.length > 0) {
      setCurrency(invoiceData[0]?.currency);
    }
  }, [invoiceData]);
  return (
    <CurrencyContextApi.Provider value={{ currency, handleCurrency }}>
      {children}
    </CurrencyContextApi.Provider>
  );
}
