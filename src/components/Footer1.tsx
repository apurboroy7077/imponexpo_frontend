import React from "react";

const Footer1 = () => {
  return (
    <footer>
      <div className=" px-2 py-7 lg:py-16   flex items-center justify-center">
        <div className="w-full max-w-[100rem] ">
          <div>
            <div className="md:px-[3rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {Array.from({ length: 5 }).map(() => {
                return (
                  <div key={Math.random().toString()}>
                    <div className="text-[#333333] font-bold text-lg md:text-xl md:mb-2">
                      Customer Care
                    </div>
                    <div className="text-[#707070]">Help Center</div>
                    <div className="text-[#707070]">How to Buy</div>
                    <div className="text-[#707070]">Group Import</div>
                    <div className="text-[#707070]">Returns & Refunds</div>
                    <div className="text-[#707070]">ImpoNexpo Shop</div>
                    <div className="text-[#707070]">Contact Us</div>
                    <div className="text-[#707070]">Purchase Protection</div>
                    <div className="text-[#707070]">Others</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mt-5 md:mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-4 justify-center items-center  gap-10">
              <div>
                <div className="flex items-center justify-center">
                  <img className="w-[80%]" src="/icons/qrcode.svg" alt="" />
                </div>
              </div>
              <div>
                <div className="text-[#333333] font-bold text-lg md:text-xl md:mb-3">
                  Follow Us
                </div>
                <div>
                  <div className="flex gap-3 mt-2">
                    <div>
                      <img
                        className="w-[2.5rem]"
                        src="/icons/facebook-2.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-[2.5rem]"
                        src="/icons/skype.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-[2.5rem]"
                        src="/icons/instagram.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-[2.5rem]"
                        src="/icons/google-play.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-[2.5rem]"
                        src="/icons/pinterest.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[#333333] font-bold text-lg md:text-xl md:mb-3">
                  Payment Methods
                </div>
                <div>
                  <div className="flex gap-3 mt-2">
                    <div>
                      <img
                        className="w-[3rem]"
                        src="/icons/cc-paypal.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-[3rem]"
                        src="/icons/cc-visa.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-[3rem]"
                        src="/icons/cc-discover.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-[3rem]"
                        src="/icons/cc-mastercard.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[#333333] font-bold text-lg md:text-xl md:mb-3">
                  Download Our App
                </div>
                <div>
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-[7rem]"
                        src="/icons/get-in-appstore-2.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-[7rem]"
                        src="/icons/get-in-google-play-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;

// {/* <div className="flex gap-5 flex-col md:flex-row">
//                 <div className="md:w-[33%]">
//                   <div className="text-[#333333] font-bold">Follow Us</div>
//                   <div>
//                     <div className="grid grid-cols-5 gap-2 mt-2">
//                       <div>
//                         <img src="/icons/facebook-2.svg" alt="" />
//                       </div>
//                       <div>
//                         <img src="/icons/skype.svg" alt="" />
//                       </div>
//                       <div>
//                         <img src="/icons/instagram.svg" alt="" />
//                       </div>
//                       <div>
//                         <img src="/icons/google-play.svg" alt="" />
//                       </div>
//                       <div>
//                         <img src="/icons/pinterest.svg" alt="" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="md:w-[33%]">
//                   <div className="text-[#333333] font-bold">
//                     Payment Methods
//                   </div>
//                   <div>
//                     <div className="grid grid-cols-4 gap-2 mt-2">
//                       <div>
//                         <img src="/icons/cc-paypal.svg" alt="" />
//                       </div>
//                       <div>
//                         <img src="/icons/cc-visa.svg" alt="" />
//                       </div>
//                       <div>
//                         <img src="/icons/cc-discover.svg" alt="" />
//                       </div>
//                       <div>
//                         <img src="/icons/cc-mastercard.svg" alt="" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="md:w-[33%]">
//                   <div className="text-[#333333] font-bold">
//                     Download Our App
//                   </div>
//                   <div>
//                     <div className="grid grid-cols-2 gap-2 mt-2">
//                       <div>
//                         <img src="/icons/get-it-on-google-play-2.svg" alt="" />
//                       </div>
//                       <div>
//                         <img
//                           src="/icons/download-on-the-app-store-2.svg"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
