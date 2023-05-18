import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { supabase } from "../client";

const Homepage = ({ token }) => {
  let navigate = useNavigate();
  const [deps, setDeps] = useState([]);
  const [depid, setDepId] = useState([]);

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  // Redirect to signin page if not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    const fetchDeps = async () => {
      try {
        // Replace 'your_table' with the name of your table and 'id_column' with the actual column name for the ID
        const { data, error } = await supabase.from("Departments").select("*");
        if (error) {
          throw error;
        }
        console.log(data);
        setDeps(data);
        setDepId(data[0].id);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchDeps();
  }, []);

  return (
    <div>
      <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
      <p>Mobile :- {token.user.user_metadata.mobile}</p>
      {deps?.map((dep, i) => (
        //This is for testing purpose only, change the link url to department specific page and from there do the below inorder to go to feedbackpage
        <Link
          to="/feedback"
          state={{ depid: dep.id, token: token }}
          style={{ color: "black", display: "block" }}
          key={i}
        >
          {dep.Department}
        </Link>
      ))}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Homepage;
