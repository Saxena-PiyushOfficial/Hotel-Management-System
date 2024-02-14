import React from "react";
import { Link } from "react-router-dom";
import platinum from "../images/platinum1.jpg";
import gold from "../images/gold1.jpg";
import silver from "../images/silver1.jpg";

export default function OurRoom() {
  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Our Room</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our_room">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="titlepage">
                     <p  className="margin_0">Room Types </p>
                  </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={platinum} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Platinum</h3>
                  <button>
                    <Link to="">Explore</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={gold} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Gold</h3>
                  <button>
                    <Link to="">Explore</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src={silver} alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Silver</h3>
                  <button>
                    <Link to="">Explore</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-sm-4">
        <div className="row pt-5">
          <div className="col-md-6 pt-sm-3">
            <div className="card">
              <div className="card-body">
                <div className="col-md-12 pt-5 pt-sm-3">
                  <img src={platinum}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-sm-4">
        <div className="row pt-5">
          <div className="col-md-6 pt-sm-3">
            <div className="card">
              <div className="card-body">
                <div className="col-md-12 pt-5 pt-sm-3">
                  <h1>Platinum</h1>
                  <p>
                    Rooms on the Highest Floor. 97.55 sqmtr Spacious Suite with
                    two Master Bedrooms on the top floor with Living, Dining
                    Area with well equipped Kitchenette, Microwave Oven,
                    Separate TV in Living Room, Bathrobe, Hair Dryer available.
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="room_feature">
                        <label for="reg-fn">97.55 sqmtr Room</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="room_feature">
                      <label for="reg-fn">97.55 sqmtr Room</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
