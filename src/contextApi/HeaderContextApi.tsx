import React, { createContext, useContext, useEffect, useState } from "react";
import { invoiceDataContext } from "./InvoiceData";

interface HeaderContextProps {
  date: string;
  paymentTerms: string;
  dueDate: string;
  poNumber: number;
  billValue: string;
  shipToValue: string;
  author: string;
  handleChangeBillValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeShipToValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeDueDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnchangePoNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangePaymentTerms: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAuthor: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HeaderContextApi = createContext<HeaderContextProps | null>(null);
export default function HeaderContextApiProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const now = Date.now();
  const [date, setDate] = useState("2024-10-03");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [dueDate, setDueDate] = useState("2024-10-03");
  const [poNumber, setpoNumber] = useState(0);

  const [billValue, setBillValue] = useState<string>("Who is this to?");
  const [shipToValue, setShipToValue] = useState<string>("(Optional)");
  const [author, setAuthor] = useState<string>("Who is this from?");
  const context = useContext(invoiceDataContext);
  if (!context) return;
  const { invoiceData, setinvoiceData } = context;

  function handleChangeBillValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setBillValue(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, billTo: value }))
    );
  }

  function handleChangeShipToValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setShipToValue(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, shipTo: value }))
    );
  }

  function handleChangeAuthor(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setAuthor(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, from: value }))
    );
  }

  function handleOnChangeDueDate(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setDueDate(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, dueDate: value }))
    );
  }

  function handleOnChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setDate(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, date: value }))
    );
  }

  function handleOnchangePoNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);
    setpoNumber(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, poNumber: value }))
    );
  }
  function handleOnChangePaymentTerms(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPaymentTerms(value);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({ ...invoice, paymentTerms: value }))
    );
  }

  useEffect(() => {
    if (invoiceData.length > 0) {
      setAuthor(invoiceData[0].from);
      setBillValue(invoiceData[0].billTo);
      setDueDate(invoiceData[0].dueDate);
      setDate(invoiceData[0].date);
      setPaymentTerms(invoiceData[0].paymentTerms);
      setpoNumber(invoiceData[0].poNumber);
      setShipToValue(invoiceData[0].shipTo);
    }
  }, [invoiceData]);

  return (
    <HeaderContextApi.Provider
      value={{
        billValue,
        shipToValue,
        author,
        date,
        dueDate,
        paymentTerms,
        poNumber,
        handleChangeAuthor,
        handleChangeBillValue,
        handleChangeShipToValue,
        handleOnChangeDueDate,
        handleOnChangePaymentTerms,

        handleOnChangeDate,
        handleOnchangePoNumber
      }}
    >
      {children}
    </HeaderContextApi.Provider>
  );
}
