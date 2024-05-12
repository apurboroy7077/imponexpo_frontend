"use client";
import {
  KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE,
  SUB_ADDRESS_OF_UPLOAD_PRODUCTS_API,
  serverURL,
} from "@/data/EnvironmentVariables";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
type productUploadStatusType =
  | "INCOMPLETE"
  | "SUCCESSFUL"
  | "FAILED"
  | "ONGOING";
const ProductUploadForm = () => {
  const [productUploadStatus, setProductUploadStatus] = useState(
    "INCOMPLETE" as productUploadStatusType
  );
  const handleProductUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productName = formData.get("productName");
    const productCategory = formData.get("productCategory");
    const productPrice = formData.get("productPrice");
    const priceType = formData.get("priceType");
    const productDescription = formData.get("productDescription");
    const productImage = formData.get("productImage") as File;
    const productHashtags = formData.get("productHashtags");
    const minimumQuantity = formData.get("minimumQuantity");
    const ageOfUsers = formData.get("ageOfUsers");
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    console.log(authenticationToken);
    if (authenticationToken) {
      formData.append("authenticationToken", authenticationToken);
    }
    const productImageSize = productImage.size / 1024;
    if (productImageSize > 500) {
      toast.error("Image's Size Can not Exceed 500 KB");
      return;
    }
    setProductUploadStatus("ONGOING");
    axios
      .post(`${serverURL}${SUB_ADDRESS_OF_UPLOAD_PRODUCTS_API}`, formData)
      .then((response) => {
        console.log(response);
        setProductUploadStatus("SUCCESSFUL");
      })
      .catch((error) => {
        console.log(error);
        setProductUploadStatus("FAILED");
        toast.error("Failed To Upload");
        setProductUploadStatus("FAILED");
      });
  };
  return (
    <>
      {productUploadStatus !== "SUCCESSFUL" && (
        <form onSubmit={handleProductUpload}>
          <div>
            <div className=" text-[#1d5ec9]  md:py-2 lg:py-3 mb-5 md:mb-7 lg:mb-10  font-bold text-lg md:text-2xl lg:text-3xl">
              Upload a Product
            </div>
          </div>
          <div>
            <div className="     font-bold text-base md:text-xl lg:text-2xl">
              Basic Product Information
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div>
                <div className="md:grid md:grid-cols-2 gap-3 lg:gap-7">
                  <div>
                    <div>
                      <div className="text-sm">
                        Product Name <span className="text-[red]">*</span>
                      </div>
                    </div>
                    <div>
                      <input
                        className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                        type="text"
                        name="productName"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-6 md:mt-0">
                      <div>
                        <div className="text-sm">Product Category</div>
                      </div>
                      <div>
                        <select
                          name="productCategory"
                          className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                          required
                        >
                          <option value="" disabled selected hidden>
                            Please Select a Category
                          </option>
                          <option value="Furniture">Furnitures</option>
                          <option value="Cosmetics">Cosmetics</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Price</div>
                  </div>
                  <div>
                    <input
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="text"
                      name="productPrice"
                      placeholder="USD"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6 ">
                  <div>
                    <div className="text-sm">Price Type</div>
                  </div>
                  <div>
                    <select
                      name="priceType"
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      required
                    >
                      <option disabled selected>
                        Please Select Price Type
                      </option>
                      <option>Fixed</option>
                      <option>Negotiable</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Description</div>
                  </div>
                  <div>
                    <textarea
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      name="productDescription"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* <div>
            <div className="mt-6">
              <div>
                <div className="text-sm">Upload Photos</div>
              </div>
              <div>
                <div className="border-[2px] py-5 border-[#b1bfd0] border-dashed mt-3 ">
                  <div>
                    <input
                      type="file"
                      className="hidden mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                    />
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <img
                        className="w-[50%] md:w-[30%] lg:w-[10%]"
                        src="/icons/images.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" text-sm text-center font-medium mt-2">
                      Drop your images here, or browse
                    </div>
                  </div>
                  <div>
                    <div className="text-[#969db2] text-center text-xs mt-2">
                      Supports PNG, JPG, JPEG, WEBP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Add a Picture Of Your Product</div>
                  </div>
                  <div>
                    <input
                      type="file"
                      className=" bg-[#f1f4f9] mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      name="productImage"
                      required
                    />
                  </div>
                  {/* <div>
                <div className="mt-2">
                  <button className="text-sm rounded px-2 py-1 mr-2 border-[1px] border-[#d6d6d6]">
                    Cancel
                  </button>
                  <button className="bg-[#1d5ec9] text-[white] text-sm rounded px-2 py-1 mr-2 border-[1px] border-[#1d5ec9]">
                    Done
                  </button>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <div>
                <div>
                  <div className="text-sm">
                    Product Hashtags <span className="text-[red]">*</span>
                  </div>
                </div>
                <div>
                  <input
                    className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                    type="text"
                    placeholder="Enter Hashtags related to your product"
                    name="productHashtags"
                  />
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">
                      Enter Minimum Amount of Quantity to Place Order
                    </div>
                  </div>
                  <div>
                    <input
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="text"
                      name="minimumQuantity"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Age Of Users</div>
                  </div>
                  <div>
                    <select
                      name="ageOfUsers"
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      required
                    >
                      <option value="" disabled selected hidden>
                        Please Select Age Of People Who will Use it
                      </option>
                      <option value="All Ages">All ages</option>
                      <option value="Kids">Kids</option>
                      <option value="Juvenile">Juvenile</option>
                      <option value="Adults">Adults</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">
                      Enter Origin Country Of the Product
                    </div>
                  </div>
                  <div>
                    <input
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="text"
                      name="originCountry"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
        <div className="mt-6 font-bold text-base md:text-xl lg:text-2xl">
          PERSONAL/COMPANY DETAILS
        </div>
      </div>
      <div>
        <div className="mt-5">
          <div>
            <div>
              <div className="text-sm">
                Full Name <span className="text-[red]">*</span>
              </div>
            </div>
            <div>
              <input
                className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                type="text"
                placeholder="Select Shipping Method"
              />
            </div>
          </div>

          <div>
            <div className="md:grid md:grid-cols-2 gap-3 lg:gap-7">
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Mobile Number</div>
                  </div>
                  <div>
                    <input
                      className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="tel"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Company Name</div>
                  </div>
                  <div>
                    <input
                      className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="text"
                      placeholder="Company Name(if any)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-6">
              <div>
                <div className="text-sm">Email</div>
              </div>
              <div>
                <input
                  className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                  type="email"
                  placeholder="Company Name(if any)"
                />
              </div>
              <div>
                <div className="mt-3 ">
                  <button className="bg-[#1d5ec9] text-[white] text-sm rounded-lg px-3 py-2 mr-2 border-[1px] border-[#1d5ec9]">
                    Please Verify Your Email
                  </button>
                </div>
              </div>
              <div>
                <div className="text-sm mt-2 font-medium opacity-[0.8]">
                  Manufacturers, Brands and Suppliers want to work with Verified
                  Buyers.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6">
              <div>
                <div className="text-sm">Website</div>
              </div>
              <div>
                <input
                  className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                  type="url"
                  placeholder="Website(if any)"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mt-3">
              <div>
                <span className="text-sm font-medium opacity-[0.8]">
                  Were you referred by our Affiliate Partner?
                </span>
              </div>
              <div>
                <div className="mt-2">
                  <button className="text-sm rounded px-2 py-1 mr-2 border-[1px] border-[#d6d6d6]">
                    No
                  </button>
                  <button className="bg-[#1d5ec9] text-[white] text-sm rounded px-2 py-1 mr-2 border-[1px] border-[#1d5ec9]">
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-7 text-sm">
          By registering, you agree to our{" "}
          <span className="text-[#4cb5f1] font-bold underline">
            Terms and Conditions
          </span>{" "}
          &{" "}
          <span className="text-[#4cb5f1] font-bold underline">
            Privacy Policy
          </span>{" "}
          And you agree to share your Business Card with our Trusted, Reliable
          and certified Suppliers.
        </div>
      </div> */}

          {productUploadStatus === "INCOMPLETE" && (
            <div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-[#1d5ec9] rounded-2xl text-[white] text-lg rounded px-5 py-2 mr-2 border-[1px] border-[#1d5ec9]"
                >
                  Upload Product
                </button>
              </div>
            </div>
          )}
          {productUploadStatus === "ONGOING" && (
            <div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-[#1d5ec9] rounded-2xl text-[white] text-lg rounded px-5 py-2 mr-2 border-[1px] border-[#1d5ec9]"
                >
                  Uploading
                  <img
                    className="inline w-[1.5rem] ml-2 animate-spin"
                    src="/icons/sector-2/spinner-solid-white.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          )}
          {productUploadStatus === "FAILED" && (
            <div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-[#1d5ec9] rounded-2xl text-[white] text-lg rounded px-5 py-2 mr-2 border-[1px] border-[#1d5ec9]"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </form>
      )}
      {productUploadStatus === "SUCCESSFUL" && (
        <div>
          <div className="flex items-center justify-center">
            <div>
              <div>
                Product Uploaded Successfully{" "}
                <img
                  className=" inline w-[2rem] ml-2"
                  src="/icons/sector-2/circle-check-solid-green.svg "
                  alt=""
                />
              </div>
              <div>
                <div className="mt-5 lg:mt-7 text-center">
                  <button
                    type="submit"
                    className="bg-[#1d5ec9] text-sm  text-[white] lg:text-lg rounded px-5 py-2 mr-2 border-[1px] border-[#1d5ec9] active:scale-[0.95]"
                    onClick={() => {
                      setProductUploadStatus("INCOMPLETE");
                    }}
                  >
                    Upload Another Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductUploadForm;
