import { Link } from "react-router-dom";
import Heading from "./Heading";
import dashimg from "./dashboardImg.png";
import Partners from "./Partners";
import Unlock from "./Unlock";
import ChooseUs from "./ChooseUs";
import Footer from "./Footer";
import "../App.css";

function Dashboard() {
  return (
    <>
      <div className=" 3xxl:overflow-x-hidden  dashboard">
        <Heading />
        {/* big screen */}
        <div className="lg:flex xl:flex  2xl:flex hidden 1xl:w-[89%] xl:w-[83%] 1xl:ml-[5rem] 3xl:w-[85%] 2xl:w-[85%]   xl:ml-[8rem] w-[80%]  mt-[8rem] h-[500px] items-center justify-between  ">
          <div className="  mt-[2rem] ">
            <h1 className=" text-left lg:w-[500px]  xl:w-[500px] 4xl:w-[1100px] 5xl:w-[1100px] text-[40px] font-[600] text-[#000] opacity-80">Uncovering exceptional talent across the globe.</h1>
            <p className="tracking-[1px] mt-3 xl:w-[500px] lg:w-[500px] 4xl:w-[900px] 5xl:w-[1000px] font-[400] text-[#000] opacity-80 text-left text-[18px]">
              Join Tech Eclat to assemble a top-tier team of developers, engineers, product designers, and exceptional remote technology experts..
            </p>
            <div className="flex w-[400px] justify-between mt-[50px] ">
              <Link className="w-[170px] rounded-[5px] h-[45px]  text-[16px] bg-[#38761D] flex items-center justify-evenly opacity-95  font-[600] text-[#fff] hover:bg-[#fff]  hover:text-[#38761d]" to="/eclatjobs">
                <h3>Find Talent</h3>
                <svg className="mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>

              <Link className="w-[180px] h-[45px] rounded-[5px] text-[16px] bg-[#fff] flex items-center justify-evenly font-[600] text-[#38761D] hover:bg-[#38761d] hover:bg-opacity-95 hover:text-[#fff]" to="/jobs">
                <h3> Find Jobs</h3>
                <svg className="mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </div>
          </div>
          <img className=" xl:w-[400px] 1xl:w-[350px] 1xl:h-[350px]  xl:h-[450px] 5xl:h-[500px] 5xl:w-[500px] " src={dashimg} alt="Eclat" />
        </div>
        {/* small screens */}
        <div className=" xl:hidden 3xxl:grid 3xxl:ml-[15%] 7xxl:w-[85%] 7xxl:h-[850px] 6xxl:w-[85%] 6xxl:ml-[20%] 5xxl:w-[85%] 5xxl:h-[700px] 5xxl:ml-[17%] 4xxl:ml-[20%] 820xxl:h-[900px]  820xxl:w-[80%] 820xxl:ml-[19%]  820xxl:mt-[18%] lg:hidden 4xxl:grid 3xxl:mt-[90px] 3xxl:h-[570px]    3xxl:w-[85%] ml-[1rem] w-[60%]  mt-[6rem] h-[900px] items-center justify-between ">
          <div className=" 3xxl:mt-[3rem]  mt-[1rem] ">
            <div className="grid  justify-between 3xxl:ml-[0px] ml-[20px]">
              <h1 className=" text-left 7xxl:text-[34px] 4xxl:w-[90%] 4xxl:ml-[-30px] 5xxl:text-[20px]  3xxl:w-[80%] 3xxl:text-center 3xxl:text-[16px]   w-[380px] 820xxl:w-[600px] 820xxl:text-center 820xxl:h-[130px] 820xxl:text-[38px] text-[38px] font-[600] text-[#000] opacity-80 ">
                Uncovering exceptional talent across the globe.
              </h1>
              <img className=" 3xxl:w-[200px] 3xxl:ml-[30px] 7xxl:w-[450px] 7xxl:h-[450px] 5xxl:w-[300px] 5xxl:h-[340px]  3xxl:h-[220px]  w-[370px] 820xxl:w-[450px] 820xxl:h-[500px] 820xxl:ml-[60px]  mt-1  h-[420px]" src={dashimg} alt="Eclat" />
            </div>
            <p className="tracking-[1px] 7xxl:text-[14px] 3xxl:ml-[0px] 3xxl:w-[240px] 3xxl:text-[10px] 3xxl:text-center 5xxl:text-[12px] 5xxl:w-[75%] 820xxl:w-[500px] 820xxl:text-center 820xxl:ml-[40px] mt-[40px] ml-[20px] w-[380px]  font-[400] text-[#000] opacity-80 text-left 820xxl:text-[16px] text-[16px]">
              Join Tech Eclat to assemble a top-tier team of developers, engineers, product designers, and exceptional remote technology experts..
            </p>
            <div className="flex w-[90%] 3xxl:w-[250px] 3xxl:ml-[0px] 5xxl:w-[75%] 820xxl:w-[500px] 820xxl:ml-[50px] 820xxl:mt-[40px] ml-[25px] justify-between mt-[30px] ">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="w-[170px] 7xxl:w-[170px] 7xxl:text-[16px] 5xxl:w-[130px] 5xxl:text-[14px] 3xxl:w-[100px] 3xxl:text-[10px] 820xxl:w-[230px] 820xxl:h-[50px] rounded-[5px] h-[45px] 820xxl:text-[16px]  text-[16px] bg-[#38761D] flex items-center justify-evenly opacity-95  font-[600] text-[#fff]"
                to="/eclatjobs"
              >
                Find Talent
                <svg className="md:mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>

              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="w-[180px] 7xxl:w-[170px] 7xxl:text-[16px] 5xxl:w-[130px] 5xxl:text-[14px] 3xxl:w-[100px] 3xxl:text-[10px] 820xxl:w-[230px] 820xxl:text-[16px] 820xxl:h-[50px] h-[45px] rounded-[5px] text-[16px] bg-[#fff] flex items-center justify-evenly font-[600] text-[#38761D]"
                to="/jobs"
              >
                Find Jobs
                <svg className="md:mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <Unlock />
      <ChooseUs />
      <Footer />
    </>
  );
}

export default Dashboard;
