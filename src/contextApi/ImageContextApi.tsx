import { invoiceDataContext } from "../contextApi/InvoiceData";
import React, { createContext, useState, useContext, useEffect } from "react";

// Define the type for the context value
interface ImageContextType {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string;
  imageUrl: string;
}
const url = "https://api.cloudinary.com/v1_1/dyooluvn7/image/upload";
// Set the default value for the context
export const ImageContextApi = createContext<ImageContextType | null>(null);

export default function ImageContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageUrl, setimageUrl] = useState<string>("");
  const { setinvoiceData, invoiceData } = useContext(invoiceDataContext);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      uploadImage(file);
    }
  };
  useEffect(() => {
    if (invoiceData.length > 0) {
      setimageUrl(invoiceData[0].logo);
    }
  }, [invoiceData]);

  // upload the image to cloudinary
  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_preset");
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      setinvoiceData((invoice) =>
        invoice.map((invoice) => ({ ...invoice, logo: data.url }))
      );
    } catch (error) {
      console.log("image upload failed", error);
    }
  }

  return (
    <ImageContextApi.Provider
      value={{ handleFileChange, imagePreview, imageUrl }}
    >
      {children}
    </ImageContextApi.Provider>
  );
}
