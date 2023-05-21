import React from "react";
import temple from "/img/dept/temple/temple.svg";
import arrow from "/img/arrow.svg";
export default function RouteComp(props) {
  return (
    <div className="flex flex-col align-center justify-center mt-3">
      <div className="w-80 px-4 py-6 bg-secondary rounded-lg flex align-center mb-3 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <div>
          <img style={{ height: "50px", width: "60px" }} src={temple} />
        </div>
        <div className="w-72 font-semibold flex self-center justify-center text-center">
          <div className="">{props.name}</div>
        </div>
      </div>
      <img style={{ height: "30px" }} src={arrow} />
    </div>
  );
}
