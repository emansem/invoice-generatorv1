import React, { useContext } from "react";
import DeleteButton from "../deleteButton/DeleteButton";
import { CurrencyContextApi } from "../../contextApi/CurrencyContextApi";
interface InputProps {
  label: string;
  value: string | number;
  id?: string;
  deleteInput?: boolean;
  textArea?: boolean;
  percentage?: boolean;
  inputType?: string;
  showInput?: boolean;
  onDeleteInput?: (e: React.MouseEvent<HTMLParagraphElement>) => void;

  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onchangeTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function InputV1({
  label,
  value,
  textArea,
  id,
  onchangeTextArea,
  onChangeValue
}: InputProps) {
  return (
    <>
      {!textArea ? (
        <div className="flex flex-col">
          <label className="inputlabel" htmlFor={id}>
            {label}
          </label>
          <input
            id={id}
            className="inputV2"
            type="text"
            value={value}
            onChange={onChangeValue}
          />
        </div>
      ) : (
        <div className="flex flex-col">
          <label className="inputlabel" htmlFor={id}>
            {label}
          </label>
          <textarea
            id={id}
            value={value}
            className="inputV2"
            onChange={onchangeTextArea}
          ></textarea>
        </div>
      )}
    </>
  );
}

interface SingleInputPros {
  value: string;
  onChangeAuthor: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SingleInput({ value, onChangeAuthor }: SingleInputPros) {
  return (
    <div className="flex flex-col">
      <input
        className="text-stone-500 bg-[#242424] border-2 rounded-md border-stone-500 px-4 py-3 text-[16px] w-full"
        type="text"
        value={value}
        onChange={onChangeAuthor}
      />
    </div>
  );
}

export function InputV2({
  label,
  id,
  value,
  onChangeValue,
  inputType
}: InputProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 text-right ">
        <label className="inputlabel text-right" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="w-[200px]">
        <input
          id={id}
          className="text-right bg-[#242424] mt-3 border-2 text-stone-500 rounded-md border-stone-500 px-4 py-2 text-[16px] w-full"
          type={`${inputType}`}
          value={value}
          onChange={onChangeValue}
        />
      </div>
    </div>
  );
}

export function InputV3({
  label,
  id,
  value,
  onChangeValue,
  showInput,
  inputType,
  percentage,
  deleteInput,
  onDeleteInput
}: InputProps) {
  const contextCurency = useContext(CurrencyContextApi);
  if (!contextCurency) return;
  const { currency } = contextCurency;
  const show = showInput ? "flex" : "hidden";
  return (
    <div className={`${show} items-center gap-2`}>
      <div className="flex-1 text-right ">
        <label className="inputlabel text-right" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className={`inputV4`}>
        {!percentage && <span className="pr-1">{currency}</span>}
        <input
          id={id}
          className="w-full bg-transparent  outline-none"
          type={`${inputType}`}
          value={value}
          onChange={onChangeValue}
        />
        {percentage && <span>%</span>}
      </div>
      {deleteInput && <DeleteButton onDelete={onDeleteInput} />}
    </div>
  );
}
export function InputV4({ label, value }: InputProps) {
  const contextCurency = useContext(CurrencyContextApi);
  if (!contextCurency) return;
  const { currency } = contextCurency;
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 text-right ">
        <label className="text-right inputlabel">{label}</label>
      </div>
      <div className="w-[200px] flex items-center text-right  mt-3  text-stone-500 rounded-md  px-4 py-3 text-xl ">
        <span className="w-full text-[16px] bg-transparent outline-none ">
          <span className="p-1">{currency}</span>
          {value}
        </span>
      </div>
    </div>
  );
}
