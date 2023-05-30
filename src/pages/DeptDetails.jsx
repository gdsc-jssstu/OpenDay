import BannerImage from "../components/BannerImage";
import DeptSection from "../components/DeptSection";
import DeptData from "../assets/deptData/DeptData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DeptDetails = () => {
  const { name } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!DeptData.hasOwnProperty(name.toUpperCase())) {
      setError("Invalid Url");
    } else {
      setData(DeptData[name.toUpperCase()]);
    }
  }, []);

  // TODO: Redirect to ERROR PAGE
  if (error) {
    return <p>{error}</p>;
  }

  // TODO: ADD Loading Screen
  if (!data) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <BannerImage img={data.bannerImg} title={data.name} />
      <div className="p-4 bg-primary flex flex-col gap-y-5 ">
        <DeptSection heading="About Us" content={data.aboutUs.content} />
        <DeptSection
          heading="Achievements and Milestones"
          content={data.achievements.content}
          isList={true}
        />
        <DeptSection
          heading="Projects"
          content={data.projects.content}
          // subContent={<p>Pending Image Crousal</p>}
          images={data.projects.imagesPath}
          isList={true}
        />

        {/* TODO: What does this from do? */}
        <form className="flex flex-col  py-6 items-center text-lg font-semibold ">
          <div className="flex justify-around items-center  py-6 tems-center text-lg font-semibold  w-96">
            <p className=" text-white text-lg">Enter Dept Code</p>
            <input
              type="text"
              name=""
              id=""
              className="p-3 w-40 rounded-lg outline-0"
            />
          </div>
          
        </form>
      </div>

      {/* TODO: Get next dept link from current dept data */}
      <div className="flex divide-x-2 divide-primary/30 bg-primary/50">
        <a href="#" className="flex-1 py-6 text-center text-lg font-semibold ">
          Previous Venu
        </a>
        <a href="#" className="flex-1 py-6 text-center text-lg font-semibold ">
          Next Venu
        </a>
      </div>
    </div>
  );
};

export default DeptDetails;
