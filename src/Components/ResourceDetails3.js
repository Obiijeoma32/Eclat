import { Link } from "react-router-dom";
import Heading from "./Heading";
import SideBar from "./SideBar";
import "../App.css";

function ResourceDetails3() {
  return (
    <>
      <Heading />
      <div className=" h-[200vh] flex 5xl:ml-[5%]">
        <SideBar />
        <div className=" mt-[12%] ml-[25rem]">
          <h1 className=" text-[#38761D] text-[30px] font-[600] opacity-80 ">Kindly fill in the details</h1>
          <p className="  text-[#7D90B8] text-[18px] font-[300] mt-[14px] 5xl:w-[1220px] 4xl:w-[920px] ">Please fill in the details below so we can get in touch with you</p>

          <form className="mt-7" action="">
            <label className=" text-[16px] text-[#1E2757]" htmlFor="company">
              What is the name of your College/University ?
            </label>

            <br />
            <input className="text-[14px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] " placeholder="E.g  University of Lagos" type="text" />
            <br />

            <label className=" text-[16px] text-[#1E2757]" htmlFor="industry">
              What is your area of study ?
            </label>
            <br />
            <input className="text-[14px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] " placeholder="E.g  Computer Science" type="text" />
            <br />
            <label className=" text-[16px] text-[#1E2757]" htmlFor="industry">
              What is your degree ?
            </label>
            <br />
            <input className="text-[14px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] " placeholder="Enter your degree" type="text" />

            <br />
            <div className=" flex  justify-between w-[471px]">
              <div>
                <label className=" text-[16px] text-[#1E2757]" htmlFor="period of employment">
                  Year of starting ?
                </label>
                <br />
                <input
                  className="text-[14px]  pr-[14px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[228px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                  placeholder="Starting year"
                  type="number"
                />
              </div>
              <br />
              <div>
                <label className=" text-[16px] text-[#1E2757]" htmlFor="period of employment">
                  Year of graduation ?
                </label>
                <br />
                <input className="text-[14px] pr-[14px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[228px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] " placeholder="End year" type="number" />
              </div>
            </div>
          </form>
          <br />

          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="mt-[40px]"
            to="/homeforapplicant"
          >
            <h1 className=" w-[471px] h-[50px] rounded-[5px] bg-[#38761D] pt-[15px] opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  ">Continue</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResourceDetails3;
