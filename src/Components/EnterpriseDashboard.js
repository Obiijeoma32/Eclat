import { Link } from "react-router-dom";
import Heading from "./Heading";
import enterprise from "./enterprise.jpeg";

function EnterpriseDashboard() {
  return (
    <>
      <Heading />
      <div className=" h-[550px] mt-[12%] flex justify-between ml-[5%] w-[90%]  ">
        <div>
          <h1 className="  text-[40px] font-[700px] w-[600px] text-left text-[#000000]">Our mission is to support you in forming an outstanding team that is globally recognized for its excellence.</h1>
          <p className=" text-[18px] w-[580px] mt-[15px] font-[400] text-left text-[#000] ">Tech Eclat is a trusted partner for both enterprise teams and emerging startups. Our onboarding durations are 75% quicker than the industry standard.</p>
          <div className="flex justify-between w-[400px] items-center mt-[2rem] ">
            <Link to="">
              <div className=" text-[14px]  font-[400] text-center text-[#fff] flex justify-evenly items-center rounded-[5px] pt-[px] w-[186px] h-[48px] bg-[#38761D] ">
                <h1>Schedule a Call</h1>
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Link>
            <Link to="">
              <h1 className=" text-[14px]  font-[400] text-center text-[#38761D] rounded-[5px] pt-[10px] w-[186px] h-[48px] border-[1px] border-[#5E8F48] ">Watch an Overview</h1>
            </Link>
          </div>
        </div>
        <img className=" w-[550px] ml-[20px] h-[450px]" src={enterprise} alt="enterprise" />
      </div>
    </>
  );
}

export default EnterpriseDashboard;
