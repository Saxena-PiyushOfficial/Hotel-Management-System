import React from 'react'
import gallery from '../image/gallery1.jpg';

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
                     <figure><img src={gallery} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery} alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src={gallery} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
    </div>
  )
}

export default Gallery