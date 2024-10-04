import { useContext } from "react";
import InputV1 from "../Inputs/Input";
import { InvoiceFooterContext } from "../../contextApi/InvoiceFooterContext";

export default function InvoiceFormFooterLeft() {
  const context = useContext(InvoiceFooterContext);
  if (!context) return;
  const { handleNotesOnchange, handleTermsOnchange, notesValue, termsValue } =
    context;
  return (
    <div>
      <InputV1
        label="Notes"
        value={notesValue}
        id="notes"
        textArea
        onchangeTextArea={handleNotesOnchange}
      />
      <InputV1
        label="Terms"
        value={termsValue}
        id="terms"
        textArea
        onchangeTextArea={handleTermsOnchange}
      />
    </div>
  );
}
