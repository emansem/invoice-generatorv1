import React, { useContext } from "react";
import { useState } from "react";
import InputV1, { InputV2, SingleInput } from "../Inputs/Input";
import { HeaderContextApi } from "../../contextApi/HeaderContextApi";
function InputLeft() {
  const context = useContext(HeaderContextApi);
  if (!context) {
    return;
  }
  const {
    billValue,
    handleChangeBillValue,
    shipToValue,
    handleChangeShipToValue,
    author,
    handleChangeAuthor
  } = context;
  return (
    <div>
      <SingleInput value={author} onChangeAuthor={handleChangeAuthor} />
      <InputV1
        inputType="text"
        textArea={false}
        id="billTo"
        label="Bill To"
        value={billValue}
        onChangeValue={handleChangeBillValue}
      />
      <InputV1
        inputType="text"
        textArea={false}
        id="shipTo"
        label="Ship To"
        value={shipToValue}
        onChangeValue={handleChangeShipToValue}
      />
    </div>
  );
}

export default function HeaderFormLeft() {
  return (
    <div>
      <InputLeft />
    </div>
  );
}
