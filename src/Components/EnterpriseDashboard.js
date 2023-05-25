import { Link } from "react-router-dom";
import Heading from "./Heading";
import enterprise from "./enterprise.jpeg";

function EnterpriseDashboard() {
  return (
    <>
      <Heading />
      {/* big screens */}
      <div className=" 7xxl:hidden 820xxl:hidden hidden 1xl:flex h-[550px] 1xl:h-[700px] 1xl:w-[89%] 1xl:items-center   md:mt-[12%] 5xl:items-center  justify-between ml-[5%] w-[90%]  ">
        <div>
          <h1 className="  text-[40px] 2xl:w-[700px] font-[700px] 1xl:w-[500px] 4xl:w-[850px] 5xl:w-[1100px] md:w-[600px] text-left text-[#000000]">
            Our mission is to support you in forming an outstanding team that is globally recognized for its excellence.
          </h1>
          <p className=" text-[18px] w-[580px] 2xl:w-[650px] mt-[15px] 1xl:w-[450px] 4xl:w-[750px] 5xl:w-[1000px] font-[400] text-left text-[#000] ">
            Tech Eclat is a trusted partner for both enterprise teams and emerging startups. Our onboarding durations are 75% quicker than the industry standard.
          </p>
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
        <img className=" md:w-[550px] 2xl:w-[500px] 2xl:h-[400px] 1xl:w-[400px] 1xl:h-[350px] 5xl:w-[650px] 5xl:h-[550px] ml-[20px] md:h-[450px]" src={enterprise} alt="enterprise" />
      </div>
      {/* small screens */}
      <div className=" 7xxl:block 820xxl:block 6xxl:w-[85%] 6xxl:h-[900px] 6xxl:ml-[13%]  3xxl:w-[82%] 3xxl:h-[570px] grid h-[1000px] 1xl:hidden 820xxl:h-[1100px] 820xxl:mt-[8rem] mt-[7rem] 820xxl:w-[750px]  ml-[60px] w-[400px]  ">
        <div>
          <h1 className="  820xxl:text-[38px] 6xxl:text-[30px] 6xxl:w-[90%] 3xxl:text-[16px] 3xxl:w-[70%] 820xxl:w-[700px] font-[700px] w-[380px] text-left text-[#000000]">
            Our mission is to support you in forming an outstanding team that is globally recognized for its excellence.
          </h1>
          <p className=" text-[18px] w-[380px] 3xxl:hidden 820xxl:hidden mt-[15px] font-[400] text-left text-[#000] ">
            Tech Eclat is a trusted partner for both enterprise teams and emerging startups. Our onboarding durations are 75% quicker than the industry standard.
          </p>
          <img className=" mt-[30px] 6xxl:w-[450px] 6xxl:h-[400px] w-[380px] 3xxl:w-[250px] 3xxl:h-[200px] 820xxl:w-[700px] 820xxl:h-[600px]  h-[320px]" src={enterprise} alt="enterprise" />
          <p className=" text-[18px] 6xxl:text-[16px] 6xxl:w-[80%] 3xxl:w-[70%] 3xxl:text-[10px] w-[380px] 820xxl:block 820xxl:text-[18px] 820xxl:w-[700px] mt-[15px] font-[400] text-left text-[#000] ">
            Tech Eclat is a trusted partner for both enterprise teams and emerging startups. Our onboarding durations are 75% quicker than the industry standard.
          </p>

          <div className="flex justify-between 3xxl:w-[80%] w-[380px] 820xxl:w-[650px] items-center mt-[2rem] ">
            <Link to="">
              <div className=" 820xxl:text-[14px] 6xxl:w-[186px] 6xxl:text-[12px] 3xxl:w-[120px] 3xxl:text-[10px] font-[400] text-center text-[#fff] flex justify-evenly items-center rounded-[5px] pt-[px] 820xxl:w-[186px] h-[48px] bg-[#38761D] ">
                <h1>Schedule a Call</h1>
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Link>
            <Link to="">
              <h1 className=" 820xxl:text-[14px] 6xxl:w-[186px] 6xxl:text-[12px] 3xxl:pt-[15px] 3xxl:w-[120px] 3xxl:text-[10px]  font-[400] text-center text-[#38761D] rounded-[5px] pt-[10px] 820xxl:w-[186px] h-[48px] border-[1px] border-[#5E8F48] ">
                Watch an Overview
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterpriseDashboard;
