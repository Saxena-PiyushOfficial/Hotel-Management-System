import React from "react";
import { Contact } from "./Contact";
// import BookingForm from './BookingForm'
import { Link } from "react-router-dom";
import About from "./About";
import Gallery from "./Gallery";
import Restaurant from "./Restaurant";
import Topbar from "./Topbar";
import BottamBar from "./BottamBar";

function Home() {
  return (
    <div>
      {/* <header>
         <Topbar />
      </header> */}
      <section className="banner_main"></section>
      <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
        <ol className="carousel-indicators">
          {/* <li data-target="#myCarousel" data-slide-to="0" className=""></li>
               <li data-target="#myCarousel" data-slide-to="1" className=""></li>
               <li data-target="#myCarousel" data-slide-to="2" className="active"></li> */}
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              className="first-slide"
              src="images/banner1.jpg"
              alt="First slide"
            />
            <div className="container"></div>
          </div>
          <div className="carousel-item">
            <img
              className="second-slide"
              src="images/banner2.jpg"
              alt="Second slide"
            />
          </div>
          {/* <div className="carousel-item active">
                  <img className="third-slide" src="images/banner3.jpg" alt="Third slide"/>
               </div>  */}
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="booking_ocline">
        <div className="container">
          <div className="row"></div>

          <div className="col-md-5">
            <div className="book_room">
              <h1>Book a Room Online</h1>
              <form className="book_now">
                <div className="row">
                  <div className="col-md-12">
                    <span>Arrival</span>
                    <img className="date_cua" src="images/date.png" />
                    <input
                      className="online_book"
                      placeholder="dd/mm/yyyy"
                      type="date"
                      name="dd/mm/yyyy"
                    />
                  </div>
                  <div className="col-md-12">
                    <span>Departure</span>
                    <img className="date_cua" src="images/date.png" />
                    <input
                      className="online_book"
                      placeholder="dd/mm/yyyy"
                      type="date"
                      name="dd/mm/yyyy"
                    />
                  </div>

                  <div className="col-md-12">
                    <button className="book_btn">Book Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>About Us</h2>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software. Today it's seen all around the web; on
                  templates, websites, and stock designs. Use our generator to
                  get your own, or read on for the authoritative history of
                  lorem ipsum.{" "}
                </p>
                <a className="read_more"> Read More</a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img">
                <figure>
                  <img src="../image/about.png" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our_room">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Room</h2>
                <p>Lorem Ipsum available, but the majority have suffered </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room1.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Bed Room</h3>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room2.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Bed Room</h3>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room3.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Bed Room</h3>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room4.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Bed Room</h3>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room5.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Bed Room</h3>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room6.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Bed Room</h3>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>gallery</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <img src="../image/gallery1.jpg" alt="#" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="images/gallery2.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="images/gallery3.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="images/gallery4.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="images/gallery5.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="images/gallery6.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="images/gallery7.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="images/gallery8.jpg" alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Restaurant">
        <div className="Restaurant">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Restaurant</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="Restaurant_img">
                  <img src="../image/Restaurant1.jpg" alt="#" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="Restaurant_img">
                  <figure>
                    <img src="image/Restaurant.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="Restaurant_img">
                  <figure>
                    <img src="image/Restaurant.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="Restaurant_img">
                  <figure>
                    <img src="image/Restaurant.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="Restaurant_img">
                  <figure>
                    <img src="web/image/Restaurant.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="Restaurant_img">
                  <figure>
                    <img src="image/Restaurant.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="Restaurant_img">
                  <figure>
                    <img src="image/Restaurant.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="Restaurant_img">
                  <figure>
                    <img src="image/Restaurant.jpg" alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>

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
      
      {/* <footer>
         <BottamBar />
      </footer> */}
    </div>
  );
}

export default Home;
