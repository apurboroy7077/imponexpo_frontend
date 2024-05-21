import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileAdminDashboard3 = () => {
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
        <div className="mt-3 bg-[white] rounded overflow-hidden pb-7 lg:pb-10">
          <div
            className=" bg-cover bg-no-repeat bg-top"
            style={{
              backgroundImage: `url("/images/sector-1/cover-01.png")`,
              backgroundSize: "100% 50%",
            }}
          >
            <div className=" flex items-center justify-center h-[10rem] lg:h-[20rem]">
              <div className="relative w-[6rem] lg:w-[10rem] h-[6rem] lg:h-[10rem] rounded-full">
                <div className="w-full h-full rounded-full  overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="/images/messi.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute bg-[#3c50e0] p-[0.3rem] lg:p-[0.5rem] w-[1.5rem] lg:w-[2.3rem] bottom-0 right-0 rounded-full">
                  <img
                    className="w-full opacity-[0.8]"
                    src="/icons/sector-3/camera-white.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center font-bold text-xl lg:text-2xl  opacity-[0.8]">
            Danish Helium
          </div>
          <div className="mt-2 lg:mt-4 text-center font-medium text-sm lg:text-xl opacity-[0.6]">
            Ui/Ux Designer
          </div>
          <div className="mt-3 lg:mt-5 flex items-center justify-center">
            <div className="mt-2 grid grid-cols-3 w-[15rem] lg:w-[25rem] border-[1px] px-2 py-1 lg:py-3 rounded-lg shadow-lg">
              <div className=" border-r-[1px]">
                <div className="lg:text-xl font-bold text-center opacity-[0.8]">
                  259
                </div>
                <div className="lg:text-xl font-medium text-center text-sm opacity-[0.6]">
                  Posts
                </div>
              </div>
              <div className=" border-r-[1px]">
                <div className=" lg:text-xl font-bold text-center opacity-[0.8]">
                  259
                </div>
                <div className="lg:text-xl font-medium text-center text-sm opacity-[0.6]">
                  Posts
                </div>
              </div>
              <div>
                <div className="lg:text-xl font-bold text-center opacity-[0.8] ">
                  259
                </div>
                <div className="lg:text-xl font-medium text-center text-sm opacity-[0.6]">
                  Posts
                </div>
              </div>
            </div>
          </div>
          <div className="lg:text-xl  mt-5 lg:mt-9 font-medium opacity-[0.8] text-center">
            About Me
          </div>

          <div className="text-xs lg:text-lg px-3 lg:px-20 text-center opacity-[0.6] mt-2 lg:mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            illo quae alias voluptas dolorem blanditiis, cupiditate iste iusto
            eius perferendis porro maiores doloremque officiis velit, culpa
            voluptatum sapiente consequuntur illum?
          </div>
          <div className="lg:text-lg mt-5 lg:mt-7 font-medium opacity-[0.8] text-center">
            Follow Me On
          </div>
          <div className="flex justify-center gap-3 mt-3 lg:mt-5">
            {[
              {
                imageSrc: "/icons/facebook-2.svg",
                link: "http://facebook.com/apurboroy7077",
              },
              {
                imageSrc: "/icons/facebook-2.svg",
                link: "http://facebook.com/apurboroy7077",
              },
              {
                imageSrc: "/icons/facebook-2.svg",
                link: "http://facebook.com/apurboroy7077",
              },
              {
                imageSrc: "/icons/facebook-2.svg",
                link: "http://facebook.com/apurboroy7077",
              },
              {
                imageSrc: "/icons/facebook-2.svg",
                link: "http://facebook.com/apurboroy7077",
              },
            ].map((data) => {
              return (
                <div key={Math.random().toString()}>
                  <Link href={data.link} target="_blank">
                    <img
                      className="w-[1.4rem] lg:w-[1.8rem] opacity-[0.6]"
                      src={data.imageSrc}
                      alt=""
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdminDashboard3;
