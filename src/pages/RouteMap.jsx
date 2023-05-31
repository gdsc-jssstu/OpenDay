import icon from "/img/running.svg";
import { MapData, trialmap } from "../assets/deptData/RouteMap";
import RouteComp from "../components/RouteComp";
import { Link } from "react-router-dom";

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
          {MapData.map((item) => (
            <RouteComp
              key={item.name}
              name={item.name}
              image={item.image}
              details_route={item.details_route}
            />
          ))}
        </div>
        <div className="my-2 px-4 border-2 rounded-md border-amber-600	">
          <div className="w-full text-center text-2xl my-2 text-light font-semibold text-white">
            {" "}
            GOLDEN JUBILEE BHAVAN
          </div>
          {trialmap.map((item) => (
            <RouteComp
              key={item.name}
              name={item.name}
              image={item.image}
              details_route={item.details_route}
            />
          ))}
        </div>

        <div className="py-2 px-8 bg-white rounded-md font-bold my-3">
          <div className="flex align-center justify-between">
            <div>End!</div>
          </div>
          
        </div>
        <button className="m-4 p-4 rounded-2xl shadow-2xl bg-secondary w-min text-lg font-semibold">
            <Link to='/feedback'>Feedback</Link>
        </button>
      </div>
    </div>
  );
}
