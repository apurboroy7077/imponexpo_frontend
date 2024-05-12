import React from "react";
import TheSection from "../TheSection";
import ProductUploadForm from "./ProductUploadForm";

const RequestForQuotationSection = () => {
  return (
    <TheSection>
      <div className="md:flex md:justify-between">
        <div className="w-full">
          <ProductUploadForm />
        </div>
      </div>
    </TheSection>
  );
};

export default RequestForQuotationSection;
