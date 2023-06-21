import { Link, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import SideBar from "./SideBar";
import "../App.css";
import { useState } from "react";

function ResourceDetails3() {
  const [university, setUniversity] = useState("");
  const [study, setStudy] = useState("");
  const [degree, setDegree] = useState("");
  const [periodGraduationStart, setPeriodGraduationStart] = useState("");
  const [periodGraduationEnd, setPeriodGraduationEnd] = useState("");
  const navigate = useNavigate();

  const handleUniversity = (e) => {
    setUniversity(e.target.value);
  };
  const handleStudy = (e) => {
    setStudy(e.target.value);
  };
  const handleDegree = (e) => {
    setDegree(e.target.value);
  };
  const handlePeriodGraduationStart = (e) => {
    setPeriodGraduationStart(e.target.value);
  };
  const handlePeriodGraduationEnd = (e) => {
    setPeriodGraduationEnd(e.target.value);
  };
  const handleSign3Click = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        school: university,
        areaOfStudy: study,
        degree: degree,
        schoolStart: periodGraduationStart,
        schoolEnd: periodGraduationEnd,
      }),
    };
    const userId = localStorage.getItem("userId"); // Retrieve the id from localStorage
    console.log(userId);
    console.log(requestOptions);
    // setLoading(true); // start progress spinner
    fetch(`http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9009/api/Eclat/user/${userId}/signUp4`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.message === "User information updated successfully") {
          // const redirectUrl = ``;
          navigate("/homeforapplicant");
          // window.location.href = redirectUrl; // Redirect to "/home for applicant" page
        }
      })
      .catch((err) => {
        console.log(err.message);
        // setLoading(false); // stop progress spinner
      });
  };

  return (
    <>
      <Heading />
      <div className=" h-[200vh] 10inch:ml-[0%] 3xxl:mt-[10%] 6xxl:w-[90%] 6xxl:mt-[0px] 5xl:mt-[-5%] 820xxl:mt-[0] flex 5xl:ml-[5%]">
        <SideBar />
        <div className="5xl:ml-[25rem] 4xl:ml-[24rem] 6xxl:w-[85%]  mt-[12%] 3xxl:ml-[1rem] 820xxl:ml-[16rem] ml-[25rem] 1xl:ml-[22rem]">
          <h1 className=" 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[600px] text-[#38761D] 3xxl:text-[20px] 820xxl:text-[30px] font-[600] opacity-80 ">Kindly fill in the details</h1>
          <p className=" 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[500px] text-[#7D90B8] 3xxl:text-[12px] 820xxl:text-[18px] font-[300] mt-[14px] 5xl:w-[1220px] 4xl:w-[920px] ">Please fill in the details below so we can get in touch with you</p>

          <form className="mt-7" action="">
            <label className=" 3xxl:w-[200px] 3xxl:text-[10px] 820xxl:3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="company">
              What is the name of your College/University ?
            </label>

            <br />
            <input
              onChange={handleUniversity}
              value={university}
              className="text-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  University of Lagos"
              type="text"
            />
            <br />

            <label className=" 3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="industry">
              What is your area of study ?
            </label>
            <br />
            <input
              onChange={handleStudy}
              value={study}
              className="text-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  Computer Science"
              type="text"
            />
            <br />
            <label className=" 3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="industry">
              What is your degree ?
            </label>
            <br />
            <input
              onChange={handleDegree}
              value={degree}
              className="text-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="Enter your degree"
              type="text"
            />

            <br />
            <div className="  3xxl:w-[320px] 6xxl:w-[90%] 4xl:w-[900px] 820xxl:w-[471px] 5xl:w-[900px]  w-[471px]">
              <div>
                <label className=" 3xxl:w-[100px]  3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="period of Graduation">
                  Year of starting ?
                </label>
                <br />
                <input
                  onChange={handlePeriodGraduationStart}
                  value={periodGraduationStart}
                  className="text-[14px] pr-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                  placeholder="Starting year"
                  type="date"
                />
                <br />
              </div>

              <div>
                <label className=" 3xxl:text-[10px] 820xxl:text-[16px] 3xxl:w-[100px] text-[#1E2757]" htmlFor="period of Graduation">
                  Year of graduation ?
                </label>
                <br />
                <input
                  onChange={handlePeriodGraduationEnd}
                  value={periodGraduationEnd}
                  className="text-[14px] pr-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                  placeholder="End year"
                  type="date"
                />
              </div>
            </div>
          </form>
          <br />

          <Link onClick={handleSign3Click} className="mt-[40px]" to="">
            <h1 className="3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] w-[471px] h-[50px] rounded-[5px] bg-[#38761D] pt-[15px] opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  ">Submit</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResourceDetails3;
