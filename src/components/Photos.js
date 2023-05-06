import React from 'react'
import photo from '../img/1  FINAL.jpg'
import photo1 from '../img/ASTER.jpg'
import photo2 from '../img/BON CRSYTALO 600X1200_A.jpg'
import photo3 from '../img/TROPICAL NATURAL FINAL .jpg'
import photo4 from '../img/Equita 1.jpg'
import Navbar from './Navbar'

export default function Photos() {
    return (
        <>
        <Navbar/>
            <div className="imgBox">
                <h1 style={{textAlign:"center", fontSize:"5rem",padding:"100px 0",backgroundColor:"gray",color:"whitesmoke", fontWeight:"600"}}>PHOTOS  SECTION</h1>
              
                <div className="photoss">
                    <div className="boxx">

                        <div className="container"  >
                            <span >Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>
                       

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>


                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

        

                    </div>

                    

                </div>
                <br/>
                <br/>

                <div className="photoss">
                    <div className="boxx">

                        <div className="container"  >
                            <span >Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>
                       

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>


                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

        

                    </div>

                    

                </div>
                <br/>
                <br/>

                <div className="photoss">
                    <div className="boxx">

                        <div className="container"  >
                            <span >Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>
                       

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>


                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

                        <div className="container">
                            <img src={photo} className="card-img-top" alt="..." />
                        </div>

        

                    </div>

                    

                </div>
            </div>
        </>
    )
}
