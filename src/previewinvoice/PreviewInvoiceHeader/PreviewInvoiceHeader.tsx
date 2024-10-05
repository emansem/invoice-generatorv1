import  { useContext } from "react";
import { invoiceDataContext } from "../../contextApi/InvoiceData";
import { BalanceContextApi } from "../../contextApi/BalanceContextApi";
import InvoiceBillingElement from "../InvoiceBillingElement";
import { CurrencyContextApi } from "../../contextApi/CurrencyContextApi";

function InvoiceLogo() {
  const { invoiceData } = useContext(invoiceDataContext);
  return (
    <div>
      <img
        className="h-28 w-32 object-cover rounded-md"
        src={`${invoiceData[0]?.logo}`}
        alt="Invoice logo"
      />
    </div>
  );
}

function InvoiceNumber() {
  const context = useContext(invoiceDataContext);

  if (!context) return;
  const { invoiceData } = context;

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-1 text-stone-800">INVOICE</h1>
      <p className="text-stone-500 font-[400] text-right text-xl">
        #{invoiceData[0]?.invoiceNumber}
      </p>
    </div>
  );
}

function InvoiceHearderBillingData() {
  const context = useContext(invoiceDataContext);
  const balanceContext = useContext(BalanceContextApi);
  if (!balanceContext) return;
  const { totalBalance } = balanceContext;
  if (!context) return;
  const { invoiceData } = context;
  const contextCurency = useContext(CurrencyContextApi);
  if (!contextCurency) return;
  const { currency } = contextCurency;

  return (
    <div className="flex flex-col gap-2 text-right">
      <InvoiceBillingElement label="Date" value={invoiceData[0]?.date} />

      <InvoiceBillingElement
        label="PayMent Terms Online"
        value={invoiceData[0]?.paymentTerms}
      />
      <InvoiceBillingElement label="Due Date" value={invoiceData[0]?.dueDate} />

      <InvoiceBillingElement
        label="PO Number"
        value={invoiceData[0]?.poNumber}
      />
      <InvoiceBillingElement
        label="Balance Due"
        isBalance
        value={`${currency}${totalBalance.toFixed(2)}`}
      />
    </div>
  );
}
function HeaderSenderDetailsEl() {
  const context = useContext(invoiceDataContext);
  if (!context) return;
  const { invoiceData } = context;

  return (
    <div className="flex flex-col w-[300px] justify-between ">
      <p className="text-stone-800 font-bold text-xl mb-3">
        {invoiceData[0]?.from}
      </p>
      <div className="flex justify-between">
        <p className="flex flex-col">
          <span className="text-stone-700 text-[18px] font-semibold ">
            BIll To:
          </span>
          <span className="block text-right  text-stone-500">
            {" "}
            {invoiceData[0]?.billTo}{" "}
          </span>
        </p>
        <p className="flex flex-col">
          <span className="text-stone-700 text-[18px] font-semibold ">
            Ship To:
          </span>
          <span className="block text-right  text-stone-500">
            {invoiceData[0]?.shipTo}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function PreviewInvoiceHeader() {
  return (
    <>
      <div className="flex justify-between">
        <InvoiceLogo />
        <InvoiceNumber />
      </div>
      <div className="flex flex-col lg:flex-row justify-between  items-start">
        <HeaderSenderDetailsEl />
        <InvoiceHearderBillingData />
      </div>
    </>
  );
}
