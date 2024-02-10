import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TrekAPIService from '../services/TrekAPIService';
import Signup from '../component/Signup';

const SignIn = () => {
  const [logindata, setLoginData] = useState({ username: '', password: '' });
  const [dbUser, setDbUser] = useState({});
  const navigate = useNavigate();

  const changeHandle = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...logindata, [name]: value });
  };

  const authenticate = async (event) => {
    event.preventDefault();
    if (logindata.username === '' || logindata.password === '') {
      alert('Please enter valid fields');
      return;
    }

    try {
      const result = await TrekAPIService.getUserByUnamePassword(logindata);
      setDbUser(result.data);
      toast.success('Login success');
      sessionStorage.setItem('userinfo', JSON.stringify(result.data));
      navigate('/booking', { replace: true });
    } catch (error) {
      console.error(error);
      toast.error('Login issue / Server side');
    }

    setLoginData({ username: '', password: '' });
  };

  return (
    <div className="container pb-5 mb-sm-4">
      <div className="row pt-5">
        <div className="col-md-6 pt-sm-3">
          <div className="card">
            <div className="card-body">
              <h2 className="h4 mb-1">Sign in</h2>
              {/* <ToastContainer /> */}
              <form className="needs-validation">
                <div className="input-group form-group pb-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-mail"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    value={logindata.username}
                    name="username"
                    onChange={changeHandle}
                  />
                  <div className="invalid-feedback">Please enter a valid email address!</div>
                </div>
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-lock"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
                  <div className="invalid-feedback">Please enter a valid password!</div>
                </div>
                <hr className="mt-4" />
                <div className="text-right pt-4">
                  <button className="btn btn-primary" type="submit" onClick={authenticate}>
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 pt-sm-3">
          <h2 className="h4 mb-3">No account? Sign up</h2>
          <p className="text-muted mb-4">Registration takes less than a minute but gives you full control over your orders.</p>
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
