import React from 'react'
import gallery1 from '../images/gallery1.jpg'
import gallery2 from '../images/gallery2.jpg'
import gallery3 from '../images/gallery3.jpg'
import gallery4 from '../images/gallery4.jpg'
import gallery5 from '../images/gallery5.jpg'
import gallery6 from '../images/gallery6.jpg'
import gallery7 from '../images/gallery7.jpg'
import gallery8 from '../images/gallery8.jpg'

function Gallery() {
  return (
    <div>
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                    <h2>gallery</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div  className="gallery">
         <div className="container">
           
            <div className="row">
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery1} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery2} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery3} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery4} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery5} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery6} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery7} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery8} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
    </div>
  )
}

export default Gallery