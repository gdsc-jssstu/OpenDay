import icon from "/img/running.svg";
import { MapData } from "../assets/deptData/RouteMap";
import RouteComp from "../components/RouteComp";
import { Link } from "react-router-dom";

export default function RouteMap() {
  return (
    <div className="h-full bg-primary">
      <div className="py-16 px-8 h-full flex flex-col items-center">
        <div className="text-white text-4xl font-bold mb-12">Route map</div>
        <p className="text-white text-sm mb-12">Inspiring Futures, Shaping Innovations: Explore JSSSTU's Open Day, Showcasing Milestones, Achievements, and Revolutionary Projects. Open Day at Your Fingertips: Explore Departments, Personalize Your Journey, and Stay Engaged with our User-Friendly Event App!</p>
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
            <div>End!
            </div>
            
          </div>   
        </div>
      </div>
      <p className="text-xs bg-white rounded-md font-medium py-2 px-8">Thank you for exploring all our departments! We hope you enjoyed your journey and gained valuable insights into our institution. If you have any further questions or would like to learn more, please feel free to reach out to us. We appreciate your time and interest in our offerings. Wishing you success in your endeavors!</p>
    </div>
  );
}
