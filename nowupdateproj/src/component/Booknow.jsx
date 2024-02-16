import React from 'react'

function Booknow() {
  return (
    <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
    <ol className="carousel-indicators">
       <li data-target="#myCarousel" data-slide-to="0" className=""></li>
       <li data-target="#myCarousel" data-slide-to="1" className=""></li>
       <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
    </ol>
    <div className="carousel-inner">
       <div className="carousel-item">
          <img className="first-slide" src="images/banner1.jpg" alt="First slide"/>
          <div className="container">
          </div>
       </div>
       <div className="carousel-item">
          <img className="second-slide" src="images/banner2.jpg" alt="Second slide"/>
       </div>
       <div className="carousel-item active">
          <img className="third-slide" src="images/banner3.jpg" alt="Third slide"/>
       </div>
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
    </a>
 </div>
  )
}

export default Booknow