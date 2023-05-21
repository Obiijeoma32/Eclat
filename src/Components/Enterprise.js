import { Link } from "react-router-dom";
import Partners from "./Partners";
import EnterpriseDashboard from "./EnterpriseDashboard";
import talentimg from "./talentimg.jpeg";
import people from "./people.jpeg";
import shakir from "./shakir.jpeg";

import "../App.css";
import FooterEnterprise from "./FooterEnterprise";

function Enterprise() {
  return (
    <>
      <EnterpriseDashboard />
      <Partners />
      <div className="md:flex 820xxl:hidden 1xl:flex hidden items-center mt-5 justify-between ml-[4rem] w-[85%] 1xl:w-[89%]  5xl:ml-[5%]">
        <img className=" md:w-[500px] mt-[5rem] md:h-[400px] 1xl:w-[400px] 1xl:h-[300px] 5xl:w-[600px] 5xl:h-[500px] " src={shakir} alt="Business manager" />
        <div className="mt-[8rem]">
          <h1 className=" text-left  md:w-[450px] 4xl:w-[600px] text-[48px] font-[600] 5xl:w-[800px] text-[#222222]  ">You decide what best suits you</h1>
          <ul className="tracking-[1px] mt-3  font-[400] text-[#4f4f4f] text-left text-[16px]">
            <li className="flex items-center mb-1 md:w-[450px] 5xl:w-[800px] justify-between">
              {" "}
              <span className="w-[40px] mb-6">•</span> Uncover compensation packages that align with your expertise and qualifications.
            </li>
            <li className="flex items-center mb-1 md:w-[450px] 5xl:w-[620px] justify-between">
              {" "}
              <span className="w-[34px] mb-6">•</span> Partner exclusively with companies that we have confidence in.
            </li>
            <li className="flex items-center mb-1 md:w-[450px] 5xl:w-[650px] justify-between">
              {" "}
              <span className="w-[40px] mb-6">•</span> Obtain timely payments in either your local currency, USD, or cryptocurrency.
            </li>
          </ul>
        </div>
      </div>
      {/* small screens */}
      <div className="md:hidden 3xxl:mt-[10px]  7xxl:ml-[12%] 3xxl:w-[85%]  grid 820xxl:block 1xl:hidden 820xxl:w-[750px] mt-[40px] justify-between ml-[40px] w-[380px]  ">
        <img className=" w-[400px] mt-[3rem] ml-[90px] 6xxl:ml-[15%] 5xxl:ml-[0px] 5xxl:w-[400px] 5xxl:h-[300px] 3xxl:w-[250px] 3xxl:h-[200px] 3xxl:ml-[0px] h-[300px]" src={shakir} alt="Business manager" />
        <div className=" 3xxl:mt-[30px] 6xxl:ml-[10%] mt-[8rem]">
          <h1 className=" text-center 3xxl:w-[80%] 5xxl:ml-[0px] 5xxl:w-[75%] 5xxl:text-[20px] 3xxl:text-[16px]  w-[450px] mt-[2rem] text-[48px] font-[600] text-[#222222]  ">You decide what best suits you</h1>
          <ul className="tracking-[1px] 6xxl:ml-[5%] ml-[30px]  mt-3 3xxl:ml-[0px] 5xxl:text-[12px] 3xxl:text-[10px] font-[400] text-[#4f4f4f] text-left text-[16px]">
            <li className="flex items-center mb-1 w-[450px]  3xxl:w-[250px] justify-between"> &#x2022; Uncover compensation packages that align with your expertise and qualifications.</li>
            <li className="flex items-center mb-1 w-[450px] 5xxl:w-[80%] 3xxl:w-[250px] justify-between"> &#x2022; Partner exclusively with companies that we have confidence in.</li>
            <li className="flex items-center mb-1 w-[450px] 5xxl:w-[80%] 3xxl:w-[250px] justify-between"> &#x2022; Obtain timely payments in either your local currency, USD, or cryptocurrency.</li>
          </ul>
        </div>
      </div>
      <div className="md:flex 1xl:flex 820xxl:hidden hidden ml-[5rem] 2xl:w-[89%] w-[85%] 1xl:w-[89%]  mt-[6rem] h-[600px] items-center justify-between 5xl:ml-[5%]">
        <div className=" w-[80%] 1xl:w-[50%] ">
          <h1 className=" text-left 4xl:w-[1100px] 2xl:w-[700px] 1xl:w-[400px]  md:w-[650px] 5xl:w-[1100px] text-[36px] font-[600] text-[#000] opacity-80 ">Discover fulfilling employment opportunities with reputable organizations.</h1>
          <p className="tracking-[1px] mt-3 4xl:w-[900px]  5xl:h-[200px] md:w-[500px] 2xl:w-[650px] 1xl:w-[400px] 5xl:w-[1000px] font-[400] text-[#000] opacity-80 text-left text-[16px]">
            Become a part of the Eclat Talent Network and enjoy the satisfaction of stable employment, alongside trustworthy employers and attractive remuneration packages.
          </p>
          <div className=" mt-[30px] ">
            <Link className="w-[186px] rounded-[5px] h-[45px]  text-[16px] bg-[#38761D] flex items-center justify-evenly opacity-95  font-[600] text-[#fff]" to="/jobs">
              Access Network
              <svg className="mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
          </div>
          <div className=" mt-7">
            <img className=" w-[300px] " src={people} alt="people" />
            <p className="text-[#000000] w-[300px] font-[600] text-[14px]">12,000+ people already joined Techeclat Get started today!</p>
          </div>
        </div>
        <img className="md:w-[500px] 1xl:w-[500px] 1xl:h-[400px] 5xl:w-[600px] 5xl:h-[500px] md:h-[400px]" src={talentimg} alt="Eclat" />
      </div>
      <div className=" md:hidden grid 10inch:ml-[10%] 10inch:h-[900px] 820xxl:grid 820xxl:w-[80%] 820xxl:ml-[20px] 3xxl:w-[88%] 3xxl:h-[750px]  3xxl:ml-[5%] 1xl:hidden ml-[40px] 3xxl:mt-[0px] w-[60%] 820xxl:h-[1200px]  mt-[6rem] h-[900px] items-center justify-between ">
        <div className="  mt-[1rem] ">
          <div className="grid justify-between ml-[30px]">
            <h1 className=" text-left  5xxl:w-[100%] 5xxl:text-[22px] w-[400px] 3xxl:text-[16px] 3xxl:w-[80%] text-[28px] font-[600] text-[#000] opacity-80 ">Discover fulfilling employment opportunities with reputable organizations.</h1>
            <img className=" w-[400px] 5xxl:w-[400px] 5xxl:h-[350px] mt-[25px] 3xxl:w-[250px] 3xxl:h-[200px]   h-[300px]" src={talentimg} alt="Eclat" />
          </div>
          <p className="tracking-[1px] mt-[20px] ml-[30px] w-[400px] 3xxl:w-[80%] 3xxl:text-[10px]  font-[400] text-[#000] opacity-80 text-left text-[16px]">
            Become a part of the Eclat Talent Network and enjoy the satisfaction of stable employment, alongside trustworthy employers and attractive remuneration packages.
          </p>
          <div className=" ml-[20px] mt-[30px] ">
            <Link className="w-[186px] rounded-[5px] h-[45px] 3xxl:text-[10px] 3xxl:w-[140px] 3xxl:h-[40px]  text-[16px] bg-[#38761D] flex items-center justify-evenly opacity-95  font-[600] text-[#fff]" to="/jobs">
              Access Network
              <svg className="mt-1 3xxl:mt-[0px]  " width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
          </div>
          <div className=" ml-[20px] mt-7">
            <img className=" w-[300px] 3xxl:w-[200px]" src={people} alt="people" />
            <p className="text-[#000000] w-[300px] 3xxl:w-[200px] 3xxl:text-[10px] font-[600] text-[14px]">12,000+ people already joined Techeclat Get started today!</p>
          </div>

          {/* <img className="w-[500px]  h-[400px]" src={talentimg} alt="Eclat" /> */}
        </div>
        {/* <img className="w-[500px]  h-[400px]" src={talentimg} alt="Eclat" /> */}
      </div>
      <FooterEnterprise />
    </>
  );
}

export default Enterprise;
