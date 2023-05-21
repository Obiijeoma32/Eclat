import { Link } from "react-router-dom";
import Select from "react-select";
import Heading from "./Heading";
import SideBar from "./SideBar";
import "../App.css";

function ResourceDetails2() {
  const employmentStatus = [
    { value: "Full-time employment", label: "Full-time Employment" },
    { value: "Part-time employment", label: "Part-time Employment" },
    { value: "Casual employment", label: "Casual Employment" },
    { value: "Contract employment", label: "Contract Employment" },
    { value: "Temporary employment", label: "Temporary Employment" },
    { value: "Self-employment", label: "Self-Employment" },
    { value: "Zero-hours contract", label: "Zero-hours Contract" },
  ];
  const customStyles = {
    menu: (base) => ({
      ...base,

      color: "#7D90B8",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#7D90B8",
    }),
    control: (base) => ({
      ...base,
      height: 50,
      backgroundColor: "#fafafa",
      color: "rgba(10, 10, 10, 0.5)",
      paddingLeft: "7px",
      outline: "none",
      borderColor: "#DCDDE5",
      borderRadius: "4px",
      fontSize: "14px",
    }),
  };

  return (
    <>
      <Heading />
      <div className=" h-[200vh] 10inch:ml-[6%] 6xxl:w-[90%] 6xxl:mt-[0px] flex 5xl:mt-[-5%] 3xxl:mt-[10%] 820xxl:mt-[0px] 5xl:ml-[5%]">
        <SideBar />
        <div className=" mt-[12%] 6xxl:w-[85%] 4xl:ml-[24rem]  3xxl:ml-[1rem] 5xl:ml-[25rem] ml-[25rem] 820xxl:ml-[16rem] 1xl:ml-[22rem]">
          <h1 className=" 3xxl:w-[350px] 820xxl:w-[471px] text-[#38761D] 820xxl:text-[30px] 3xxl:text-[20px] font-[600] opacity-80 ">Kindly fill in the details</h1>
          <p className="3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[500px] text-[#7D90B8] 3xxl:text-[12px] 820xxl:text-[18px] font-[300] mt-[14px] 5xl:w-[1220px] 4xl:w-[920px] ">Please fill in the details below so we can get in touch with you</p>

          <form className="mt-7" action="">
            <label className=" 3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="offer">
              What is your current employment status
            </label>

            <br />
            <Select
              required
              placeholder="Select your employment status"
              styles={customStyles}
              className=" mb-[20px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              options={employmentStatus}
            />
            <label className=" 3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="company">
              What is the name of your company ?
            </label>

            <br />
            <input
              className="text-[14px]  border-[#DCDDE5] 3xxl:w-[300px] 6xxl:w-[90%] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] 820xxl:w-[471px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  Google"
              type="text"
            />
            <br />

            <label className=" 3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="industry">
              What industry is your company in ?
            </label>
            <br />
            <input
              className="text-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  Fintech"
              type="text"
            />
            <br />
            <label className=" 3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="industry">
              What is your job title ?
            </label>
            <br />
            <input
              className="text-[14px] 3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  Graphics Designer"
              type="text"
            />

            <br />
            <label className=" 3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="period of employment">
              Period of employment ?
            </label>
            <br />
            <div className=" flex 5xl:w-[900px] 4xl:w-[900px]  justify-between 820xxl:w-[471px] 3xxl:w-[300px] 6xxl:w-[90%] w-[471px]">
              <input
                className="text-[14px] 5xl:w-[430px] 6xxl:w-[220px] 4xl:w-[430px] 820xxl:w-[228px] pr-[14px] 3xxl:w-[140px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[228px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                placeholder="Starting year"
                type="number"
              />

              <input
                className="text-[14px] 4xl:w-[430px] 5xl:w-[430px] 6xxl:w-[220px] 820xxl:w-[228px] pr-[14px] 3xxl:w-[140px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[228px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                placeholder="End year"
                type="number"
              />
            </div>

            <div className=" flex justify-between items-center w-[185px]">
              <input className=" rounded-[2px] w-[20px] h-[20px] file:border-[1px] border-[#0098DA] accent-transparent " type="checkbox" />
              <label className=" text-[14px] text-[#192850]" htmlFor="currently working here">
                I currently work here
              </label>
            </div>
            <br />
            <label className="3xxl:w-[150px] 3xxl:text-[10px] 820xxl:text-[16px] text-[#1E2757]" htmlFor="role">
              Give a brief description about your job role ?
            </label>
            <br />
            <textarea
              className="text-[14px] pt-[14px] 820xxl:w-[471px] 3xxl:w-[300px] 6xxl:w-[90%]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[80px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="Enter description"
              type="text"
            />
          </form>
          <br />

          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="mt-[40px]"
            to="/resourcedetails/resourcesdetails2/resourcedetails3"
          >
            <h1 className="3xxl:w-[300px] 6xxl:w-[90%] 820xxl:w-[471px] w-[471px] h-[50px] rounded-[5px] bg-[#38761D] pt-[15px] opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  ">Continue</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResourceDetails2;
