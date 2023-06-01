import { useEffect, useState } from "react";
import { supabase } from "../client";

const LuckyDraw = () => {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedbackList, setFeedbackList] = useState(null);

  const getFeedbacks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Feedbacks")
        .select(`name, email, mobile`);

      if (error) throw error;
      console.log(data);

      setFeedbackList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  const generateLuckyWinners = () => {
    setLoading(true);

    // Generate n unique numbers

    var randomIndexes = [];
    var i = 0;

    if (feedbackList) {
      while (i < 5) {
        var r = Math.floor(Math.random() * feedbackList.length);
        if (randomIndexes.indexOf(r) === -1) {
          randomIndexes.push(r);
          i++;
        }
      }

      console.log(feedbackList);

      // select users with index from randomIndexes
      var tempSelectedUsers = [];
      randomIndexes.forEach((randomIndex) => {
        tempSelectedUsers.push(feedbackList[randomIndex]);
      });
      setList(tempSelectedUsers);
      console.log(randomIndexes);
    } else {
      getFeedbacks();
    }
    setLoading(false);
  };

  return (
    <div className="min-w-full min-h-screen pb-40 flex items-center justify-center  bg-yellow-200/60">
      <div className="flex flex-col items-center gap-y-12">
        <h4 className=" font-bold text-4xl">
          {loading ? "Loading" : "Lucky Draw"}
        </h4>
        {!list && (
          <button
            onClick={generateLuckyWinners}
            className="transition-all flex items-center bg-blue-600 rounded-sm drop-shadow-md text-lg p-4 text-zinc-50"
          >
            Generate Lucky Winners
          </button>
        )}
        {list && <h4 className="text-5xl transition-all">CONGRATULATIONS!</h4>}
        {list && (
          <ol className="flex flex-wrap justify-center gap-12 transition-all px-4">
            {list.map((item) => (
              <li className="py-1  ">
                <p className="text-3xl font-semibold">{item.name}</p>
                <p className="text-lg">Ph: {item.mobile}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default LuckyDraw;
