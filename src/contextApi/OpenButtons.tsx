import React, { createContext, useContext, useEffect, useState } from "react";
import { invoiceDataContext } from "./InvoiceData";

export const OpenButtonsContext = createContext<any>(null);

export default function OpenButtonsProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [openShipping, setShipping] = useState(true);
  const [openTax, setOpenTax] = useState(true);
  const [openDiscount, setOpenDiscount] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [showTax, setShowTax] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const { invoiceData, setinvoiceData } = useContext(invoiceDataContext);

  const handleShippingButton = () => {
    setShipping(false);
    setShowShipping(true);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({
        ...invoice,
        openShipping: false,
        showShipping: true
      }))
    );
  };

  const handleTaxButton = () => {
    setOpenTax(false);
    setShowTax(true);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({
        ...invoice,
        openTax: false,
        showTax: true
      }))
    );
  };

  const handleDiscountButton = () => {
    setOpenDiscount(false);
    setShowDiscount(true);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({
        ...invoice,
        openDiscount: false,
        showDiscount: true
      }))
    );
  };

  const handleDeleteDiscount = () => {
    setOpenDiscount(true);
    setShowDiscount(false);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({
        ...invoice,
        openDiscount: true,
        showDiscount: false
      }))
    );
  };

  const handleDeleteTax = () => {
    setOpenTax(true);
    setShowTax(false);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({
        ...invoice,
        openTax: true,
        showTax: false
      }))
    );
  };

  const handleDeleteShipping = () => {
    setShipping(true);
    setShowShipping(false);
    setinvoiceData((invoice) =>
      invoice.map((invoice) => ({
        ...invoice,
        openShipping: true,
        showShipping: false
      }))
    );
  };

  useEffect(() => {
    if (invoiceData.length > 0) {
      setOpenDiscount(invoiceData[0]?.openDiscount);
      setOpenTax(invoiceData[0]?.openTax);
      setShowShipping(invoiceData[0]?.showShipping);
      setShipping(invoiceData[0]?.openShipping);
      setShowTax(invoiceData[0]?.showTax);
      setShowDiscount(invoiceData[0]?.showDiscount);
    }
  }, [invoiceData]);

  return (
    <OpenButtonsContext.Provider
      value={{
        handleDiscountButton,
        handleShippingButton,
        handleTaxButton,
        openShipping,
        openDiscount,
        openTax,
        showTax,
        showShipping,
        showDiscount,
        handleDeleteDiscount,
        handleDeleteShipping,
        handleDeleteTax
      }}
    >
      {children}
    </OpenButtonsContext.Provider>
  );
}
