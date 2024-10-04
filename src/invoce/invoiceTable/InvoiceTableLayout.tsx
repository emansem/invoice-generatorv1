import React, { useEffect, useContext, useState } from "react";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import { ContextTableApi } from "../../contextApi/ContextTableApi";
function AddNewItemButton() {
  const context = useContext(ContextTableApi);
  if (!context) return;
  const { handleAndNewRow } = context;
  return (
    <button onClick={handleAndNewRow} className="newRowBUtton">
      Add new item
    </button>
  );
}

export default function InvoiceTableLayout() {
  return (
    <div className="w-full my-10 ">
      <table className="table-fixed w-full rounded-md">
        <TableHeader />
        <TableRows />
      </table>
      <AddNewItemButton />
    </div>
  );
}
