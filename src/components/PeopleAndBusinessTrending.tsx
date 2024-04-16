const PeopleAndBusinessTrending = () => {
  return (
    <section>
      <div className=" px-2 py-10 lg:py-5   flex items-center justify-center">
        <div className="w-full max-w-[100rem] ">
          <div className="font-bold md:text-2xl lg:text-3xl my-2">
            See People and Business is Trending on ImpoNexpo
          </div>
          <div className="text-sm md:text-xl font-medium mb-7 md:mb-10">
            Trending Exporters
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => {
                return (
                  <div
                    className="w-full bg-[#f3f3f3] py-[2rem] rounded-lg"
                    key={Math.random().toString()}
                  >
                    <div className="">
                      <div className="w-[50%]  m-auto rounded-full overflow-hidden">
                        <img
                          className="w-full "
                          src="/images/messi.jpg"
                          alt=""
                        />
                      </div>
                      <div className="mt-4">
                        <div className="font-bold text-center">
                          Horizon Export Co.
                        </div>
                      </div>
                      <div>
                        <div className=" mt-1 text-[#696969] text-center">
                          @HorizonExports
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
      </div>
    </section>
  );
};

export default PeopleAndBusinessTrending;
