import React from "react";
import TheSection from "../TheSection";

const UpcomingLiveStreamSection = () => {
  return (
    <TheSection>
      <div>
        <div className="text-lg md:text-2xl lg:text-4xl font-medium">
          Upcoming Livestreams
        </div>
      </div>
      <div>
        <div className="mt-5 lg:mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <iframe
                  className="w-full h-[20rem]  md:h-[20rem] lg:h-[30rem] rounded-lg"
                  src="https://www.youtube.com/embed/7PIji8OubXU?si=nW3MH-1C1YeE9iFS"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="my-5">
          <div className="flex items-center gap-1 justify-center">
            <div className="text-[#ff603d] text-center font-bold md:text-lg">
              See more Channels
            </div>
            <div>
              <img
                className="w-[1.1rem]"
                src="/icons/arrow-down-orange.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default UpcomingLiveStreamSection;
