import React from 'react'

export default function SignIn() {
  return (
    <div>
<div className="container pb-5 mb-sm-4">
    <div className="row pt-5">
        <div className="col-md-6 pt-sm-3">
            <div className="card">
                <div className="card-body">
                    <h2 className="h4 mb-1">Sign in</h2>
                    <div className="d-sm-flex align-items-center py-3">
                        <h3 className="h6 font-weight-semibold opacity-70 mb-3 mb-sm-2 mr-sm-3">With social account:</h3>
                        <div>
                            <a className="social-btn sb-facebook mr-2 mb-2" href="#" data-toggle="tooltip" title="" data-original-title="Sign in with Facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="social-btn sb-twitter mr-2 mb-2" href="#" data-toggle="tooltip" title="" data-original-title="Sign in with Twitter">
                                <i className="fa fa-twitter"></i> 
                            </a>
                            <a className="social-btn sb-linkedin mr-2 mb-2" href="#" data-toggle="tooltip" title="" data-original-title="Sign in with LinkedIn">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <h3 className="h6 font-weight-semibold opacity-70 pt-4 pb-2">Or using form below</h3>
                    <form className="needs-validation" novalidate="">
                        <div className="input-group form-group">
                            <div className="input-group-prepend"><span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span></div>
                            <input className="form-control" type="email" placeholder="Email" required=""/>
                            <div className="invalid-feedback">Please enter valid email address!</div>
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend"><span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span></div>
                            <input className="form-control" type="password" placeholder="Password" required=""/>
                            <div className="invalid-feedback">Please enter valid password!</div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" checked="" id="remember_me"/>
                                <label className="custom-control-label" for="remember_me">Remember me</label>
                            </div><a className="nav-link-inline font-size-sm" href="account-password-recovery.html">Forgot password?</a>
                        </div>
                        <hr className="mt-4"/>
                        <div className="text-right pt-4">
                            <button className="btn btn-primary" type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-md-6 pt-5 pt-sm-3">
            <h2 className="h4 mb-3">No account? Sign up</h2>
            <p className="text-muted mb-4">Registration takes less than a minute but gives you full control over your orders.</p>
            <form className="needs-validation" novalidate="">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label for="reg-fn">First Name</label>
                            <input className="form-control" type="text" required="" id="reg-fn"/>
                            <div className="invalid-feedback">Please enter your first name!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label for="reg-ln">Last Name</label>
                            <input className="form-control" type="text" required="" id="reg-ln"/>
                            <div className="invalid-feedback">Please enter your last name!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label for="reg-email">E-mail Address</label>
                            <input className="form-control" type="email" required="" id="reg-email"/>
                            <div className="invalid-feedback">Please enter valid email address!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label for="reg-phone">Phone Number</label>
                            <input className="form-control" type="text" required="" id="reg-phone"/>
                            <div className="invalid-feedback">Please enter your phone number!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label for="reg-password">Password</label>
                            <input className="form-control" type="password" required="" id="reg-password"/>
                            <div className="invalid-feedback">Please enter password!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label for="reg-password-confirm">Confirm Password</label>
                            <input className="form-control" type="password" required="" id="reg-password-confirm"/>
                            <div className="invalid-feedback">Passwords do not match!</div>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}
