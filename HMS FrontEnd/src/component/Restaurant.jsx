import React from 'react'
import breakfast from '../images/breakfast.jpg'
import lunch from '../images/Lunch.jpg'
import dinner from '../images/dinner1.jpg'

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
                 <p  className="margin_0">
"Taste the Extraordinary: Where Every Meal Is a Culinary Journey at Hotel GrandIn"</p>
              </div>
           </div>
        </div>
        <div className="row">
           <div className="col-md-4 col-sm-6">
              <div id="serv_hover"  className="room">
                 <div className="restaurant_img">
                    <figure><img src={breakfast} alt="#"/></figure>
                 </div>
                 <div className="bed_room">
                    <h3>Breakfast</h3>
                    <p>Sunrise Bliss: Unwrap the Day with a Breakfast Feast at Hotel GrandIn </p>
                 </div>
              </div>
           </div>
           <div className="col-md-4 col-sm-6">
              <div id="serv_hover"  className="room">
                 <div className="room_img">
                    <figure><img src={lunch} alt="#"/></figure>
                 </div>
                 <div className="bed_room">
                    <h3>Lunch</h3>
                    <p>Savor the Moment: Lunchtime Indulgence with Every Bite at Hotel GrandIn </p>
                 </div>
              </div>
           </div>
           <div className="col-md-4 col-sm-6">
              <div id="serv_hover"  className="room">
                 <div className="room_img">
                    <figure><img src={dinner} alt="#"/></figure>
                 </div>
                 <div className="bed_room">
                    <h3>Dinner</h3>
                    <p>
Unwind and Dine: Elevating Evenings with Culinary Excellence at Hotel GrandIn </p>
                 </div>
              </div>
           </div>
           
        </div>
     </div>
  </div>        

</div>
  )
}
