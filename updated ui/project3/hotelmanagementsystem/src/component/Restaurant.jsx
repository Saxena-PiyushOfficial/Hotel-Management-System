import React from 'react'

export default function Restaurant() {
  return (
    <div>
    <div className="back_re">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="title">
                 <h2>Restaurant</h2>
              </div>
           </div>
        </div>
     </div>
  </div>
  
  <div  className="restaurant">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="titlepage">
                 <p  className="margin_0">Lorem Ipsum available, but the majority have suffered </p>
              </div>
           </div>
        </div>
        <div className="row">
           <div className="col-md-4 col-sm-6">
              <div id="serv_hover"  className="room">
                 <div className="restaurant_img">
                    <figure><img src="images/room1.jpg" alt="#"/></figure>
                 </div>
                 <div className="bed_room">
                    <h3>Breakfast</h3>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                 </div>
              </div>
           </div>
           <div className="col-md-4 col-sm-6">
              <div id="serv_hover"  className="room">
                 <div className="room_img">
                    <figure><img src="images/room2.jpg" alt="#"/></figure>
                 </div>
                 <div className="bed_room">
                    <h3>Lunch</h3>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                 </div>
              </div>
           </div>
           <div className="col-md-4 col-sm-6">
              <div id="serv_hover"  className="room">
                 <div className="room_img">
                    <figure><img src="images/room3.jpg" alt="#"/></figure>
                 </div>
                 <div className="bed_room">
                    <h3>Dinner</h3>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                 </div>
              </div>
           </div>
           
        </div>
     </div>
  </div>        

</div>
  )
}
