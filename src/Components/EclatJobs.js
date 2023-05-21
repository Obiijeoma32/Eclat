import { Link } from "react-router-dom";
import Heading from "./Heading";
import SideBar from "./SideBar";
import "../App.css";

function Eclatjobs() {
  return (
    <>
      <Heading />
      <div className=" 3xxl:mt-[14%] 3xxl:w-[85%] 5xl:mt-[-4%] 6xxl:mt-[0%] flex 820xxl:mt-[2%] 6xxl:w-[90%] 1halfxl:ml-[0px] 1halfxl:mt-[-1%] 820xxl:ml-[5%] 5xl:ml-[5%] ">
        <SideBar />
        <div className="3xxl:w-[90%] 6xxl:w-[90%] mt-[11%] 5xl:mt-[11%] 3xxl:mt-[15%] 820xxl:ml-[30%] 3xxl:ml-[30px]  ml-[25rem] 1xl:ml-[22rem]  ">
          <h1 className="  3xxl:text-[16px] 820xxl:text-[30px] text-[#38761D] 820xxl:w-[400px] 1halfxl:w-[640px] font-[600] opacity-80 ">Let's start with your information</h1>
          <p className=" p  3xxl:hidden text-[#B6D7A8] 820xxl:hidden 1halfxl:block text-[18px] font-[300] mt-[14px] 4xl:hidden">Please fill in the details below so we can get in touch with you</p>
          <p className=" 3xxl:block 10inch:w-[85%] 3xxl:w-[85%] 4xl:block 5xl:w-[1220px]  4xl:w-[920px] 3xxl:text-[12px] 820xxl:block text-[#B6D7A8] 1halfxl:hidden hidden border-b-[1px] border-b-[#38761D] w-[400px] pb-[20px] 820xxl:text-[18px] font-[300] mt-[14px] ">
            Please fill in the details below so we can get in touch with you
          </p>

          <form className=" mt-7" action="">
            <label className=" text-[#38761D] 3xxl:text-[10px] 820xxl:text-[14px] font-[400] opacity-80 " htmlFor="name">
              Full Name
            </label>
            <br />
            <input
              className=" 3xxl:w-[250px] 10inch:w-[85%] 6xxl:w-[85%]  3xxl:text-[10px] 820xxl:text-[14px] 1halfxl:w-[640px] 820xxl:w-[400px] w-[640px] h-[60px] pl-[10px] mt-2 text-[#38761D] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] placeholder:text-[#38761D] bg-inherit  outline-none 5xl:w-[1220px] 4xl:w-[920px]"
              autoComplete="on"
              type="text"
              placeholder="Enter Name"
              required
            />
            <br />
            <br />
            <label className=" text-[#38761D] 3xxl:text-[10px] 820xxl:text-[14px] font-[400] opacity-80 " htmlFor="address">
              Email Address
            </label>
            <br />
            <input
              className=" w-[640px] 3xxl:w-[250px] 10inch:w-[85%] 6xxl:w-[85%] 1halfxl:w-[640px] 820xxl:w-[400px] h-[60px] text-[14px]  pl-[10px] mt-2 text-[#38761D] placeholder:text-[#38761D] bg-inherit border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4]   outline-none 5xl:w-[1220px] 4xl:w-[920px]"
              autoComplete="on"
              type="email"
              placeholder="ex:janedoe000@mail.com"
              required
            />
            <br />
            <br />
            <label className=" text-[#38761D] 3xxl:text-[10px] 820xxl:text-[14px] font-[400] opacity-80 " htmlFor="number">
              Phone Number
            </label>
            <br />
            <input
              className=" text-[14px] 3xxl:w-[250px] 10inch:w-[85%] 6xxl:w-[85%] 1halfxl:w-[640px] 820xxl:w-[400px] w-[640px] h-[60px] pl-[10px] mt-2 text-[#38761D] placeholder:text-[#38761D] bg-inherit border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] outline-none 5xl:w-[1220px] 4xl:w-[920px]"
              autoComplete="on"
              type="tel"
              placeholder="Enter Phone Number"
              required
            />
          </form>
          <div className=" flex w-[640px] 3xxl:w-[250px] 10inch:w-[85%] 6xxl:w-[85%]  1halfxl:w-[640px] 820xxl:w-[400px] h-[30%] justify-between mt-7 5xl:w-[1220px]  4xl:w-[920px]">
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/dashboard"
            >
              <h1 className=" 820xxl:w-[157px] 3xxl:w-[110px] h-[45px] bg-[#38761D] pt-3 opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  ">BACK</h1>
            </Link>

            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/eclatjobs/basicinfo"
            >
              <h1 className=" 820xxl:w-[157px] 3xxl:w-[110px] h-[45px] bg-[#38761D] pt-3 opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  ">NEXT STEP</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eclatjobs;
