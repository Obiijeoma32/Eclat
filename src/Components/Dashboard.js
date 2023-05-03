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
      <div className=" dashboard">
        <Heading />
        <div className="md:flex hidden   ml-[8rem] w-[80%]  mt-[8rem] h-[500px] items-center justify-between ">
          <div className="  mt-[2rem] ">
            <h1 className=" text-left  w-[500px] text-[40px] font-[600] text-[#000] opacity-80">Uncovering exceptional talent across the globe.</h1>
            <p className="tracking-[1px] mt-3 w-[500px] font-[400] text-[#000] opacity-80 text-left text-[18px]">Join Tech Eclat to assemble a top-tier team of developers, engineers, product designers, and exceptional remote technology experts..</p>
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
          <img className=" w-[400px]  h-[450px]" src={dashimg} alt="Eclat" />
        </div>
        <div className=" md:hidden grid   ml-[1rem] w-[60%]  mt-[6rem] h-[900px] items-center justify-between ">
          <div className="  mt-[1rem] ">
            <div className="grid justify-between ml-[20px]">
              <h1 className=" text-left  w-[380px] text-[38px] font-[600] text-[#000] opacity-80 ">Uncovering exceptional talent across the globe.</h1>
              <img className=" w-[370px] mt-1  h-[420px]" src={dashimg} alt="Eclat" />
            </div>
            <p className="tracking-[1px] mt-[40px] ml-[20px] w-[380px]  font-[400] text-[#000] opacity-80 text-left text-[16px]">
              Join Tech Eclat to assemble a top-tier team of developers, engineers, product designers, and exceptional remote technology experts..
            </p>
            <div className="flex w-[90%] ml-[25px] justify-between mt-[30px] ">
              <Link className="w-[170px] rounded-[5px] h-[45px]  text-[16px] bg-[#38761D] flex items-center justify-evenly opacity-95  font-[600] text-[#fff]" to="/eclatjobs">
                Find Talent
                <svg className="mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>

              <Link className="w-[180px] h-[45px] rounded-[5px] text-[16px] bg-[#fff] flex items-center justify-evenly font-[600] text-[#38761D]" to="/jobs">
                Find Jobs
                <svg className="mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
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
