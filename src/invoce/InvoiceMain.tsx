import InvoiceFormFooter from "./invoiceformfooter/InvoiceFormFooter";
import InvoiceHeaderBottom from "./invoiceHeader/InvoiceHeaderBottom";
import InvoiceHeaderTop from "./InvoiceHeaderTop";
import InvoiceTableLayout from "./invoiceTable/InvoiceTableLayout";

export default function InvoiceMain() {
  return (
    <div className="px-10 py-8">
      <InvoiceHeaderTop />
      <InvoiceHeaderBottom />
      <InvoiceTableLayout />
      <InvoiceFormFooter />
    </div>
  );
}
