import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useLocation, useNavigate} from "react-router-dom";

const Feedback = () => {
  const [text, setText] = useState("");
  const [ratings, setRatings] = useState([]);
  const [department, setDepartment] = useState([]);
  const [dep, setDep] = useState('Mechanical Engineering')
  const token = window.sessionStorage.getItem('token');
  const [depid, setDepId] = useState(1);
  const navigate = useNavigate();
  //const depid = 1
    {/*
        send departmentid (depid) as a prop

    */
  }


  useEffect(() => {
    async function fetchData() {
      try {
        // Replace 'your_table' with the name of your table and 'id_column' with the actual column name for the ID
        const { data, error } = await supabase
          .from("Departments")
          .select("Department")
          

        if (error) {
          throw error;
        }
        let depts = []
        data.map((dept,i)=>{
            depts.push(dept['Department'])
        })
        setDepartment(depts);
        console.log(depts)
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  const questions = [
    "On a scale of 1 to 5, how would you rate your overall experience at the stall?",
    "On a scale of 1 to 5, how would you rate your overall experience at the stall?",
    "On a scale of 1 to 5, how would you rate your overall experience at the stall?",
  ];
  const radioOptions = [1, 2, 3, 4, 5];

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(dep)
    try {
        // Replace 'your_table' with the name of your table and 'id_column' with the actual column name for the ID
        const { data, error } = await supabase
          .from("Departments")
          .select("id")
          .eq("Department",dep)

        if (error) {
          throw error;
        }
        console.log(data)
        setDepId(data[0].id)
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
      console.log(JSON.parse(token).user.id)
    const data = {
      id: Math.floor(Math.random() * 10000),
      depid: depid,
      userid: JSON.parse(token).user.id,
      ratings: ratings,
      feedback: text,
    };
    try {
      // Replace 'your_table' with the name of your table
      const { res, error } = await supabase.from("Feedbacks").insert([data]);

      if (error) {
        throw error;
      }

      console.log("Data inserted:", res);
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }
    //console.log(data)
    navigate("/routemap");
    return "hi";
  }
  function handleRatingChange(index, rating) {
    setRatings((prevRatings) => {
      const updatedRatings = [...prevRatings];
      updatedRatings[index] = rating;
      return updatedRatings;
    });
    //console.log(ratings[0])
  }

  function handleClick(e){
    console.log(e.target.value)
    setDep(e.target.value)
  }
  return (
    <div className="flex items-stretch bg-[#158EB4] min-h-screen">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <p className="text-center mt-20 p-0 h-8 text-5xl font-extrabold text-white">
            Feedback
          </p>
        </div>
        <div className="mt-4 p-4 w-72">
          <select
              onChange={handleClick}
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {department.map((dept, i)=>
                <option value={dept} key={i}>
                    {dept}
                </option>
            )}
          </select>
        </div>
        <div className="mb-16">
          <p className="text-center p-0 h-8 text-3xl font-extrabold text-white">
            {dep}
          </p>
        </div>
        <form
          className="px-8 flex flex-col justify-center text-justify"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center">
            {questions.map((question, i) => (
              <div className="grid place-content-center" key={i}>
                <p className="text-justify text-lg">{question}</p>
                <div className="flex justify-between p-4">
                  {radioOptions.map((option) => (
                    <div className="flex items-center mr-4" key={option}>
                      <input
                        id="red-radio"
                        type="radio"
                        value={option}
                        onChange={(e) => handleRatingChange(i, option)}
                        name={`colored-radio${i}`}
                        className="w-6 h-6 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="red-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                  {/*<div className="flex items-center mr-4">
                                <input id="red-radio" type="radio" value={1} onChange={(e)=>{ratings[i] = e.target.value; console.log(ratings[i])}} name={`colored-radio${i}`} className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="green-radio" type="radio" value={2} onChange={handlechange} name={`colored-radio${i}`}className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input checked id="purple-radio" type="radio" value={3} onChange={handlechange} name={`colored-radio${i}`}className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="purple-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="teal-radio" type="radio" value={4} onChange={handlechange} name={`colored-radio${i}`}className="w-5 h-5 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="teal-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="yellow-radio" type="radio" value={5} onChange={handlechange} name={`colored-radio${i}`}className="w-5 h-5 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="yellow-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
                            </div>*/}
                </div>
              </div>
            ))}
            <div className="grid place-content-center">
              <label htmlFor="feedback" className="text-left text-lg mt-4">
                Add your comments
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="feedback"
                className="w-72 p-2 rounded-lg border-none"
              />
            </div>

            {/*<div className="grid">
                        <label htmlFor='1'>On a scale of 1 to 5, how would you rate your overall experience at the stall?</label>
                        <div className="flex justify-between p-4">
                            <div className="flex items-center mr-4">
                                <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="green-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input checked id="purple-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="purple-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="teal-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="teal-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="yellow-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="yellow-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <label htmlFor='1'>On a scale of 1 to 5, how would you rate your overall experience at the stall?</label>
                        <div className="flex justify-between p-4">
                            <div className="flex items-center mr-4">
                                <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="green-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input checked id="purple-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="purple-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="teal-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="teal-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input id="yellow-radio" type="radio" value="" name="colored-radio" className="w-5 h-5 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="yellow-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
                            </div>
                        </div>
                </div>*/}
            <button className="relative left-7 text-center mt-4 p-4 bg-[#115f9a] rounded-lg w-72 font-bold text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
