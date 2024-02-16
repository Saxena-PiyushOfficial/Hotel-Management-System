import React from 'react'


export const Contact = () => {
  return (
   <div>
   <div className="back_re">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="title">
                <h2>Contact Us</h2>
            </div>
         </div>
      </div>
   </div>
</div>

<div className="contact">
   <div className="container">
      <div className="row">
         <div className="col-md">
            <form id="request" className="main_form">
               <div className="row">
                  <div className="col-md-12 ">
                     <input className="contactus" placeholder="Name" type="type" name="Name"/> 
                  </div>
                  <div className="col-md-12">
                     <input className="contactus" placeholder="Email" type="type" name="Email"/> 
                  </div>
                  <div className="col-md-12">
                     <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                  </div>
                  <div className="col-md-12">
                     <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message</textarea>
                  </div>
                  <div className="col-md-12">
                     <button className="send_btn">Send</button>
                  </div>
               </div>
            </form>
         </div>
         <div className="col-md">
            <div className="map_main">
               <div className="map-responsive">
                  <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameBorder="0" style={{"border":0, "width": '100%'}} allowFullScreen=""></iframe>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

</div>
  )
}
