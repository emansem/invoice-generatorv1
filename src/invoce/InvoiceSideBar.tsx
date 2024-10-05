import { useContext } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { CurrencyContextApi } from "../contextApi/CurrencyContextApi";

import { Link } from "react-router-dom";

const currencyData = [
  { value: "$", label: "USD" },
  { value: "€", label: "EUR" },
  { value: "£", label: "GBP" },
  { value: "CAD", label: "CAD" },
  { value: "XAF", label: "FCFA" },
  { value: "¥", label: "JPY" },
  { value: "¥", label: "CYN" }
];

function SelectCurrency() {
  const context = useContext(CurrencyContextApi);
  if (!context) return;
  const { currency, handleCurrency } = context;

  return (
    <div>
      <label className="text-xl pb-2 text-stone-400 block" htmlFor="currency">
        Currency
      </label>
      <select
        onChange={handleCurrency}
        className="bg-stone-900 w-full outline-none py-4 px-6 rounded-md text-xl text-stone-300"
        value={currency}
        name="currency"
        id="currency"
      >
        {currencyData.map((currency, index) => (
          <option key={index} value={currency.value}>
            {currency.value}
          </option>
        ))}
      </select>
    </div>
  );
}

//sidebar downlaod button
function DownloadButton() {
  return (
    <Link to="/download">
      <button className="flex gap-1 bg-[#2596BE] py-4 w-full text-center justify-center rounded-md text-xl font-semibold cursor-pointer text-stone-300 bg- items-center hover:bg-[#0b749b] transition-all ease-linear duration-300">
        <span>
          <FaArrowDown />
        </span>
        <span>Download</span>
      </button>
    </Link>
  );
}

export default function InvoiceSideBar() {
  return (
    <div className="flex gap-y-8 flex-col">
      <DownloadButton />
      <SelectCurrency />
    </div>
  );
}
