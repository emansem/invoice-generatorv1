export const invoiceData = [
  {
    items: {
      id: Date.now(),
      details: "",
      quantity: 0,
      rate: 1,
      amount: 0
    },
    logo: "",
    billTo: "",
    from: "",
    SshipTo: "",
    date: Date.now(),
    paymentTerms: "",
    dueDate: "",
    poNumber: "",
    notes: "",
    terms: "",
    invoiceNumber: "",
    currency: "",
    shipping: 0,
    tax: 0,
    discount: 0,
    amountPaid: 0,
    openShiipping: false,
    openDiscount: false,
    openTax: false,
    showTax: true,
    showShiipping: true,
    showDiscount: true,
    subTotal: 0,
    total: 0,
    balance: 0,
    invoiceId: 1
  }
];
localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
console.log(invoiceData);
