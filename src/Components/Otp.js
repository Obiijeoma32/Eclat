import { Link } from "react-router-dom";
import HeaderForSignup from "./HeaderForSignup";

function Otp() {
  return (
    <>
      <div className=" bg-[#fff] w-[100%] h-[150vh]">
        <HeaderForSignup />
        <div className="pt-[10%] pb-[20px] ml-[30%]">
          <div className="w-[512px]  h-[636px] ">
            <div className=" pt-5 ">
              <h4 className=" text-[30px] text-center text-[#1E2757] ">Enter Verification Code</h4>
              <p className=" w-[320px] ml-[100px] mt-[20px] text-center text-[#7D90B8] text-[16px] ">Enter the 4 digit verification code sent to your email address</p>
              <form autoComplete="on" className="ml-[3rem] mt-[40px] flex justify-between w-[500px]" action="">
                <input required className=" w-[103px] mt-[11px]  mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="number" placeholder="" />
                <input required className=" w-[103px] mt-[11px]  mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="number" placeholder="" />
                <input required className=" w-[103px] mt-[11px]  mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="number" placeholder="" />

                <input required className=" w-[103px] mt-[11px]  mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="number" placeholder="" />
              </form>
              <div className="w-[750px] ml-[90px]">
                <Link className=" " to="/createpassword">
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
