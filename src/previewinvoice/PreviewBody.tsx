import { useContext } from "react";
import { invoiceDataContext } from "../contextApi/InvoiceData";
import { CurrencyContextApi } from "../contextApi/CurrencyContextApi";

function TableHead() {
  return (
    <thead className="bg-stone-900 rounded-md">
      <tr>
        <th>Details</th>
        <th>Quantity</th>
        <th>Rate</th>
        <th>Amount</th>
      </tr>
    </thead>
  );
}
function TablBodyContent() {
  const context = useContext(invoiceDataContext);
  if (!context) return;
  const { invoiceData } = context;
  const contextCurency = useContext(CurrencyContextApi);
  if (!contextCurency) return;
  const { currency } = contextCurency;

  return (
    <>
      <colgroup>
        <col className="w-[40%]" />
        <col className="w-1/6" />
        <col className="w-1/6" />
        <col className="w-1/6" />
        <col className="w-1/8" />
      </colgroup>
      <tbody>
        {invoiceData[0]?.items.map((item, index) => (
          <tr key={index}>
            <td className="p- text-stone-500">{item.details}</td>
            <td className="p-2 text-stone-500">{item.quantity}</td>
            <td className="p-2 text-stone-500">
              {currency}
              {item.rate}
            </td>
            <td className="p-2 text-stone-500">
              {currency}
              {item.quantity * item.rate}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default function PreviewBody() {
  return (
    <div>
      <table className="w-full  rounded-md overflow-clip border-b-2 border-b-stone-500">
        <TableHead />
        <TablBodyContent />
      </table>
    </div>
  );
}
