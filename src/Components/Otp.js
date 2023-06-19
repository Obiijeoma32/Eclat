import { Link } from "react-router-dom";
import HeaderForSignup from "./HeaderForSignup";

function Otp() {
  return (
    <>
      <div className=" bg-[#fff] w-[100%] 820xxl:w-[100%]  1xl:w-[100%] h-[150vh]">
        <HeaderForSignup />
        <div className="pt-[10%] 10inch:ml-[10%] 6xxl:ml-[30px] 7xxl:ml-[12%] 6xxl:pt-[15%] 6xxl:w-[80%] 1xl:w-[85%] 1halfxl:w-[70%] bg-[#fff]  1halfxl:ml-[20%] 1halfxl:pt-[100px] 820xxl:ml-[1%] 820xxl:w-[80%] 820xxl:h-auto 820xxl:bg-[#fff]  820xxl:pt-[150px] pb-[20px] 1xl:ml-[10%] 5xl:ml-[40%] 1xl:pt-[15%] 4xl:ml-[35%] 6xl:ml-[34%]  3xl:ml-[33%] 3xl:pt-[10%] ml-[30%]">
          <div className="w-[512px] 1xl:w-[60%]   h-[636px] ">
            <div className=" pt-5  ">
              <h4 className=" text-[30px] 6xxl:ml-[18%] 820xxl:w-[650px] 820xxl:ml-[60px] xl:ml-[70px] 1xl:ml-[0px] text-center 5xl:ml-[70px] 6xl:ml-[60px] 2xl:ml-[50px] 4xl:ml-[80px] 3xl:ml-[80px] text-[#1E2757] ">Enter Verification Code</h4>
              <p className=" w-[320px] 6xxl:w-[80%] 1halfxl:ml-[1%] 13inch:ml-[33%] 14inch:ml-[33%]  ml-[100px] 820xxl:w-[650px] 820xxl:ml-[60px] 1xl:ml-[0px] xl:w-[400px] mt-[20px] 5xl:w-[400px] 6xl:w-[400px] 2xl:w-[370px] 3xl:w-[400px] 4xl:w-[400px] text-center text-[#7D90B8] text-[16px] ">
                Enter the 4 digit verification code sent to your email address
              </p>
              <form autoComplete="on" className="ml-[3rem] 1xl:w-[85%] 1xl:ml-[70px] 820xxl:w-[650px] 13inch:ml-[20%] 1halfxl:w-[100%] mt-[40px] flex justify-between w-[500px]" action="">
                <input required className=" w-[103px] mt-[11px]  mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="tel" placeholder="" />
                <input required className=" w-[103px] mt-[11px]  mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="tel" placeholder="" />
                <input required className=" w-[103px] mt-[11px]  mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="tel" placeholder="" />

                <input required className=" w-[103px] mt-[11px]  mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="tel" placeholder="" />
              </form>
              <div className="w-[750px] 13inch:ml-[33%]  14inch:ml-[26%] 6xxl:w-[80%] 820xxl:w-[650px] 1xl:ml-[95px] 820xxl:ml-[180px] ml-[90px]">
                <Link className=" w-[500px] " to="/createpassword">
                  <div className="mt-[20px] tracking-[2px] w-[420px] rounded-[8px] h-[50px] bg-[#38761E] text-center pt-[11px] opacity-90 text-[#fff]">
                    <h1>Continue</h1>
                  </div>
                </Link>
                <Link to="">
                  <h3 className=" text-[16px] text-[#38761D] mt-[30px] w-[420px] text-center ">Resend OTP</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
