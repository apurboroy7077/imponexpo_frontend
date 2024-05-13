import TheSection from "./TheSection";
import SignUpForm from "./sign-up/SignUpForm";

const SignUpSection = () => {
  return (
    <section>
      <div className=" bg-[#f3f3f3] px-2 py-7 lg:py-16   flex items-center justify-center">
        <div className="w-full max-w-[100rem] ">
          <div className="  flex flex-col md:flex-row md:justify-between gap-7 md:gap-0">
            <div className="md:w-[60%]">
              <div className="bg-[#1d5dc7] rounded-xl md:rounded-tr-none md:rounded-br-none h-full px-2 md:px-5 py-3 md:py-7 lg:py-10  text-[white]">
                <div>
                  <div className="text-center font-medium md:text-lg lg:text-3xl">
                    Your Importation and Exportation Success starts here!
                  </div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <ul className="text-xs lg:text-base font-medium mt-5 lg:my-10 list-disc pl-5 flex flex-col gap-2">
                      <li>Streamlined Import/Export Processes</li>
                      <li>Comprehensive B2B Marketplace</li>
                      <li>Access to Diverse Range of Products</li>
                      <li>
                        Connections with Worldwide Network of Suppliers and
                        Importers.
                      </li>
                      <li>
                        Platform built to make you succeed in Cross-Border
                        Trade.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="mt-5 flex justify-center">
                    <img
                      className="rounded w-full lg:w-[75%]"
                      src="/images/sea-port.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
