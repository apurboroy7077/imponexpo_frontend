import React from "react";
type propsType = {
  children: React.ReactNode;
};
const TheSection = (props: propsType) => {
  const children = props.children;
  return (
    <section>
      <div className=" px-2 py-7 lg:py-16   flex items-center justify-center">
        <div className="w-full max-w-[100rem] ">{children}</div>
      </div>
    </section>
  );
};

export default TheSection;
