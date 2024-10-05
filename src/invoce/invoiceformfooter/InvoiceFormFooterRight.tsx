import React, { useContext } from "react";
import { InputV3, InputV4 } from "../Inputs/Input";
import { OpenButtonsContext } from "../../contextApi/OpenButtons";
import { InvoiceFooterRightContext } from "../../contextApi/InvoiceFooterRightContext";

import { BalanceContextApi } from "../../contextApi/BalanceContextApi";

interface AdditionalButtonsProps {
  buttonValue: string;
  onclickButton?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
  showButton: boolean;
}

function AdditionalButtons({
  buttonValue,
  onclickButton,
  showButton
}: AdditionalButtonsProps) {
  const show = showButton ? "block" : "hidden";

  return (
    <p
      onClick={onclickButton}
      className={`text-[15px] ${show} flex-1 cursor-pointer text-right text-stone-300 `}
    >
      + {buttonValue}
    </p>
  );
}
function ButtonsElement() {
  const {
    handleDiscountButton,
    handleShippingButton,
    handleTaxButton,
    openShipping,
    openDiscount,
    openTax
  } = useContext(OpenButtonsContext);
  return (
    <div className="flex justify-center">
      <AdditionalButtons
        onclickButton={handleShippingButton}
        showButton={openShipping}
        buttonValue="Shipping"
      />
      <AdditionalButtons
        onclickButton={handleTaxButton}
        showButton={openTax}
        buttonValue="Tax"
      />
      <AdditionalButtons
        onclickButton={handleDiscountButton}
        buttonValue="Discount"
        showButton={openDiscount}
      />
    </div>
  );
}
function InputElements() {
  const {
    showTax,
    showShipping,
    showDiscount,

    handleDeleteDiscount,
    handleDeleteShipping,
    handleDeleteTax
  } = useContext(OpenButtonsContext);
  const context = useContext(InvoiceFooterRightContext);
  if (!context) return;
  const {
    onchangeAmountPaid,
    onchangeDiscount,
    onchangeShipping,
    onchangeTaxValue,
    shippingCost,
    amountPaid,
    tax,
    discount
  } = context;
  const balanceContext = useContext(BalanceContextApi);
  if (!balanceContext) return;
  const { subTotal, total, totalBalance } = balanceContext;

  return (
    <>
      <InputV4 label="Subtotal" value={subTotal} />

      <ButtonsElement />
      <InputV3
        onDeleteInput={handleDeleteDiscount}
        showInput={showDiscount}
        percentage
        value={discount}
        id="discount"
        inputType="number"
        label="Discount"
        deleteInput
        onChangeValue={onchangeDiscount}
      />
      <InputV3
        onDeleteInput={handleDeleteTax}
        showInput={showTax}
        percentage
        value={tax}
        id="tax"
        inputType="number"
        label="Tax"
        deleteInput
        onChangeValue={onchangeTaxValue}
      />

      <InputV3
        onDeleteInput={handleDeleteShipping}
        showInput={showShipping}
        value={shippingCost}
        id="shipping"
        inputType="number"
        label="Shipping"
        deleteInput
        onChangeValue={onchangeShipping}
      />

      <InputV4 label="Total" value={total} />
      <InputV3
        value={amountPaid}
        showInput
        id="amountpaid"
        inputType="number"
        label="Amount Paid"
        onChangeValue={onchangeAmountPaid}
      />
      <InputV4 label="Balance Due" value={totalBalance} />
    </>
  );
}

export default function InvoiceFormFooterRight() {
  return (
    <div>
      <InputElements />
    </div>
  );
}
