import React, { createContext, useContext } from "react";
import { invoiceDataContext } from "./InvoiceData";

interface BalanceProps {
  subTotal: number;
  total: number;
  totalBalance: number;
}

export const BalanceContextApi = createContext<BalanceProps | null>(null);

export default function BalanceContextApiProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { invoiceData } = useContext(invoiceDataContext);

  const subTotal =
    invoiceData[0]?.items?.reduce(
      (sum, value) => sum + value.rate * value.quantity,
      0
    ) || 0;

  const discountAmount = ((invoiceData[0]?.discount || 0) / 100) * subTotal;
  const taxAmount = ((invoiceData[0]?.tax || 0) / 100) * subTotal;
  const shippingCost = invoiceData[0]?.shipping || 0;
  const total = shippingCost + taxAmount + subTotal - discountAmount;
  const totalBalance = total - (invoiceData[0]?.amountPaid || 0);

  return (
    <BalanceContextApi.Provider value={{ subTotal, total, totalBalance }}>
      {children}
    </BalanceContextApi.Provider>
  );
}
