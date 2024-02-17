import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TrekAPIService from '../services/HmsAPIService';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginimg from "../images/login3.jpg";

export default function SignIn() {

  const [logindata, setLoginData] = useState({ email: '', password: '' });
  const [dbUser, setDbUser] = useState({});
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState({ option: '' });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

  };

  const changeHandle = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...logindata, [name]: value });
  };

  const authenticate = async (event) => {
    event.preventDefault();
    if (logindata.email === '' || logindata.password === '') {
      alert('Please enter valid fields');
      return;
    }

    try {
      const result = await TrekAPIService.getUserByUnamePassword(logindata, selectedOption)
      setDbUser(result.data);
      toast.success('Login success');
      sessionStorage.setItem('userinfo', JSON.stringify(result.data));
      if (selectedOption === 'manager' || selectedOption === 'owner') {
        if (selectedOption === 'manager') {
          navigate('/manager', { replace: true });
        }
        else {
          navigate('/owner', { replace: true });
        }

      }
      else {
        navigate('/room', { replace: true });
      }

    } catch (error) {
      console.error(error);
      toast.error('Login issue / Server side');
    }

    setLoginData({ email: '', password: '' });
  };



  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>SignIn</h2>
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
                <label htmlFor="dropdown">Sign in as :</label>
                <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                  <option value="">-- Select --</option>
                  <option value="guest">Guest</option>
                  <option value="manager">Manager</option>
                  <option value="owner">Owner</option>
                </select>

                <br />
                <hr />
                {/* <h3 className="h6 font-weight-semibold opacity-70 pt-4 pb-2">Or using form below</h3> */}
                <form className="needs-validation" novalidate="">
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-mail"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </span>
                    </div>

                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      placeholder="Enter email"
                      value={logindata.email}
                      name="email"
                      onChange={changeHandle}
                    />
                    <div className="invalid-feedback">
                      Please enter valid email address!
                    </div>
                  </div>
                  <br />
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-lock"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={logindata.password}
                      name="password"
                      type='password'
                      onChange={changeHandle}
                    />

                    <div className="invalid-feedback">
                      Please enter valid password!
                    </div>
                  </div>
                  <br />
                  <div></div>
                  <div className="d-flex flex-wrap justify-content-between">
                    {/* <div className="custom-control custom-checkbox">
                      <input className="custom-control-input" type="checkbox" checked="" id="remember_me"/>
                      <label className="custom-control-label" for="remember_me">
                        Remember me
                      </label>
                    </div> */}
                    <Link
                      className="nav-link-inline font-size-sm"
                      to="account-password-recovery.html"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <hr className="mt-4" />
                  <div className="text-right">
                    <button className="btn btn-primary" type="submit" onClick={authenticate}>
                      Sign In
                    </button>
                    <br />

                    {selectedOption === 'guest' && (<div>
                      <label for="signup" className="mx-2">Dont have an account?</label>
                      <Link className="nav-link-inline font-size-sm" to="/signup"> Sign Up here </Link>
                    </div>)}

                  </div>
                </form>
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
    </div>
  );
}
