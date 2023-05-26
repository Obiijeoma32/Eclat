import { Link } from "react-router-dom";
import Heading from "./Heading";
import SideBar from "./SideBar";
import "../App.css";

function ResourceDetails3() {
  return (
    <>
      <Heading />
      <div className=" h-[200vh] 10inch:ml-[6%] 3xxl:mt-[10%] 6xxl:w-[90%] 6xxl:mt-[0px] 5xl:mt-[-5%] 820xxl:mt-[0] flex 5xl:ml-[5%]">
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
              className="text-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="Enter your degree"
              type="text"
            />

            <br />
            <div className="  3xxl:w-[320px] 6xxl:w-[90%] 4xl:w-[900px] 820xxl:w-[471px] 5xl:w-[900px]  w-[471px]">
              <div>
                <label className=" 3xxl:w-[100px]  3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="period of employment">
                  Year of starting ?
                </label>
                <br />
                <input
                  className="text-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                  placeholder="Starting year"
                  type="number"
                />
                <br />
              </div>

              <div>
                <label className=" 3xxl:text-[10px] 820xxl:text-[16px] 3xxl:w-[100px] text-[#1E2757]" htmlFor="period of employment">
                  Year of graduation ?
                </label>
                <br />
                <input
                  className="text-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                  placeholder="End year"
                  type="number"
                />
              </div>
            </div>
          </form>
          <br />

          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="mt-[40px]"
            to=""
          >
            <h1 className="3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] w-[471px] h-[50px] rounded-[5px] bg-[#38761D] pt-[15px] opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  ">Submit</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResourceDetails3;
