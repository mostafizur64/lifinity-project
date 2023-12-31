import React from "react";

import logo from "../../../assets/image/logo/logo.png";
import logo1 from "../../../assets/image/logo/logo1.png";
import footerLine from "../../../assets/image/Footer/Footer Line.png";

const Footer = () => {
  return (
    <>
      <footer className="footer lg:w[1520px] lg:h-[446px] h-[725px]  lg:px-[180px] px-4 lg:top-[10px]">
        <div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-4 lg:py-[100px]">
              <div>
                <img src={logo} alt />
                <img src={logo1} alt />
                <p className="text-[#64677C] text-[16px] font-normal	mt-2">
                  We growing up your business with <br />  personal AI manager.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center lg:gap-[186px]">
                  <div className=" ">
                    <h2 className="text-[16px] uppercase  text-[#FFF]">
                      {" "}
                      Platform
                    </h2>
                    <div className="flex flex-col justify-center  space-y-5 mt-[16px]">
                      <a className="text-[#64677C]" href="#">
                        Plans & Pricing
                      </a>
                      <a className="text-[#64677C]" href="#">
                        Personal AI Manager
                      </a>
                      <a className="text-[#64677C]" href="#">
                        AI Business Writer
                      </a>
                    </div>
                  </div>
                  <div className=" ">
                    <h2 className="text-[16px] uppercase text-[#FFF]">
                      {" "}
                      Company
                    </h2>
                    <div className="flex flex-col justify-center  space-y-5 mt-[16px]">
                      <a className="text-[#64677C]" href="#">
                        Blogs
                      </a>
                      <a className="text-[#64677C]" href="#">
                        Careers
                      </a>
                      <a className="text-[#64677C]" href="#">
                        News
                      </a>
                    </div>
                  </div>
                  <div className=" ">
                    <h2 className="text-[16px] uppercase text-[#FFF]">
                      {" "}
                      Resources
                    </h2>
                    <div className="flex flex-col justify-center  space-y-5 mt-[16px]">
                      <a className="text-[#64677C]" href="#">
                        Documentation
                      </a>
                      <a className="text-[#64677C]" href="#">
                        Papers
                      </a>
                      <a className="text-[#64677C]" href="#">
                        Press Conferences
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="lg:-mt-[-1px] mt-2" src={footerLine} alt="" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:mt-[38px] mt-2 ">
              <div className="lg:col-span-1 text-[#64677C]">
                <h3 className="text-[14px] ">© 2023 Maxwell Inc.</h3>
              </div>
              <div className="lg:col-span-1 flex lg:flex-row flex-col gap-5 justify-end text-[14px]">
                <a className="text-[#64677C]" href="#">
                  Terms of Service
                </a>
                <a className="text-[#64677C]" href="#">
                  Privacy Policy
                </a>
                <a className="text-[#64677C]" href="#">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
