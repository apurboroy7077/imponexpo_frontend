import Link from "next/link";
import React from "react";

const SettingsAdminDashboard3 = () => {
  return (
    <div className="bg-[#f1f5f9] p-4 lg:px-12 lg:py-10 flex justify-center min-h-full  max-h-fit">
      <div className="w-full max-w-[65rem] ">
        <div className="md:flex md:justify-between">
          <div className="text-xl font-bold opacity-[0.8]">Profile</div>
          <div className="text-sm font-medium mt-1">
            <span className="opacity-[0.6]">Dashboard </span>
            <span className="opacity-[0.6]">/ </span>
            <span className="opacity-[0.8]">Profile </span>
          </div>
        </div>
        <div className="lg:flex lg:gap-5 lg:justify-between">
          <div className="lg:w-[57%] mt-3 bg-[white] rounded overflow-hidden py-7 lg:py-10">
            <div className="px-5 lg:px-8 font-medium opacity-[0.8] lg:text-lg">
              Personal Information
            </div>
            <hr className="mt-5 lg:mt-7" />
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:px-8">
              <div className="px-5 lg:px-0 mt-5 lg:mt-7">
                <div className="text-sm">Full Name</div>
                <div className="mt-3 relative">
                  <input
                    className="w-full border-none outline-[black] bg-[#eff4fb] py-3 px-3 pl-[2.7rem] rounded"
                    type="text"
                  />
                  <img
                    className="w-[1.1rem] top-[0.8rem] left-[0.8rem] absolute"
                    src="/icons/user.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="px-5 lg:px-0 mt-5 lg:mt-7">
                <div className="text-sm">Full Name</div>
                <div className="mt-3 relative">
                  <input
                    className="w-full border-none outline-[black] bg-[#eff4fb] py-3 px-3 pl-[2.7rem] rounded"
                    type="text"
                  />
                  <img
                    className="w-[1.1rem] top-[0.8rem] left-[0.8rem] absolute"
                    src="/icons/user.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="px-5 lg:px-8 mt-5 lg:mt-7">
              <div className="text-sm">Email Address</div>
              <div className="mt-3 relative">
                <input
                  className="w-full border-none outline-[black] bg-[#eff4fb] py-3 px-3 pl-[2.7rem] rounded"
                  type="text"
                />
                <img
                  className="w-[1.1rem] top-[0.8rem] left-[0.8rem] absolute"
                  src="/icons/user.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="px-5 lg:px-8 mt-5 lg:mt-7">
              <div className="text-sm">Username</div>
              <div className="mt-3 relative">
                <input
                  className="w-full border-none outline-[black] bg-[#eff4fb] py-3 px-3 pl-[2.7rem] rounded"
                  type="text"
                />
                <img
                  className="w-[1.1rem] top-[0.8rem] left-[0.8rem] absolute"
                  src="/icons/user.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="px-5 lg:px-8 mt-5 lg:mt-7">
              <div className="text-sm">Bio</div>
              <div className="mt-3 relative">
                <textarea className="w-full border-none outline-[black] bg-[#eff4fb] py-3 px-3 pl-[2.7rem] rounded" />
                <img
                  className="w-[1.1rem] top-[0.8rem] left-[0.8rem] absolute"
                  src="/icons/user.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] mt-3 bg-[white] rounded overflow-hidden py-7 lg:py-10">
            <div className="px-5 lg:px-8 font-medium opacity-[0.8] lg:text-lg">
              Your Photo
            </div>
            <hr className="mt-5 lg:mt-7" />
            <div className="mt-7 px-5 flex items-center gap-3">
              <div className="w-[4rem] h-[4rem]">
                <img
                  className="w-full h-full object-cover object-center rounded-full"
                  src="/images/messi.jpg"
                  alt=""
                />
              </div>
              <div>
                <div className="font-medium opacity-[0.8]">Edit Your Photo</div>
                <div className="flex gap-3 mt-2">
                  <button className="text-xs font-medium opacity-[0.8]">
                    Delete
                  </button>
                  <button className="text-xs font-medium opacity-[0.8]">
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="px-5 lg:px-8 mt-7 lg:mt-7">
              <div className="text-sm font-medium opacity-[0.8]">
                Choose an Image
              </div>
              <div className="mt-3 relative">
                <input
                  className="w-full border-none outline-[black] bg-[#eff4fb] py-3 px-3  rounded"
                  type="file"
                />
              </div>
            </div>
            <div className="px-5 lg:px-8 mt-5 lg:mt-7 text-end">
              <button className="bg-[#3c50e0] px-5 py-1 text-[white] rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsAdminDashboard3;
