import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import banner1 from "../images/banner.jpg";
import banner2 from "../images/banner2.jpg"
import banner3 from "../images/Banner3.jpg";
import about from "../images/about.png";
import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import room3 from "../images/room3.jpg";
import room4 from "../images/room4.jpg";
import room5 from "../images/room5.jpg";
import room6 from "../images/room6.jpg";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jpg";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import breakfast from "../images/breakfast.jpg";
import lunch from "../images/Lunch.jpg";
import dinner from "../images/dinner1.jpg";

function Home() {

  const [userSession, setUserSession] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('userinfo') !== null);

  const navigate = useNavigate();

  useEffect(() => {
    // Check session storage when the component mounts
    setIsLoggedIn(sessionStorage.getItem('userinfo') !== null);
 }, []); 

 const handleButtonClick = () => {
  const userSession = sessionStorage.getItem('userinfo');
  if (userSession) {
    console.log('User session exists:', userSession);
    navigate('/room', { replace: true });
  } else {
    navigate('/login', { replace: true });
    console.log('User session does not exist');
  }
};

  return (
    <div>
      <section className="banner_main"></section>
      <div
        id="myCarousel"
        className="carousel slide banner"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className=""></li>
          <li data-target="#myCarousel" data-slide-to="1" className=""></li>
          <li
            data-target="#myCarousel"
            data-slide-to="2"
            className="active"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="first-slide" src={banner2} alt="First slide" />
            <div className="container"></div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src={banner1} alt="Second slide" />
          </div>
          <div className="carousel-item active">
            <img className="third-slide" src={banner3} alt="Third slide" />
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          to="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link
          className="carousel-control-next"
          to="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
      <div className="booking_ocline" align="center">
        <div className="container">
          <div className="row"></div>

          <div className="col-md-7">
            <div className="book_room">
              <h1>𖤘 GrandIN Hotel 𖤘</h1>
              <form className="book_now">
                {/* <div className="row">
                  <div className="col-md-12">
                    <span>Arrival</span>
                    <img className="date_cua" src={date} />
                    <input
                      className="online_book"
                      placeholder="dd/mm/yyyy"
                      type="date"
                      name="dd/mm/yyyy"
                    />
                  </div>
                  <div className="col-md-12">
                    <span>Departure</span>
                    <img className="date_cua" src={date} />
                    <input
                      className="online_book"
                      placeholder="dd/mm/yyyy"
                      type="date"
                      name="dd/mm/yyyy"
                    />
                  </div> */}

                <div className="col-md-12">
                  <button className="book_btn" onClick={handleButtonClick}>
                    Book Now
                  </button>
                </div>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>About Us</h2>
                <p>
                Welcome to Hotel,
 We are dedicated to revolutionizing hotel operations with our innovative and user-friendly 
 system. Streamlining reservations, payments, and room management, our project is designed to 
 enhance guest experiences and simplify day-to-day hotel tasks. Join us on this
 journey of redefining hotel management, ensuring seamless operations and optimal guest satisfaction.{" "}
                {" "}
                </p>
                <a className="read_more">
                  {" "}
                  <Link className="nav-link" to="/about">
                    Read More
                  </Link>
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img">
                <figure>
                  <img src={about} alt="#" />
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
                <p>"Elevating Stay Experiences: Where Comfort Meets Efficiency in Every Room." </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={room1} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                <h3><Link to="/room">Triple Bed Room</Link></h3>
                  <p>
                  A room that can accommodate three persons and has
                   been fitted with three twin beds, one double bed 
                   and one twin bed or two double beds.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={room2} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                <h3><Link to="/room">Double Bed Room(AC)</Link></h3>
                  <p>
                  A room assigned to two people. May have one or more beds.
                  The room size or area of Double Rooms are generally between 
                  40 m² to 45 m².{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={room3} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                <h3>Double Bed Room(NonAC)</h3>
                  <p>
                  A room assigned to two people. May have one or more beds.
                  The room size or area of Double Rooms are generally between
                    60m² to 50 m².{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={room4} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                <h3><Link to="/room">Quad Bed Room</Link></h3>
                  <p>
                  A room assigned to four people. May have two or more beds.
                  The room size or area of Quad Rooms is generally between
                   70 m² to 85 m².{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={room5} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                <h3> <Link to="/room">Queen Bed Room</Link></h3>
                  <p>
                  room with a queen-sized bed. May be occupied by one or more people.
                  The room size or area of Queen Rooms is generally between 32 m² to 50 m².{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={room6} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                <h3><Link to="/room">King Bed Room</Link></h3>
                  <p>
                  A room with a king-sized bed. May be occupied by one or more people.
                  The room size or area of King Rooms is generally between 32 m² to 50 m².{" "}
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
                  <img src={gallery1} alt="#" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src={gallery2} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src={gallery3} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src={gallery4} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src={gallery5} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src={gallery6} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src={gallery7} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src={gallery8} alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container">
          <div className="gallery">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Blog</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <p className="margin_0">
                "Unlocking Hospitality Insights: Your Guide to Success in Hotel Management."{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog_box">
                <div className="blog_img">
                  <figure>
                    <img src={blog1} alt="#" />
                  </figure>
                </div>
                <div className="blog_room">
                <h3>Hotels GrandIn For Family For Stay Experience</h3>
                  <span>⭐⭐⭐⭐⭐</span>
                  <p>
                  The World Heritage Site of GrandIn is endowed with history and cultural heritage.
                   With a list of sightseeing attractions to explore Several factors like budget, amenities provided, location, food options, and 
                     others play a crucial role in deciding and then booking the perfect accommodation.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_box">
                <div className="blog_img">
                  <figure>
                    <img src={blog2} alt="#" />
                  </figure>
                </div>
                <div className="blog_room">
                <h3>Unveiling Elegance</h3>
                  <span>⭐⭐⭐⭐⭐ </span>
                  <p>
                  Upon stepping into [Hotel Name], guests are greeted by an atmosphere of refined elegance. From the opulent lobby to the meticulously designed rooms, each space is a testament to our commitment to providing an unparalleled experience.
                   Discover how our attention to detail and personalized service redefine the art of hospitality..{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_box">
                <div className="blog_img">
                  <figure>
                    <img src={blog3} alt="#" />
                  </figure>
                </div>
                <div className="blog_room">
                <h3>Dining at GrandIn</h3>
                  <span>⭐⭐⭐⭐⭐ </span>
                  <p>
                  Begin your journey with a feast for the senses at [Restaurant Name], our gastronomic haven designed to elevate your dining experience. Delve into a diverse menu crafted by our culinary maestros, offering a symphony of flavors that dance on your palate. From locally inspired dishes to international delicacies, each culinary creation is a testament to our commitment to culinary excellence.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="restaurant">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Restaurant</h2>
                <p>"Savor the Extraordinary: Culinary Elegance Redefined at Hotel GrandIn."</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={breakfast} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Breakfast</h3>
                  <p>
                  "Sunrise Savor: Start Your Day with Culinary Delight at Hotel GrandIn.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={lunch} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Lunch</h3>
                  <p>
                   
"Midday Delight: Elevate Your Afternoons with a Symphony of Culinary Flavors."{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={dinner} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Dinner</h3>
                  <p>
                  "Under the Stars, Beyond Tastes: An Evening Culinary Symphony Awaits."{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contact">
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
                    <input
                      className="contactus"
                      placeholder="Name"
                      type="type"
                      name="Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="type"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="type"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="type"
                      Message="Name"
                    >
                      Message
                    </textarea>
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
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <footer>
         <BottamBar />
      </footer> */}
    </div>
  );
}

export default Home;
