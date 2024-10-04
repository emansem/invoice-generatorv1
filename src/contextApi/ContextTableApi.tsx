import React, { createContext, useContext, useEffect } from "react";
type tableContextApiTypes = {
  details: string;
  amount: number;
  quantity: number;
  rate: number;
  id: number;
};
interface tableContextApiProps {
  rows: tableContextApiTypes[];
  handleAndNewRow: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleOnchangeRate: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleOnchangeQuantity: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleOnchangeDetails: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}
export const ContextTableApi = createContext<tableContextApiProps | null>(null);
import { useState } from "react";
import { invoiceDataContext } from "./InvoiceData";
export default function ContextTableApiProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { invoiceData, setinvoiceData } = useContext(invoiceDataContext);
  const [rows, setnewRow] = useState<tableContextApiTypes[]>([]);
  useEffect(() => {
    if (invoiceData.length > 0) {
      setnewRow(invoiceData[0].items);
    }
  }, [invoiceData]);

  const handleOnchangeDetails = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number
  ) => {
    const value = e.target.value;
    const updatedRows = rows.map((row, index) =>
      index === rowIndex ? { ...row, details: value } : row
    );
    setnewRow(updatedRows);
    const updatedInvoice = invoiceData.map((invoice, i) =>
      i === 0 ? { ...invoice, items: updatedRows } : invoice
    );
    setinvoiceData(updatedInvoice);
  };
  const handleOnchangeRate = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number
  ) => {
    const value = parseFloat(e.target.value);
    const updatedRows = rows.map((row, index) =>
      index === rowIndex ? { ...row, rate: value } : row
    );
    setnewRow(updatedRows);
    const updatedInvoice = invoiceData.map((invoice, i) =>
      i === 0 ? { ...invoice, items: updatedRows } : invoice
    );
    setinvoiceData(updatedInvoice);
  };
  const handleOnchangeQuantity = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number
  ) => {
    const value = parseFloat(e.target.value);
    const updatedRows = rows.map((row, index) =>
      index === rowIndex ? { ...row, quantity: value } : row
    );
    setnewRow(updatedRows);
    const updatedInvoice = invoiceData.map((invoice, i) =>
      i === 0 ? { ...invoice, items: updatedRows } : invoice
    );
    setinvoiceData(updatedInvoice);
  };

  function handleAndNewRow() {
    const newRow = {
      details: "Describe the service you are offering",
      amount: 1,
      quantity: 1,
      rate: 0,
      id: 1
    };

    setnewRow((prev) => [...prev, newRow]);
  }
  return (
    <ContextTableApi.Provider
      value={{
        handleAndNewRow,
        rows,
        handleOnchangeQuantity,
        handleOnchangeRate,
        handleOnchangeDetails
      }}
    >
      {children}
    </ContextTableApi.Provider>
  );
}
