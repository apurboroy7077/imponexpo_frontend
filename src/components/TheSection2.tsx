import React from "react";
type propsType = {
  children: React.ReactNode;
};
const TheSection2 = (props: propsType) => {
  const children = props.children;
  return (
    <section>
      <div className=" px-2 py-5 lg:py-7   flex items-center justify-center">
        <div className="w-full max-w-[100rem] bg-[white] px-3 lg:px-10 py-5 lg:py-10 rounded-lg">
          {children}
        </div>
      </div>
    </section>
  );
};

export default TheSection2;
