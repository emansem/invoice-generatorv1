import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { invoiceDataContext } from "./InvoiceData";
interface InvoiceFooterProps {
  notesValue: string;
  termsValue: string;
  handleTermsOnchange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleNotesOnchange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InvoiceFooterContext = createContext<InvoiceFooterProps | null>(
  null
);

export default function InvoiceFooterContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [notesValue, setnotesValue] = useState("Any relevant information");
  const { invoiceData, setinvoiceData } = useContext(invoiceDataContext);
  function handleNotesOnchange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setnotesValue(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, notes: value }))
    );
  }
  const [termsValue, setTermsValue] = useState("Any relevant information");
  function handleTermsOnchange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setTermsValue(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, terms: value }))
    );
  }
  useEffect(() => {
    setTermsValue(invoiceData[0]?.terms);
    setnotesValue(invoiceData[0]?.notes);
  }, [invoiceData]);
  return (
    <InvoiceFooterContext.Provider
      value={{
        notesValue,
        termsValue,
        handleNotesOnchange,
        handleTermsOnchange
      }}
    >
      {children}
    </InvoiceFooterContext.Provider>
  );
}
