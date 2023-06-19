import { Link } from "react-router-dom";
import HeaderForSignup from "./HeaderForSignup";
import { useState } from "react";

function SignToNetwork() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    console.log(requestOptions);
    // setLoading(true); // start progress spinner
    fetch("http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9009/api/Eclat/user/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.data.id);

        if (data.message === "login successful") {
          localStorage.setItem("userId", data.data.id); // Save the id to localStorage

          const redirectUrl = `/homeforapplicant`;

          window.location.href = redirectUrl; // Redirect to "/resourcedetails" page
        } else {
          setError(data.message);
        }
      });
    // .catch((err) => {
    //   console.log(err.message);
    //   // setLoading(false); // stop progress spinner
    // });
  };
  return (
    <>
      <div className=" bg-[#fff] w-[100%] 6xxl:h-[150vh] h-[130vh]">
        <HeaderForSignup />
        <div className="pt-[7%] 3xxl:pt-[25%] 3xxl:ml-[0%] 10inch:ml-[25%] 6xxl:ml-[10%] 7xxl:ml-[15%] 6xxl:pt-[15%] 1xl:ml-[25%] 1halfxl:ml-[28%] 1halfxl:pt-[100px] 820xxl:ml-[20%] 820xxl:pt-[150px] pb-[20px] ml-[30%] 3xl:ml-[33%] 1xl:pt-[15%] 3xl:pt-[10%] 4xl:ml-[35%] 6xl:ml-[33%] 5xl:ml-[38%]">
          <div className="md:w-[512px] 3xxl:w-[85%]  h-[636px] ">
            <div className=" pt-5 ">
              <h4 className=" md:text-[30px] 3xxl:text-[24px] 3xxl:ml-[60px] md:ml-[0px] text-center text-[#1E2757] ">Sign in to the Network</h4>
              <div className=" md:w-[420px] 3xxl:w-[90%]  mt-[20px] mb-[20px] h-[50px]  border-[#DCDDE5]  ml-[50px]   rounded-[5px]  border-[1px] ">
                <div className=" md:w-[230px] 3xxl:w-[70%] 3xxl:ml-[40px] md:ml-[90px] h-[50px] flex items-center justify-evenly">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5006 12.2336C22.5006 11.3702 22.4291 10.7402 22.2744 10.0869H12.2148V13.9835H18.1196C18.0006 14.9519 17.3577 16.4102 15.9291 17.3902L15.909 17.5207L19.0897 19.9354L19.3101 19.9569C21.3339 18.1253 22.5006 15.4302 22.5006 12.2336Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.214 22.4996C15.1068 22.4996 17.5354 21.5662 19.3092 19.9562L15.9283 17.3894C15.0235 18.0078 13.8092 18.4395 12.214 18.4395C9.38069 18.4395 6.97596 16.6079 6.11874 14.0762L5.99309 14.0866L2.68583 16.595L2.64258 16.7128C4.40446 20.1428 8.02349 22.4996 12.214 22.4996Z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.12096 14.0764C5.89476 13.4231 5.76387 12.7231 5.76387 11.9998C5.76387 11.2764 5.89477 10.5764 6.10905 9.9231L6.10306 9.78397L2.75435 7.23535L2.64479 7.28643C1.91862 8.70975 1.50195 10.3081 1.50195 11.9998C1.50195 13.6915 1.91862 15.2897 2.64479 16.7131L6.12096 14.0764Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.214 5.55997C14.2259 5.55997 15.583 6.41164 16.3569 7.12335L19.3807 4.23C17.5236 2.53834 15.1069 1.5 12.214 1.5C8.02357 1.5 4.40447 3.85665 2.64258 7.28662L6.10686 9.92332C6.97599 7.39166 9.38077 5.55997 12.214 5.55997Z"
                      fill="#EB4335"
                    />
                  </svg>
                  <h3 className=" text-[#97A6C6] text-[14px] ">Sign up with Google</h3>
                </div>
              </div>
              <div className="md:w-[466px] 3xxl:w-[100%] rounded-[4px] mt-[20px] items-center flex justify-between">
                <h3 className=" md:w-[200px] 3xxl:w-[50%] border-[1px] h-[0px] ml-[50px] border-[#DCDDE5] ">{/* intentional break */}</h3>
                <h4 className=" text-[#181819] m-[7px] text-opacity-[42%] text-[14px]">OR</h4>
                <h3 className=" md:w-[200px] 3xxl:w-[50%] border-[1px] h-[0px] border-[#DCDDE5] ">{/* intentional break */}</h3>
              </div>
              <form autoComplete="on" className="ml-[3rem] mt-7" action="">
                <label className=" text-[16px] text-[#1E2757]" htmlFor="CEmail">
                  Email Address
                </label>
                <br />
                <input onChange={handleEmailChange} value={email} required className=" md:w-[420px] 3xxl:w-[100%] mt-[11px]  mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="email" placeholder="" />
                <br />
                <label className=" text-[16px]  text-[#1E2757]" htmlFor="cname">
                  Password
                </label>
                <br />
                <div className="md:w-[420px] 3xxl:w-[100%] mt-[11px]  mb-[15px] h-[50px] flex  justify-between items-center  pr-[14px] rounded-[5px]  border-[1px] border-[#DCDDE5]">
                  <input onChange={handlePasswordChange} value={password} required className=" h-[45px] pl-[14px]  outline-none w-[93%]   " type={showPassword === true ? "text" : "password"} placeholder="" />
                  <button className="h-[47px]" onClick={() => setShowPassword((open) => !open)} type="button">
                    {showPassword === true ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="2" stroke="#212529" stroke-width="1.5" />
                        <path d="M21 12C21 12 16.9706 17 12 17C7.02944 17 3 12 3 12C3 12 7.02944 7 12 7C16.9706 7 21 12 21 12Z" stroke="#212529" stroke-width="1.5" />
                      </svg>
                    ) : (
                      <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.375 8.40625C19.2893 8.4551 19.1948 8.48658 19.097 8.49888C18.9991 8.51118 18.8998 8.50406 18.8047 8.47794C18.7097 8.45182 18.6207 8.4072 18.5428 8.34664C18.465 8.28608 18.3999 8.21076 18.3512 8.125L16.57 5.0125C15.5344 5.7127 14.392 6.24018 13.1875 6.57438L13.7378 9.87625C13.754 9.97346 13.7509 10.0729 13.7287 10.1689C13.7065 10.2649 13.6656 10.3556 13.6083 10.4358C13.551 10.516 13.4784 10.5841 13.3948 10.6363C13.3112 10.6884 13.2181 10.7235 13.1209 10.7397C13.0809 10.7462 13.0405 10.7497 13 10.75C12.8225 10.7497 12.6509 10.6866 12.5157 10.5717C12.3804 10.4569 12.2903 10.2978 12.2612 10.1228L11.7203 6.88094C10.5795 7.03969 9.42227 7.03969 8.28151 6.88094L7.74058 10.1228C7.71147 10.2982 7.62103 10.4575 7.48538 10.5723C7.34974 10.6872 7.1777 10.7502 6.99995 10.75C6.9585 10.7498 6.91712 10.7464 6.8762 10.7397C6.77898 10.7235 6.6859 10.6884 6.60227 10.6363C6.51864 10.5841 6.44611 10.516 6.38882 10.4358C6.33153 10.3556 6.29061 10.2649 6.26839 10.1689C6.24617 10.0729 6.24309 9.97346 6.25933 9.87625L6.81245 6.57438C5.60835 6.23912 4.46664 5.71069 3.43183 5.00969L1.6562 8.125C1.55675 8.2983 1.39252 8.425 1.19965 8.47722C1.00678 8.52943 0.801067 8.5029 0.627765 8.40344C0.454462 8.30398 0.327767 8.13976 0.27555 7.94689C0.223333 7.75402 0.249871 7.5483 0.349327 7.375L2.22433 4.09375C1.56573 3.52476 0.960125 2.89719 0.414952 2.21875C0.346964 2.14284 0.295158 2.05387 0.262698 1.95727C0.230238 1.86067 0.217804 1.75847 0.226156 1.65691C0.234507 1.55535 0.263469 1.45655 0.311273 1.36655C0.359077 1.27655 0.42472 1.19724 0.504196 1.13346C0.583672 1.06967 0.675313 1.02275 0.773525 0.995564C0.871737 0.968374 0.97446 0.961484 1.07542 0.975315C1.17639 0.989146 1.27347 1.02341 1.36075 1.07601C1.44804 1.12861 1.52368 1.19844 1.58308 1.28125C3.13933 3.20688 5.86183 5.5 9.99995 5.5C14.1381 5.5 16.8606 3.20406 18.4168 1.28125C18.4755 1.19675 18.551 1.12523 18.6386 1.07115C18.7261 1.01707 18.8238 0.98158 18.9257 0.966893C19.0275 0.952205 19.1313 0.958632 19.2306 0.985775C19.3298 1.01292 19.4224 1.06019 19.5026 1.12466C19.5828 1.18913 19.6489 1.26942 19.6968 1.36052C19.7446 1.45162 19.7732 1.5516 19.7807 1.65422C19.7883 1.75684 19.7746 1.85992 19.7406 1.95704C19.7066 2.05416 19.653 2.14324 19.5831 2.21875C19.0379 2.89719 18.4323 3.52476 17.7737 4.09375L19.6487 7.375C19.699 7.46054 19.7319 7.55521 19.7454 7.65353C19.7588 7.75186 19.7527 7.85188 19.7272 7.9478C19.7017 8.04372 19.6575 8.13364 19.597 8.21233C19.5366 8.29103 19.4611 8.35694 19.375 8.40625Z"
                          fill="#212529"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <br />
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/forgot-password"
                >
                  <div className="md:w-[420px] 3xxl:w-[100%] flex justify-end">
                    <h3 className=" text-[#38761E] text-[14px]">Forgot Password</h3>
                  </div>
                </Link>
                <Link
                  onClick={handleLogin}
                  className=""
                  // to="/resourcedetails"
                >
                  <div className="mt-[20px] tracking-[2px] md:w-[420px] 3xxl:w-[100%] rounded-[8px] h-[50px] bg-[#38761E] text-center pt-[13px] opacity-90 text-[#fff]">
                    <h1>Sign In</h1>
                  </div>
                </Link>
                <p className=" text-[#FF1400] text-[16px] text-center mt-[10px] ">{error}</p>
              </form>
              <h1 className=" text-center text-[14px] tracking-[1px] mt-4 text-[#121D0E]  ">
                Don’t have an account?{" "}
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className=" text-[#38761D] hover:underline "
                  to="/loginuser"
                >
                  Register
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignToNetwork;
