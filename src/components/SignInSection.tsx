import React from "react";
import TheSection from "./TheSection";
import SignInForm from "./sign-in/SignInForm";

const SignInSection = () => {
  return (
    <TheSection>
      <div className="flex justify-center items-center">
        <div className=" bg-[#bcebfa] md:my-5  border-[#00baf2] rounded-lg  border-[1px] px-3 md:px-7 md:mx-5 py-3 md:py-7 pb-7 md:pb-10 lg:pb-7 md:w-[35rem]">
          <SignInForm />
        </div>
      </div>
    </TheSection>
  );
};

export default SignInSection;
