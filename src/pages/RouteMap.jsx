import { useState } from "react";
import icon from "/img/running.svg";
import RouteComp from "../components/RouteComp";
export default function RouteMap() {
  return (
    <div className="h-full bg-primary">
      <div className="py-16 px-8 h-full flex flex-col items-center">
        <div className="text-white text-4xl font-bold mb-12">Route map</div>
        <div className="py-2 px-8 bg-white rounded-md font-bold mb-3">
          <div className="flex align-center justify-between">
            <img style={{ height: "25px" }} src={icon} />
            <div>Start</div>
          </div>
        </div>
        <div>
          <RouteComp name={"Dept of Electrical and Electronics"} />
          <RouteComp name={"Dept of Electronics and Communication"} />
          <RouteComp name={"Dept of Mechanical Engineering"} />
          <RouteComp name={"Dept of Chemistry"} />
          <RouteComp name={"Dept of Mathematics"} />
          <RouteComp name={"Dept of Biotechnology"} />
          <RouteComp name={"Dept of CTM"} />
          <RouteComp name={"Dept of Civil Engineering"} />
          <RouteComp name={"Dept of CSE"} />
          <RouteComp name={"Dept of ISE"} />
          <RouteComp name={"Dept of STEP"} />
          <RouteComp name={"Dept of MBA"} />
          <RouteComp name={"Dept of MCA"} />

          <RouteComp name={"Dept of Physics"} last={true} />
        </div>
      </div>
    </div>
  );
}
