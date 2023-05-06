import React from "react";
import p2 from "../img/p2.jpg";
import loc from "../img/loc.png";
// import img7 from "../img/1.jpg";
import g1 from "../img/g1.png";
import cal from "../img/cal.png";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Contact() {
  return (
      <>
      <Navbar/>
        <div className="contactPage">
        <div className="photoC"  >
                {/* <img  id='projectImage' src={img7} className="d-block w-100" alt="Photo" /> */}
                <div className="centeredc" id='headddd'>CONTACT US</div>
            </div>

          {/**************************************************hero section 2********************************************/}

          <div className=" ">
            <div
              className="p-4 my-[5rem]   flex flex-col flex-wrap lg:flex-row 
            justify-between items-center mx-auto mt-12 "
            >
              {/****image wala part* **8*/}
              <div>
                <img src={p2} className="h-[30rem]  rounded-md w-[25rem] " />
              </div>

              {/******8beech wala part****/}
              <div className="  border-solid border-2 rounded-md border-slate-200 h-[30rem] w-[24rem]">
                <h1 className="text-2xl p-2 text-center font-semibold font-serif ">
                  Let's Discuss About Your Spaces!
                </h1>
                <h3 className=" p-4   mt-3 ">
                  A descriptive paragraph that tells <br /> clients how good you
                  are and proves that you are the <br /> best choice that
                  they've made. This paragraph <br /> is also for those who are
                  looking out for a reliable interior design firm.
                </h3>

                {/* keypoints */}
                <ul className="mt-5  pl-2">
                  <li className="font-mullish text-black flex space-x-2 ">
                    <svg
                      class="h-7 w-7 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-xl font-serif">
                      Free Consultation
                    </span>
                  </li>
                  <li className="font-mullish text-black flex space-x-2">
                    <svg
                      class="h-7 w-7 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-xl font-serif">
                      Budget Quotations
                    </span>
                  </li>
                  <li className="font-mullish text-black flex space-x-2">
                    <svg
                      class="h-7 w-7 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-xl font-serif">
                      Latest Technologies
                    </span>
                  </li>
                  <li className="font-mullish text-black flex space-x-2">
                    <svg
                      class="h-7 w-7 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-xl font-serif">
                      Eco Friendly Constructions
                    </span>
                  </li>
                </ul>
              </div>

              {/*****8forum wala part*******8*/}
              <div className="co  border-1 rounded-md border-slate-200 h-[30rem] w-[24rem] p-3" >
                    <div className='mb-4' style={{color:"#0196d2", fontWeight:"bold", textAlign:"center",fontSize:"2rem"}}>WE'RE READY, LET'S TALK</div>
                    <br/>
                    <div className="mb-3 ">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="E-mail address " />
                    </div>
                    <div className="mb-3">

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
                    </div>
                    <button type="button" id='button' className="btn btn-primary bg-lime-400">Send message</button>
                </div>
            </div>
               {/* end form wala part */}
          </div>
       

          {/* contact us  */}
              
                <div style={{textAlign:"center" ,color:"green", fontSize:"3rem",fontWeight:"500"}}>
                  Contact Details
                </div>
            



                {/***************************************cards***************************/}
  
            <div className="    flex flex-col lg:flex-row    justify-between items-center mx-auto mt-20 font-serif p-5">
              {/* card 1 */}
              <div className="card w-[23rem] h-[15rem]  drop-shadow-md hover:drop-shadow-xl relative cursor-pointer  ">
                <img
                  src={cal}
                  className="h-9  mt-6 text-center mx-auto"
                />
                <div className="card-body  text-center mx-auto text-center">
                  <h5 className="card-title font-bold text-2xl">Call Us</h5>
                  <p className="card-text  text-2xl">+91 678488555 </p>
                </div>
              </div>

              {/* card2 */}
              <div className="card  w-[23rem]  h-[15rem]  drop-shadow-md hover:drop-shadow-xl relative cursor-pointer ">
                <img src={g1} className="h-9  mt-6    mx-auto" alt="..." />
                <div className="card-body   mx-auto mt-4 ">
                  <h5 className="card-title font-extrabold text-2xl  text-center">
                    Gmail us{" "}
                  </h5>
                  <span className="card-text text-center  font-bold  ">
                    abc08927@gmail.com
                  </span>
                </div>
              </div>

              {/* crad3 */}
              <div className="card w-[23rem]  h-[15rem] rounded  drop-shadow-md hover:drop-shadow-xl relative cursor-pointer">
                <img src={loc} className="h-9 mt-6    mx-auto " alt="..." />
                <div className="card-body mx-auto text-center ">
                  <h5 className="card-title font-extrabold text-2xl  ">
                    ADDRESS
                  </h5>
                  <span className="card-text text-xl font-bold ">
                    IIT Seelampur <br /> Shastri park Zero pusta <br /> Near
                    Kashmiri Gate{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
       
        <Footer/>
      </>
   
  );
}