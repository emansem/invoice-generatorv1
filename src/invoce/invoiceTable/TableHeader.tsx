import React from "react";

export default function TableHeader() {
  return (
    <thead className="w-full bg-stone-950 rounded-md">
      <tr>
        <th>Items</th>
        <th>Quantity</th>
        <th>Rate</th>
        <th>Amount</th>
        <th></th>
      </tr>
    </thead>
  );
}
