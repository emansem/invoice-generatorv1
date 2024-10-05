import { useContext } from "react";
import { InputV2 } from "../Inputs/Input";
import { HeaderContextApi } from "../../contextApi/HeaderContextApi";

export default function HeaderFormRight() {
  const context = useContext(HeaderContextApi);
  if (!context) {
    return;
  }
  const {
    date,
    handleOnChangeDueDate,
    paymentTerms,
    handleOnChangePaymentTerms,
    dueDate,
    handleOnChangeDate,
    poNumber,
    handleOnchangePoNumber
  } = context;

  return (
    <div>
      <InputV2
        label="Date"
        id="date"
        value={date}
        inputType="date"
        onChangeValue={handleOnChangeDate}
      />
      <InputV2
        label="Payment Terms"
        id="paymentTerms"
        value={paymentTerms}
        inputType="text"
        onChangeValue={handleOnChangePaymentTerms}
      />
      <InputV2
        label="Due Date"
        id="duedate"
        value={dueDate}
        inputType="date"
        onChangeValue={handleOnChangeDueDate}
      />
      <InputV2
        label="PO Number"
        id="ponumber"
        value={poNumber}
        inputType="number"
        onChangeValue={handleOnchangePoNumber}
      />
    </div>
  );
}
