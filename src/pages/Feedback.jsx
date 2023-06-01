import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DeptData from "../assets/deptData/DeptData";

const Feedback = () => {
  const [text, setText] = useState("");
  const [ratings, setRatings] = useState([]);
  const [department, setDepartment] = useState([]);
  const token = window.sessionStorage.getItem("token");

  const navigate = useNavigate();

  const { name } = useParams();

  useEffect(() => {
    if (!DeptData.hasOwnProperty(name.toUpperCase())) {
      setError("Invalid Url");
    } else {
      setDepartment(DeptData[name.toUpperCase()]);
    }
  }, []);
  //const depid = 1
  {
    /*
        send departmentid (depid) as a prop

    */
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // Replace 'your_table' with the name of your table and 'id_column' with the actual column name for the ID
  //       const { data, error } = await supabase
  //         .from("Departments")
  //         .select("Department");

  //       if (error) {
  //         throw error;
  //       }
  //       let depts = [];
  //       data.map((dept, i) => {
  //         depts.push(dept["Department"]);
  //       });
  //       setDepartment(depts);
  //       console.log(depts);
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const questions = [
    "On a scale of 1 to 5, how would you rate your overall experience at the stall?",
    "On a scale of 1 to 5, how convinced are you with the explaination from the speakers?",
    "On a scale of 1 to 5, how well does the department address and resolve issues or concerns?",
  ];
  const radioOptions = [1, 2, 3, 4, 5];

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(department.name);
    // let id;
    // try {
    //   // Replace 'your_table' with the name of your table and 'id_column' with the actual column name for the ID
    //   const { data, error } = await supabase
    //     .from("Departments")
    //     .select("id")
    //     .eq("Department", department.name);

    //   if (error) {
    //     throw error;
    //   }
    //   console.log(data[0].id);
    //   id = data[0].id;
    // } catch (error) {
    //   console.error("Error fetching data:", error.message);
    // }
    console.log(JSON.parse(token).user);
    const Insertdata = {
      depid: department.id,
      userid: JSON.parse(token).user.id,
      ratings: ratings,
      feedback: text,
      name: JSON.parse(token).user.user_metadata.full_name,
      email: JSON.parse(token).user.email,
      mobile: JSON.parse(token).user.user_metadata.mobile,
    };

    try {
      // Replace 'your_table' with the name of your table
      const { res, error } = await supabase
        .from("Feedbacks")
        .insert([Insertdata]);

      if (error) {
        throw error;
      }

      console.log("Data inserted");
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

  // function handleClick(e) {
  //   console.log(e.target.value);
  //   setDep(e.target.value);
  // }
  return (
    <div className="flex justify-center bg-[#158EB4] min-h-screen py-6">
      <div className="flex flex-col items-center gap-y-10">
        <p className="text-center text-5xl font-extrabold text-white">
          Feedback
        </p>
        <p className="text-center px-2 text-3xl font-extrabold text-white">
          {department.name}
        </p>

        <form
          className="flex flex-col items-center w-full gap-y-5 px-6"
          onSubmit={handleSubmit}
        >
          {questions.map((question, i) => (
            <div className="w-full max-w-md" key={i}>
              <p className="text-justify text-lg mb-2">{question}</p>
              <div className="flex justify-between ">
                {radioOptions.map((option) => (
                  <div className="flex items-center gap-x-2  " key={option}>
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
                      className=" text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="">
            <label htmlFor="comments" className="text-left text-lg">
              Add your comments
            </label>
            <textarea
              type="text"
              name="comments"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="feedback"
              className="w-full p-2 rounded-lg border-none outline-none"
            />
          </div>
          <button className=" w-48 text-center p-2 text-lg bg-[#115f9a] rounded-lg  font-bold text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
