import React from "react";
import photo1 from "../img/photo1.jpg";
import img7 from "../img/about3.jpg";
import twitter from "../img/twitter.png";
import insta from "../img/insta.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function About() {
  return (
   <>
   <Navbar/>
        {/* mid text part */}
        <div className="about">
        <div className="aboutPage"  >
          <div className="aboutimg"> 
                  <img  id='aboutImage' src={img7} className="d-block w-100" alt="Photo"  />
                  </div>
                <div className="abouth" id='headddd'>ABOUT<br/>
                {/* <span style={{fontSize:"1rem"}}>the website and us</span> */}
                </div>
            </div>
          {/* hero section */}
          <section className=" relative">
            <div
              className=" w-10/12 max-w-[1080px]  flex flex-col lg:flex-row 
            justify-between items-center mx-auto mt-10 py-12 flex-col-reverse "
            >
              {/* left part */}
              <div className="space-y-3 max-w-[50%]">
                <div className="space-y-1.5 mt-[3rem]">
                  <div className="font-bold text-orange-500 text-2xl">
                    INTERIOR DESIGNER.
                  </div>
                  <div className=" font-extrabold text-2xl">PRAVEEN KUMAR</div>
                </div>

                <p className="">
                  Totam cillum molestie a dolore alias diamlorem corrupti.
                  Exercitationem iure. <br /> Risus maxime mollis molestias
                  exercitation nascetur non repudiandae sit <br /> voluptates
                  velit praesentium! Netus natus dicta nibh condimentum porta
                  congue platea cras lacinia pretium, <br /> explicabo qui
                  praesent duis minima hendrerit. Voluptas illum duis voluptas
                  dignissimos saepe suspendisse veritati.
                  <br /> Maxime suscipit odit nihil, adipiscing odio ipsa mollit
                  sagittis nostra egestas pariatur porttitor feugiat cras class
                  porttitor.
                </p>

                <div className="  ">
                  <span className="font-bold ">Get In Touch</span>
                  {/* icons */}
                  <div className="flex flex-row  mt-3 space-x-5 s2  h-16 w-25 rounded-md   cursor-pointer ">
                    <a href="https://twitter.com/home">
                      {" "}
                      <img
                        src={twitter}
                        className="h-10 lg:w-10   cursor-pointer bg-none drop-shadow-2xl hover:drop-shadow-xl mt-2"
                      />
                    </a>
                    <a href="https://www.instagram.com/rohit_rajput2201/">
                      {" "}
                      <img
                        src={insta}
                        className="h-10 w-10 cursor-pointer drop-shadow-2xl hover:drop-shadow-xl mt-2 "
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* right part */}
              <img
                src={photo1}
                className=" h-full w-[25rem] mr-8 rounded drop-shadow-2xl hover:drop-shadow-xl relative
                  md:max-w-[400px] lg:max-w-[600px] md:block lg:block "
              />
            </div>
          </section>
        </div>
        <Footer/>
      </>
   
  );
}