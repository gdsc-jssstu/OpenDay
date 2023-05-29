import icon from "/img/running.svg";
import { MapData } from "../assets/deptData/RouteMap";
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
          {MapData.map((item) => (
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
      </div>
    </div>
  );
}
