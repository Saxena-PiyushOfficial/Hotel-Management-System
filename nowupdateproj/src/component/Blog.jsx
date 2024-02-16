import React from 'react'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'

export default function Blog() {
  return (
    <div>
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                      <h2>Blog</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <div  className="blog">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
               <div className="titlepage">
                    
                    <p className="margin_0">A Day in the Luxe Life: Exploring the Unparalleled Experience of Hotel GarndIn" </p>
                 </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img">
                        <figure><img src={blog1} alt="#"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>The Elegance of Hotel GrandIn Rooms</h3>
                        <span>⭐⭐⭐⭐⭐ </span>
                        <p>Step into a realm of sophistication and comfort as you explore the meticulously designed rooms at Hotel GrandIn. Each room is a sanctuary where luxury meets practicality, creating an atmosphere that embraces both relaxation and productivity.  </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img">
                        <figure><img src={blog2} alt="#"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Events and Special Occasions</h3>
                        <span>⭐⭐⭐⭐⭐ </span>
                        <p>Whether it's a romantic dinner for two or a grand celebration, [Hotel Name] is the ideal setting for your special moments. Our versatile event spaces, seamlessly connected to the charm of Hotel GrandIn, provide the perfect backdrop for weddings, corporate gatherings, and social events. </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img">
                        <figure><img src={blog3} alt="#"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Meet the Culinary Artisans</h3>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>Get acquainted with the creative minds behind the delectable dishes at Hotel GrandIn. In this segment, we introduce you to our culinary team, sharing their stories, inspiration. Discover the personalities shaping your dining experience and gain insights into the passion that fuels their culinary expertise. </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
