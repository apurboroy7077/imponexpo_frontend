import React, { useEffect, useRef } from "react";
type propsType = {
  data: {
    closeToolTipHandler: () => void;
  };
};
const NotificationTooltipAdminDashboard3 = (props: propsType) => {
  const { closeToolTipHandler } = props.data;
  const notificationRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notificationRef.current) {
        const myElement = notificationRef.current as HTMLElement;
        const clickedElement = e.target as HTMLElement;
        if (myElement.contains(clickedElement) === false) {
          closeToolTipHandler();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={notificationRef}
      className="absolute  top-[3.5rem] z-20 right-[-8rem]"
    >
      <div className=" bg-[white] border-[1px] px-3 py-3 w-[17rem] rounded">
        <div className="text-sm opacity-[0.5] font-medium">Notifications</div>
        <hr className="mt-2" />
        <div className=" overflow-y-auto h-[15rem]">
          {Array.from({ length: 7 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <div className="text-xs mt-3 opacity-[0.6]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quos doloremque atque repellendus. Nobis quibusdam
                  repellendus, sit nesciunt error accusantium.
                </div>
                <div className="text-xs opacity mt-2 opacity-[0.5] font-medium">
                  20 May, 2024
                </div>
                <hr className="mt-2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotificationTooltipAdminDashboard3;
