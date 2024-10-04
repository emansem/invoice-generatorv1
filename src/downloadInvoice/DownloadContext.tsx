// Import necessary libraries
import React, { createContext, useState } from "react";
import html2pdf from "html2pdf.js";

// Define the props for the context
interface DownloadProps {
  elementId: string;
  handlePrint: () => void;
}

export const DownloadContext = createContext<DownloadProps | null>(null);

// Define the provider for the context
export default function DownloadContextProvider({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [elementId] = useState("element-to-print");

  function handlePrint() {
    const printElement = document.getElementById(elementId);
    if (printElement) {
      html2pdf(printElement);
    }
  }

  return (
    <DownloadContext.Provider value={{ elementId, handlePrint }}>
      {children}
    </DownloadContext.Provider>
  );
}
