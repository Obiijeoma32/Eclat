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
      <div className="mt-5 justify-between ml-[4rem] w-[85%] flex 5xl:ml-[5%]">
        <img className=" w-[500px] mt-[5rem] h-[400px]" src={shakir} alt="Business manager" />
        <div className="mt-[8rem]">
          <h1 className=" text-left  w-[450px] text-[48px] font-[600] text-[#222222]  ">You decide what best suits you</h1>
          <ul className="tracking-[1px] mt-3  font-[400] text-[#4f4f4f] text-left text-[16px]">
            <li className="flex items-center mb-1 w-[450px] justify-between">
              {" "}
              <span className="w-[40px] mb-6">•</span> Uncover compensation packages that align with your expertise and qualifications.
            </li>
            <li className="flex items-center mb-1 w-[450px] justify-between">
              {" "}
              <span className="w-[34px] mb-6">•</span> Partner exclusively with companies that we have confidence in.
            </li>
            <li className="flex items-center mb-1 w-[450px] justify-between">
              {" "}
              <span className="w-[40px] mb-6">•</span> Obtain timely payments in either your local currency, USD, or cryptocurrency.
            </li>
          </ul>
        </div>
      </div>
      <div className=" ml-[5rem] w-[85%]  mt-[4rem] h-[600px] items-center justify-between flex 5xl:ml-[5%]">
        <div className=" w-[80%] ">
          <h1 className=" text-left  w-[650px] text-[36px] font-[600] text-[#000] opacity-80 ">Discover fulfilling employment opportunities with reputable organizations.</h1>
          <p className="tracking-[1px] mt-3 w-[500px] font-[400] text-[#000] opacity-80 text-left text-[16px]">
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
            <img className=" w-[300px]" src={people} alt="people" />
            <p className="text-[#000000] w-[300px] font-[600] text-[14px]">12,000+ people already joined Techeclat Get started today!</p>
          </div>
        </div>
        <img className="w-[500px]  h-[400px]" src={talentimg} alt="Eclat" />
      </div>
      <FooterEnterprise />
    </>
  );
}

export default Enterprise;
