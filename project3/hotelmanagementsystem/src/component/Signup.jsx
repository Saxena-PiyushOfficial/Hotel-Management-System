import React from 'react'

export default function Signup() {
  return (
    <div>
       {/* <header>
        <Topbar/>
      </header> */}
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
{/* <footer>
        <BottamBar/>
      </footer> */}
</div>
  )
}
