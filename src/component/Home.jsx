import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../images/banner.jpg";
import banner2 from "../images/Banner3.jpg"
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
import dinner from "../images/dinner.jpg";

function Home() {
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

          <div className="col-md-5">
            <div className="book_room">
              <h1>Hotel Management System</h1>
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
                  <button className="book_btn">
                    <Link to="/room">Book Now</Link>
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
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software. Today it's seen all around the web; on
                  templates, websites, and stock designs. Use our generator to
                  get your own, or read on for the authoritative history of
                  lorem ipsum.{" "}
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
                <p>Lorem Ipsum available, but the majority have suffered </p>
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
                    <img src={room2} alt="#" />
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
                    <img src={room3} alt="#" />
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
                    <img src={room4} alt="#" />
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
                    <img src={room5} alt="#" />
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
                    <img src={room6} alt="#" />
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
                  Lorem Ipsum available, but the majority have suffered{" "}
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
                  <h3>Bed Room</h3>
                  <span>The standard chunk </span>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generatorsIf you are{" "}
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
                  <h3>Bed Room</h3>
                  <span>The standard chunk </span>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generatorsIf you are{" "}
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
                  <h3>Bed Room</h3>
                  <span>The standard chunk </span>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generatorsIf you are{" "}
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
                <p>Lorem Ipsum available, but the majority have suffered </p>
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
                    <img src={lunch} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Lunch</h3>
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
                    <img src={dinner} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Dinner</h3>
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
      </div>

      {/* <footer>
         <BottamBar />
      </footer> */}
    </div>
  );
}

export default Home;
