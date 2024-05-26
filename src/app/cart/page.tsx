import ExclusiveOfferSection from "@/components/ExclusiveOfferSection";
import Footer3 from "@/components/Footer3";
import Navbar3 from "@/components/Navbar3";
import OrderingProcedure from "@/components/basics/OrderingProcedure";
import CartSection from "@/components/cart/CartSection";
import CompanyDetailsSection from "@/components/products/CompanyDetailsSection";
import React from "react";
const dummyProductsData = {
  productData: {
    _id: "664ebe09b50922beb4709ab7",
    productName: "RKO",
    productCategory: "Furniture",
    ar7idOfTheSeller:
      "IKBjGHsUVA-McHloSVNzV-O9qcvE3dhQ-XkKO2i9gNT-PkdzOMNX7Z-KxcvLo7pKU-AYQnhyCbUG-AR7",
    price: "123",
    priceType: "Fixed",
    productHashtags: "#fighting",
    productDescription: "RKO",
    minimumQuantityToOrder: "1",
    usersAge: "All Ages",
    inStock: true,
    productOrigin: "Uni",
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/weaponizear7.appspot.com/o/files%2FRandy-Orton-RKO-Chad-Gable-March-8.webp_0.6736150801875855?alt=media&token=bd36044a-5da2-487a-904a-7e88cf37a79d",
    ar7id:
      "XFwnGWAKPQ-WltkSQEEAB-FrCl0EPU0Y-VpqcFpj6FY-SLcdsQgr1C-E4FeUIvyLP-HejrT5lenB-AR7",
    __v: 0,
  },
  sellerData: {
    _id: "66431f82438db0ec0f908139",
    userFullName: "Randy Orton",
    userEmail: "randyorton@gmail.com",
    countryCodeOfPhoneNumber: "123",
    phoneNumber: "123456789",
    accountType: "corporation",
    companyName: "Hello World",
    countryRegion: "Bangladesh",
    reasonForSignup: "for-selling",
    imponexpoAccountURL: "http://hello.com",
    ar7id:
      "IKBjGHsUVA-McHloSVNzV-O9qcvE3dhQ-XkKO2i9gNT-PkdzOMNX7Z-KxcvLo7pKU-AYQnhyCbUG-AR7",
    __v: 0,
  },
  totalLikes: 1,
  totalComments: 0,
  totalFollowersOfTheSeller: 0,
};
const page = () => {
  return (
    <>
      <Navbar3 />
      <main className="bg-[#e5e5e5]">
        <OrderingProcedure />
        <CompanyDetailsSection productData={dummyProductsData} />
        <CartSection />
        <ExclusiveOfferSection />
      </main>
      <Footer3 />
    </>
  );
};

export default page;
