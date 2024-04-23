import React from "react";
import TheSection from "../TheSection";

const ChatSection = () => {
  return (
    <TheSection>
      <div className="flex flex-col md:flex-row md:justify-between gap-7">
        <div className="md:w-[35%]">
          <div className="border-[#e1e2ff] border-[2px] px-3 lg:px-7 py-7 rounded-xl">
            <div className="lg:text-lg">Messages</div>
            <div>
              <div className="mt-5 flex items-center ">
                <div className="w-[75%] relative">
                  <input
                    className="w-full px-2 py-2 rounded-lg pl-9 outline-none"
                    style={{ boxShadow: "1px 1px 3px black" }}
                    type="text"
                  />
                  <img
                    className="absolute top-[7px] left-[7px]  w-[1.3rem]"
                    src="/icons/search-icon-2.svg"
                    alt=""
                  />
                </div>
                <div className="w-[25%]">
                  <button className="w-full text-sm lg:text-base text-[#5d5fef] font-medium">
                    CHAT +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-5 lg:my-7 flex justify-around">
                {["All", "UNREAD", "STARRED"].map((data) => {
                  return (
                    <div key={Math.random().toString()}>
                      <button className="text-sm lg:text-base">{data}</button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <ul className="mt-7 flex flex-col gap-3">
                {Array.from({ length: 7 }).map(() => {
                  return (
                    <li key={Math.random().toString()}>
                      <div className="flex items-center justify-between gap-2 border-[#dfe0eb] rounded-lg px-1 py-3 border-[2px]">
                        <div className="w-[20%]">
                          <div className="flex justify-center items-center">
                            <img
                              className=" h-[3rem] lg:h-[4rem] w-[3rem] lg:w-[4rem] object-cover rounded-full"
                              src="/images/messi-smiling.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="w-[30%] overflow-hidden">
                          <div>
                            <div className="text-xs lg:text-sm font-medium text-nowrap">
                              Lionel Messi
                            </div>
                          </div>
                          <div>
                            <div className="text-[0.7rem] lg:text-sm font-medium text-[#a1a1a1]">
                              Argentina
                            </div>
                          </div>
                        </div>
                        <div className="w-[25%]  ">
                          <div>
                            <div className="text-xs lg:text-sm">
                              Atendimento
                            </div>
                          </div>
                          <div>
                            <div className="text-xs lg:text-sm">00:31:0</div>
                          </div>
                        </div>
                        <div className="w-[20%] ">
                          <div className="text-center">
                            <button className="text-[#5d5fef] lg:text-lg rounded-full px-3 bg-[#e1e2ff]">
                              1
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-[65%]">
          <div className="border-[#e1e2ff] border-[2px] px-3 lg:px-7 py-7 lg:py-10 rounded-xl">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 lg:gap-4">
                    <div>
                      <div className="flex justify-center items-center">
                        <img
                          className=" h-[4rem] lg:h-[5rem] w-[4rem] lg:w-[5rem] object-cover rounded-full"
                          src="/images/messi-smiling.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm lg:text-lg font-bold">
                        Lionel Messi
                      </div>
                      <div className="text-xs lg:text-base font-medium mt-1">
                        <span className="text-[#00baf2] font-bold">
                          @FCBarcelona
                        </span>{" "}
                        | <span>Spain</span>
                      </div>
                      <div className="text-[#58677a] text-xs lg:text-base mt-1">
                        Last seen 02:55 pm
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button className=" flex flex-col gap-1 items-center">
                    <div>
                      <img
                        className="w-[1.6rem] lg:w-[2rem]"
                        src="/icons/user-plus-solid.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="text-xs lg:text-base text-center font-medium text-[#1d5dc7]">
                        Follow
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center flex-wrap mt-5 lg:mt-10 gap-5 lg:gap-10">
                {[
                  "/icons/phone-solid.svg",
                  "/icons/video-solid.svg",
                  "/icons/star-solid (1).svg",
                  "/icons/circle-info-solid.svg",
                  "/icons/tag-solid.svg",
                ].map((picSrc) => {
                  return (
                    <div key={Math.random().toString()}>
                      <button>
                        <img
                          className="w-[1.5rem] lg:w-[2rem]"
                          src={picSrc}
                          alt=""
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <hr className="border-[#dfe0eb] border-[1px] my-5 lg:my-7" />
            </div>
            <div>
              <div className="mt-7 flex flex-col gap-5">
                <div className="flex justify-start w-full">
                  <div className="flex items-center gap-3 w-[90%] lg:w-[60%]">
                    <div className="w-[15%]">
                      <div className="flex justify-center items-center">
                        <img
                          className=" h-[3rem] lg:h-[4rem] min-w-[3rem] lg:min-w-[4rem] object-cover rounded-full"
                          src="/images/messi-smiling.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" w-[85%]">
                      <div className=" w-[full] text-xs lg:text-sm text-[#5d5fef] border-[#a5a6f6] border-[1px] px-2 lg:px-4 py-1 lg:py-3 rounded-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Optio quidem ratione maxime eveniet ab ea?
                      </div>
                      <div>
                        <div className=" px-2 mt-[3px] text-[0.65rem] text-[#333333]">
                          8:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <div className="flex items-center gap-3 w-[90%] lg:w-[60%]">
                    <div className="  w-[85%]">
                      <div className=" bg-[#1d5dc7] text-white w-[full] text-xs lg:text-sm  border-[#a5a6f6] border-[1px] px-2 lg:px-4 py-1 lg:py-3 rounded-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Optio quidem ratione maxime eveniet ab ea?
                      </div>
                      <div>
                        <div className=" text-end px-2 mt-[3px] text-[0.65rem] text-[#333333]">
                          8:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="w-[15%]">
                      <div className="flex justify-center items-center">
                        <img
                          className=" h-[3rem] lg:h-[4rem] min-w-[3rem] lg:min-w-[4rem] object-cover rounded-full"
                          src="/images/ronaldo-smiling.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start w-full">
                  <div className="flex items-center gap-3 w-[90%] lg:w-[60%]">
                    <div className="w-[15%]">
                      <div className="flex justify-center items-center">
                        <img
                          className=" h-[3rem] lg:h-[4rem] min-w-[3rem] lg:min-w-[4rem] object-cover rounded-full"
                          src="/images/messi-smiling.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" w-[85%]">
                      <div className=" w-[full] text-xs lg:text-sm text-[#5d5fef] border-[#a5a6f6] border-[1px] px-2 lg:px-4 py-1 lg:py-3 rounded-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Optio quidem ratione maxime eveniet ab ea?
                      </div>
                      <div>
                        <div className=" px-2 mt-[3px] text-[0.65rem] text-[#333333]">
                          8:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <div className="flex items-center gap-3 w-[90%] lg:w-[60%]">
                    <div className="  w-[85%]">
                      <div className=" bg-[#1d5dc7] text-white w-[full] text-xs lg:text-sm  border-[#a5a6f6] border-[1px] px-2 lg:px-4 py-1 lg:py-3 rounded-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Optio quidem ratione maxime eveniet ab ea?
                      </div>
                      <div>
                        <div className=" text-end px-2 mt-[3px] text-[0.65rem] text-[#333333]">
                          8:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="w-[15%]">
                      <div className="flex justify-center items-center">
                        <img
                          className=" h-[3rem] lg:h-[4rem] min-w-[3rem] lg:min-w-[4rem] object-cover rounded-full"
                          src="/images/ronaldo-smiling.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start w-full">
                  <div className="flex items-center gap-3 w-[90%] lg:w-[60%]">
                    <div className="w-[15%]">
                      <div className="flex justify-center items-center">
                        <img
                          className=" h-[3rem] lg:h-[4rem] min-w-[3rem] lg:min-w-[4rem] object-cover rounded-full"
                          src="/images/messi-smiling.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" w-[85%]">
                      <div className=" w-[full] text-xs lg:text-sm text-[#5d5fef] border-[#a5a6f6] border-[1px] px-2 lg:px-4 py-1 lg:py-3 rounded-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Optio quidem ratione maxime eveniet ab ea?
                      </div>
                      <div>
                        <div className=" px-2 mt-[3px] text-[0.65rem] text-[#333333]">
                          8:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" flex items-center justify-center gap-3 border-[#a5a6f6] rounded-lg h-[3rem] border-[1px] px-2 py-1 lg:py-7 mt-5 lg:mt-10">
                <div className="w-[70%]">
                  <input
                    placeholder="Type a Message"
                    className="h-[1.5rem] w-full outline-none border-none"
                  />
                </div>
                <div className="w-[30%]">
                  <div className="flex justify-end gap-2">
                    <div>
                      <button className="bg-[#1d5dc7] px-1 py-1 rounded">
                        <img
                          className="w-[1.3rem]"
                          src="/icons/plane.png"
                          alt=""
                        />
                      </button>
                    </div>
                    <div>
                      <button className=" px-1 py-1 rounded">
                        <img
                          className="w-[0.7rem]"
                          src="/icons/attach-file-icon.png"
                          alt=""
                        />
                      </button>
                    </div>
                    <div>
                      <button className=" px-1 py-1 rounded">
                        <img
                          className="w-[1.3rem]"
                          src="/icons/tick-mark-icon.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default ChatSection;
