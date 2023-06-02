import { useEffect, useState, useRef } from "react";
import { supabase } from "../client";
import Confetti from "react-confetti";

const LuckyDraw = () => {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedbackList, setFeedbackList] = useState(null);
  const [randomIndexs, setRandomIndexs] = useState([]);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);
  const [confettieState, setConfettieState] = useState(false);

  const getFeedbacks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Feedbacks")
        .select(`name, email, mobile, userid`);

      if (error) throw error;
      console.log(data);

      var filteredlist = data.filter(
        (v, i, a) => a.findIndex((t) => t.userid === v.userid) === i
      );

      console.log("Filtered List", filteredlist);

      setFeedbackList(filteredlist);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    getFeedbacks();
  }, []);

  const generateLuckyWinners = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);

    setLoading(true);
    setConfettieState(true);
    var i = 0;
    if (randomIndexs.length < feedbackList.length) {
      if (feedbackList) {
        while (i < 5) {
          var r = Math.floor(Math.random() * feedbackList.length);
          console.log(randomIndexs);
          if (randomIndexs.indexOf(r) === -1) {
            setRandomIndexs([...randomIndexs, r]);
            // tempSelectedUsers.push(feedbackList[r]);
            if (!list) setList([feedbackList[r]]);
            else setList([...list, feedbackList[r]]);
            i++;
            break;
          }
        }

        console.log(feedbackList);
      } else {
        getFeedbacks();
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-w-full min-h-screen py-10  flex  justify-center  bg-yellow-200/60">
      {confettieState && (
        <Confetti numberOfPieces={100} width={width} height={height} />
      )}
      <div className="flex flex-col items-center gap-y-12">
        <h4 className=" font-bold text-4xl">
          {loading ? "Loading" : "Lucky Draw"}
        </h4>

        {!loading && randomIndexs.length < 5 && (
          <button
            onClick={generateLuckyWinners}
            className="transition-all flex items-center bg-blue-600 rounded-sm drop-shadow-md text-lg p-4 text-zinc-50"
          >
            Generate Lucky Winners
          </button>
        )}
        {list && (
          <h4 className="transition-all text-2xl  lg:text-5xl">
            CONGRATULATIONS!
          </h4>
        )}
        {list && (
          <ol className="flex flex-col items-center flex-wrap justify-center gap-y-5 transition-all px-4">
            {list.map((item) => (
              <li className="py-1  ">
                <p className="text-3xl font-semibold text-center">
                  {item.name}
                </p>
                <p className="text-lg text-center">Ph: {item.mobile}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default LuckyDraw;
