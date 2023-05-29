import React from "react";
import arrow from "/img/arrow.svg";
import { Link } from "react-router-dom";

export default function RouteComp({ name, image, details_route }) {
  return (
    <div className="flex flex-col align-center justify-center mt-3">
      {/* <div className="w-80 px-4 py-6 bg-secondary rounded-lg flex align-center mb-3 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"> */}
      <Link
        className="w-80 px-4 py-6 bg-secondary rounded-lg flex align-center mb-3 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
        to={details_route}
      >
        <div>
          <img style={{ height: "50px", width: "60px" }} src={image} />
        </div>
        <div className="w-72 font-semibold flex self-center justify-center text-center">
          <div className="">{name}</div>
        </div>
      </Link>
      {/* </div> */}
      <img style={{ height: "30px" }} src={arrow} />
    </div>
  );
}
