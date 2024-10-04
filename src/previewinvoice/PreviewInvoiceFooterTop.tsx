import { useContext } from "react";
import InvoiceBillingElement from "./InvoiceBillingElement";
import { invoiceDataContext } from "../contextApi/InvoiceData";
import { BalanceContextApi } from "../contextApi/BalanceContextApi";
import { CurrencyContextApi } from "../contextApi/CurrencyContextApi";

export default function PreviewInvoiceFooterTop() {
  const context = useContext(invoiceDataContext);
  const balanceText = useContext(BalanceContextApi);
  if (!balanceText) return;
  const { subTotal, total } = balanceText;
  if (!context) return;
  const { invoiceData } = context;
  const discountAmount = (invoiceData[0]?.discount / 100) * subTotal;
  const taxAmount = (invoiceData[0]?.tax / 100) * subTotal;
  const contextCurency = useContext(CurrencyContextApi);
  if (!contextCurency) return;
  const { currency } = contextCurency;
  return (
    <div className="flex justify-end">
      <div className=" w-full md:w-1/4 text-right">
        <InvoiceBillingElement
          label="SubTotal"
          value={`${currency} ${subTotal}`}
        />
        <InvoiceBillingElement
          label={`Discount ${invoiceData[0]?.discount}%`}
          value={`${currency} ${discountAmount}`}
        />
        <InvoiceBillingElement
          label={`Tax ${invoiceData[0]?.tax}%`}
          value={`${currency} ${taxAmount}`}
        />
        <InvoiceBillingElement
          label="Shipping"
          value={`${currency} ${invoiceData[0]?.shipping}`}
        />
        <InvoiceBillingElement label="Total" value={`${currency} ${total}`} />
        <InvoiceBillingElement
          label="AmountPaid"
          value={`${currency} ${invoiceData[0]?.amountPaid}`}
        />
      </div>
    </div>
  );
}
