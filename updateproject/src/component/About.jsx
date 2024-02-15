import React from 'react'
import about from '../images/about.png'

function About() {
  return (
    <div>
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>About Us</h2>
                  </div>
               </div>
            </div>
      </div>
   </div>

   <div className="about">
      <div className="container-fluid">
         <div className="row">
            <div className="col-md-5">
               <div className="titlepage">
                  
               <p className="margin_0">Welcome to GrandIn, a singular solution designed to redefine efficiency and elevate the guest experience in the hospitality industry. At the core of our system is a commitment to seamlessly integrate every aspect of hotel management, providing a comprehensive and user-friendly platform for both hoteliers and guests.

Our Vision:
To revolutionize the landscape of hotel management by delivering a unified and innovative solution that simplifies operations, enhances guest satisfaction, and propels hotel businesses to new heights.

Our Mission:
We are dedicated to providing hoteliers with a powerful and intuitive management system that encompasses reservations, room management, and guest services. By harnessing cutting-edge technology, we aim to empower hotels of all sizes, allowing them to focus on delivering exceptional experiences to their guests.



At GrandIn, we are not just a system; we are a partner in your hotel's success. Join us in transforming the way you manage your hotel, providing unparalleled service to your guests, and ensuring that every stay is a memorable experience.</p>
               </div>
            </div>
            <div className="col-md-7">
               <div className="about_img">
                  <figure><img src={about} alt="#"/></figure>
               </div>
            </div>
         </div>
      </div>
   </div>

   </div>
  )
}

export default About