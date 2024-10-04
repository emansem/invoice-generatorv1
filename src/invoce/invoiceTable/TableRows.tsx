import { ContextTableApi } from "../../contextApi/ContextTableApi";
import { CurrencyContextApi } from "../../contextApi/CurrencyContextApi";
import DeleteButton from "../deleteButton/DeleteButton";
import { useContext } from "react";

export default function TableRows() {
  const context = useContext(ContextTableApi);
  if (!context) return;
  const {
    rows,
    handleOnchangeDetails,
    handleOnchangeRate,
    handleOnchangeQuantity
  } = context;
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
        {rows.map((row, index) => (
          <tr key={index}>
            <td>
              <input
                className="tableInput mr-2"
                type="text"
                value={row.details}
                onChange={(e) => handleOnchangeDetails(e, index)}
              />
            </td>
            <td>
              <input
                className="tableInput"
                type="number"
                value={row.quantity}
                onChange={(e) => handleOnchangeQuantity(e, index)}
              />
            </td>
            <td>
              <div className="tableInput flex items-center">
                <span className="mr-2 ">{currency}</span>
                <input
                  className="outline-none w-full bg-transparent"
                  type="number"
                  value={row.rate}
                  onChange={(e) => handleOnchangeRate(e, index)}
                />
              </div>
            </td>
            <td>
              <div className="flex items-center pl-4">
                <span className="mr-2">{currency}</span>
                <span>{row.rate * row.quantity}</span>
              </div>
            </td>
            <td>
              <DeleteButton />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
