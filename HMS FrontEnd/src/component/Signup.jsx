import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import loginimg from '../images/signup.jpg'
import { event } from "jquery";
import { toast } from "react-toastify";
import HmsAPIService from "../services/HmsAPIService";

export default function Signup() {

  let [signUpData, setSignUpData] = useState({
    firstName: '', lastName: '', dob: '', address: '', phone: ''
    , email: '', password: ''
  });

  const navigate = useNavigate();

  const changeHandle = (event) => {
    const { name, value } = event.target
    setSignUpData({ ...signUpData, [name]: value });
  }

  const addData = (event) => {
    event.preventDefault();
    if (signUpData.firstName === "" || signUpData.lastName === "" || signUpData.address === "" || signUpData.phone
      === "" || signUpData.email === "" || signUpData.password === "") {
      toast.error("Plase enter valid data..");
      return;
    }
    let signUpData1 = {
      firstName: signUpData.firstName, lastName: signUpData.lastName, dob: signUpData.dob, address: signUpData.address, phone: signUpData.phone
      , email: signUpData.email, password: signUpData.password
    }
    HmsAPIService.addUser(signUpData1).then((result) => {
      console.log(result);
      navigate('/manager', { replace: true });
      toast.success("SignUP Successful..");;
    }).catch((error) => {
      console.log(error);
      toast.error("Error 400/500..");
    });

    setSignUpData({
      firstName: "", lastName: "", dob: "", address: "", phone: ""
      , email: "", password: ""
    })
  }



  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Sign Up</h2>
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
                  <h2 className="h4 mb-3">No account? Sign up</h2>
                  {/* <p className="text-muted mb-4">
                    Registration takes less than a minute but gives you full
                    control over your orders.
                  </p> */}
                  <form className="needs-validation" novalidate="">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="reg-fn">First Name</label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            id="reg-fn"
                            placeholder="Enter First Name"
                            name="firstName"
                            value={signUpData.firstName}
                            onChange={changeHandle}
                          />
                          <div className="invalid-feedback">
                            Please enter your first name!
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="reg-ln">Last Name</label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            id="reg-ln"
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={signUpData.lastName}
                            onChange={changeHandle}
                          />
                          <div className="invalid-feedback">
                            Please enter your last name!
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="reg-dob">Date of Birth</label>
                          <input
                            className="form-control"
                            type="date"
                            required=""
                            id="reg-dob"
                            placeholder="Enter Date Of Birth"
                            name="dob"
                            value={signUpData.dob}
                            onChange={changeHandle}
                          />
                          <div className="invalid-feedback">
                            Please enter valid date!
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="reg-addr">Address</label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            id="reg-addr"
                            placeholder="Enter Address"
                            name="address"
                            value={signUpData.address}
                            onChange={changeHandle}
                          />
                          <div className="invalid-feedback">
                            Please enter your address!
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="reg-email">E-mail Address</label>
                          <input
                            className="form-control"
                            type="email"
                            required=""
                            id="reg-email"
                            placeholder="Enter Email-Address"
                            name="email"
                            value={signUpData.email}
                            onChange={changeHandle}
                          />
                          <div className="invalid-feedback">
                            Please enter valid email address!
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="reg-phone">Phone Number</label>
                          <input
                            className="form-control"
                            type="text"
                            required=""
                            id="reg-phone"
                            placeholder="Enter Phone Number"
                            name="phone"
                            value={signUpData.phone}
                            onChange={changeHandle}
                          />
                          <div className="invalid-feedback">
                            Please enter your phone number!
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="reg-password">Password</label>
                          <input
                            className="form-control"
                            type="password"
                            required=""
                            id="reg-password"
                            placeholder="Enter Password"
                            name="password"
                            value={signUpData.password}
                            onChange={changeHandle}
                          />
                          <div className="invalid-feedback">
                            Please enter password!
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="reg-password-confirm">
                            Confirm Password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            required=""
                            id="reg-password-confirm"
                          />
                          <div className="invalid-feedback">
                            Passwords do not match!
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right pt-3">
                      <button className="btn btn-primary" type="button" onClick={addData}>
                        Sign Up
                      </button><br />
                      <label for="signin" className="mx-2 pt-3">Already have an account?</label>
                      <Link
                        className="nav-link-inline font-size-sm"
                        to="/login"
                      >
                        Sign In here
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-sm-3">
            <div className="card">
              <div className="card-body">
                <figure>
                  <img src={loginimg} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container pb-5 mb-sm-4">
        <div className="row pt-5">
          
        </div>
      </div> */}
    </div>
  );
}
