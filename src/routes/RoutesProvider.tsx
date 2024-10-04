import BalanceContextApiProvider from "../contextApi/BalanceContextApi";
import ContextTableApiProvider from "../contextApi/ContextTableApi";
import HeaderContextApiProvider from "../contextApi/HeaderContextApi";
import ImageContextProvider from "../contextApi/ImageContextApi";
import InvoiceDataProvider from "../contextApi/InvoiceData";
import InvoiceFooterContextProvider from "../contextApi/InvoiceFooterContext";
import InvoiceFooterRightContextProvider from "../contextApi/InvoiceFooterRightContext";

import OpenButtonsProvider from "../contextApi/OpenButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PreviewInvoice from "../pages/PreviewInvoice";
import Header from "../header/Header";
import CurrencyContextApiProvider from "../contextApi/CurrencyContextApi";
import DownloadContextProvider from "../downloadInvoice/DownloadContext";
import Download from "../pages/Download";

export default function RoutesProvider() {
  return (
    <DownloadContextProvider>
      <InvoiceDataProvider>
        <CurrencyContextApiProvider>
          <BalanceContextApiProvider>
            <InvoiceFooterContextProvider>
              <ContextTableApiProvider>
                <HeaderContextApiProvider>
                  <OpenButtonsProvider>
                    <ImageContextProvider>
                      <InvoiceFooterRightContextProvider>
                        <Router>
                          <Routes>
                            <Route path="/" element={<Header />}>
                              <Route path="/" element={<HomePage />} />
                              <Route
                                path="/preview"
                                element={<PreviewInvoice />}
                              />
                              <Route path="/download" element={<Download />} />
                            </Route>
                          </Routes>
                        </Router>
                      </InvoiceFooterRightContextProvider>
                    </ImageContextProvider>
                  </OpenButtonsProvider>
                </HeaderContextApiProvider>
              </ContextTableApiProvider>
            </InvoiceFooterContextProvider>
          </BalanceContextApiProvider>
        </CurrencyContextApiProvider>
      </InvoiceDataProvider>
    </DownloadContextProvider>
  );
}
