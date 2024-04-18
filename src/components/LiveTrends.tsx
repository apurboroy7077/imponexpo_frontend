import React from "react";
import TheSection from "./TheSection";

const LiveTrends = () => {
  return (
    <TheSection>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div>
          <div className=" font-medium md:font-bold text-lg md:text-2xl lg:text-3xl">
            Live Trend Watch
          </div>
          <div className="font-medium text-lg md:text-2xl md:mt-2 ">
            Explore Our Latest and Greatest!
          </div>
        </div>
        <div>
          <button className="text-[#1d5ec9] border-[1px] border-[#1d5ec9] bg-white px-6 lg:px-16 py-1 lg:py-3 rounded active:scale-[0.95] md:text-xl">
            Watch now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
        {Array.from({ length: 3 }).map(() => {
          return (
            <div key={Math.random().toString()}>
              <iframe
                className="w-full h-[20rem] md:h-[30rem] lg:h-[35rem] rounded-lg"
                src="https://www.youtube.com/embed/Rwe5Aw3KPHY?si=4j6Ah4ATPFxlfd0Y&amp;start=71"
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
    </TheSection>
  );
};

export default LiveTrends;
