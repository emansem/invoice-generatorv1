import React from "react";
interface invoceDataHeaderProps {
  label: string;
  value: string | number | any;
  isBalance?: boolean;
}

export default function InvoiceBillingElement({
  value,
  label,
  isBalance
}: invoceDataHeaderProps) {
  const balanceBg = isBalance && "bg-stone-300";
  const balanceText = isBalance && "text-stone-700 font-bold";
  return (
    <div
      className={`flex ${balanceBg} flex-col  justify-between py-1 px-3 rounded-md`}
    >
      <div className="flex items-center justify-between gap-4 whitespace-nowrap">
        <span
          className={`block text-right  text-stone-500  ${balanceText} text-[16px]`}
        >
          {label}:
        </span>
        <span className={` text-stone-500 ${balanceText} text-[16px]`}>
          {value}
        </span>
      </div>
    </div>
  );
}
