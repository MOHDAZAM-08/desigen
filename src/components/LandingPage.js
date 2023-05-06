import React from 'react'
import photo1 from '../img/FINAL DESIGN.jpg'
import photo2 from '../img/BON CRSYTALO 600X1200_A.jpg'
import photo3 from '../img/photo3.jpg'
import photo4 from '../img/ASTER.jpg'
import photo5 from '../img/1.jpg'
import photo6 from '../img/pk1.jpg'
import photo7 from '../img/pk3 (2).jpg'
import photo8 from '../img/pk3 (1).jpg'
// import pic from '../img/landingImg.jpg'
import g1 from '../img/COLORATO  A.jpg'
import g2 from '../img/TROPICAL NATURAL FINAL .jpg'
import g3 from '../img/photo3.jpg'
import g4 from '../img/topimg2.jpg'
import g5 from '../img/BON CRSYTALO 600X1200_A.jpg'
import g6 from '../img/Equita 1.jpg'
import g7 from '../img/img5.jpg'
import Choose from './Choose'
import Navbar from './Navbar'
import Footer from './Footer'
import RunningText from './RunningText'

export default function LandingPage() {
    return (
        <>    
        <Navbar />
            <div className='topHeader'>
              <div className="headingOnFront">
                <div className='name'>SHIVEEN <span className='design'> DESIGN</span></div>
                <div className='dreams'>we design your dreams</div>
                </div>
            </div>

           <div className='description'>Interior Design Doesn't Have to Be Expensive or Complicated! <br></br> It Should Be Smart & User Friendly</div>
            

            <RunningText/>
           

            <div className='img-slidder'>
            <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={photo6} className=" image1 " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={photo7} className=" image2 " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={photo8} className=" image3 " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={photo4} className=" image4 " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={photo5} className=" image5 " alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
            </div>
            <section>
            </section>

        
         <Choose/>

         <div className="gallery">
                <h1 style={{textAlign:"center", padding:"3rem 0 ",fontSize:"3.3rem", color:"black",fontWeight:"bold"}}>GALLERY</h1>
                <div className="mesorny">
                    <div className="grid-images">
                        <img src={g1} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g2} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g3} alt="" />
                    </div>


                    <div className="grid-images">
                        <img src={g4} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g5} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g6} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g7} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g1} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g2} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g3} alt="" />
                    </div>


                    <div className="grid-images">
                        <img src={g4} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g5} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g6} alt="" />
                    </div>

                    <div className="grid-images">
                        <img src={g7} alt="" />
                    </div>

                </div>
            </div>

        <Footer/>
        </>

    )
}
