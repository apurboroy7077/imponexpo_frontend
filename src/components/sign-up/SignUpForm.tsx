"use client";
import { serverURL } from "@/data/EnvironmentVariables";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
type signUpStatusType = "INCOMPLETE" | "FAILED" | "SUCCESSFUL" | "ONGOING";

const SignUpForm = () => {
  const [signUpStatus, setSignUpStatus] = useState(
    "INCOMPLETE" as signUpStatusType
  );
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const userEmail = formData.get("user-email") as string;
    const phoneCountryCode = formData.get("user-phone-country-code") as string;
    const phoneNumber = formData.get("user-phone-number") as string;
    const password = formData.get("user-password") as string;
    const confirmPassword = formData.get("user-confirm-password") as string;
    const accountType = formData.get("reason-of-creating-account") as string;
    const companyName = formData.get("user-company-name") as string;
    const countryRegion = formData.get("user-country-or-region-name") as string;
    const reasonForSignup = formData.get("reason-for-signup") as string;
    const imponexpoAccountURL = formData.get(
      "user-imponexpo-account-url"
    ) as string;
    const agree = formData.get("agree");
    if (firstName.length < 3) {
      toast.error("First Name Must be Atleast 3 Characters Long.");
      return;
    } else if (lastName.length < 2) {
      toast.error("Last Name Must be Atleast 2 Characters Long.");
      return;
    } else if (password.length < 7) {
      toast.error("Password Must be Atleast 7 Characters Long!");
      return;
    } else if (password !== confirmPassword) {
      toast.error(
        "Please Retype your Password Correctly in Confirm Password Field!"
      );
      return;
    }
    const dataForServer = {
      firstName,
      lastName,
      userEmail,
      phoneCountryCode,
      phoneNumber,
      password,
      accountType,
      companyName,
      countryRegion,
      reasonForSignup,
      imponexpoAccountURL,
    };
    setSignUpStatus("ONGOING");
    axios
      .post(`${serverURL}/authentication/sign-up`, dataForServer)
      .then((response) => {
        console.log(response);
        setSignUpStatus("SUCCESSFUL");
        toast("Sign Up Successful, Redirecting to Login Page.");
        setTimeout(() => {
          router.push("/sign-in");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setSignUpStatus("FAILED");
        const errorMessageFromServer = error.response.data;
        toast(errorMessageFromServer);
      });
  };
  return (
    <>
      {signUpStatus !== "SUCCESSFUL" && (
        <form className="md:w-[40%] " onSubmit={handleSignUp}>
          <div className="md:bg-[white] rounded-xl md:rounded-tl-none md:rounded-bl-none flex justify-center">
            <div className=" bg-[white] md:my-10  border-[#00baf2] rounded-lg  border-[1px] px-3 lg:px-7 md:mx-5 py-3 lg:py-7 lg:pb-9 ">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[#1d5dc7] font-bold">Sign Up</div>
                  </div>
                  <div>
                    <img
                      className="w-[3rem]"
                      src="/icons/demo-logo.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm mt-3 text-center font-medium">
                  Creating an Account on Imponexpo is{" "}
                  <span className="text-[#1d5dc7] font-bold">fast</span>,{" "}
                  <span className="text-[#00baf2] font-bold">Easy</span> and{" "}
                  <span className="text-[#f60e0e] font-bold">for free!</span>
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <input
                    type="text"
                    className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                    placeholder="First Name"
                    name="first-name"
                    required
                  />
                  <img
                    className="w-[1rem] absolute top-[9px] left-[8px]"
                    src="/icons/id-badge-regular.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <input
                    type="text"
                    className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                    placeholder="Last Name"
                    name="last-name"
                    required
                  />
                  <img
                    className="w-[1rem] absolute top-[9px] left-[8px]"
                    src="/icons/id-badge-regular.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <input
                    type="email"
                    className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                    placeholder="Email Address"
                    name="user-email"
                    required
                  />
                  <img
                    className="w-[1rem] absolute top-[12px] left-[8px]"
                    src="/icons/envelope-regular.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="w-[35%]">
                    <div className="relative mt-5">
                      <input
                        type="text"
                        className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                        placeholder="Country Code"
                        name="user-phone-country-code"
                      />
                      <img
                        className="w-[1rem] absolute top-[12px] left-[8px]"
                        src="/icons/earth-americas-solid.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-[65%]">
                    <div className="relative mt-5">
                      <input
                        type="text"
                        className=" w-full text-sm py-2 px-2 border-[#00baf2] border-[2px] rounded"
                        placeholder="Mobile Number"
                        name="user-phone-number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <input
                    type="password"
                    className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                    placeholder="Password"
                    name="user-password"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <input
                    type="password"
                    className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                    placeholder="Please Confirm Password"
                    name="user-confirm-password"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mt-5">
                  Creating Account For{" "}
                  <span className="mx-3">
                    <input
                      type="radio"
                      className="mr-1"
                      value="corporation"
                      name="reason-of-creating-account"
                      required
                    />
                    Corporation
                  </span>
                  <span>
                    <input
                      type="radio"
                      className="mr-1"
                      value="individual"
                      name="reason-of-creating-account"
                      required
                    />
                    Individual
                  </span>
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <input
                    type="text"
                    className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                    placeholder="Name of Company, if any"
                    name="user-company-name"
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <input
                    type="text"
                    className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                    placeholder="Country/Region"
                    name="user-country-or-region-name"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <select
                    className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                    name="reason-for-signup"
                    required
                  >
                    <option value="" disabled selected hidden>
                      Reason for Signup
                    </option>
                    <option value="for-purchasing">For Purchasing</option>
                    <option value="for-selling">For Selling</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="relative mt-5">
                  <input
                    type="url"
                    className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                    placeholder="Imponexpo.com/@......."
                    name="user-imponexpo-account-url"
                  />
                  <img
                    className="w-[1rem] absolute top-[9px] left-[8px]"
                    src="/icons/id-badge-regular.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="relative mt-5 text-sm font-medium">
                  <input type="radio" name="agree" required /> By Signing up,
                  you agree to our{" "}
                  <span className="text-[#f74446] font-bold">
                    Terms Of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-[#f74446] font-bold">
                    Privacy Policy.{" "}
                  </span>
                </div>
              </div>
              {signUpStatus !== "ONGOING" && (
                <div>
                  <div className="relative mt-5 text-sm font-medium">
                    <button
                      className="border-[#00baf2] border-[2px] w-full py-2 rounded-lg text-[#1d5dc7] hover:scale-[1.01] active:scale-[1]"
                      type="submit"
                    >
                      Continue to Sign Up{" "}
                      <img
                        className="w-[1rem] inline"
                        src="/icons/circle-right-regular-2.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              )}
              {signUpStatus === "ONGOING" && (
                <div>
                  <div className="relative mt-5 text-sm font-medium">
                    <button
                      className="border-[#00baf2] border-[2px] w-full py-2 rounded-lg text-[#1d5dc7] hover:scale-[1.01] active:scale-[1]"
                      type="submit"
                    >
                      Signing-Up
                      <img
                        className="w-[1.1rem] inline ml-3 animate-spin"
                        src="/icons/sector-2/spinner-solid-green.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      )}
      {signUpStatus === "SUCCESSFUL" && (
        <div className="md:w-[40%] min-h-full ">
          <div className="flex items-center justify-center min-h-full py-20 bg-[white]">
            <div className="text-[#1d5dc7] font-bold">
              Sign Up Successful{" "}
              <div className="inline w-[3rem] ml-3 bg-green-500 px-2 py-5 rounded-full">
                <img
                  className="inline w-[3rem]"
                  src="/icons/checked-white.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
