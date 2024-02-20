import React from 'react';
import { toast } from 'react-toastify';

export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Perform validation
    const name = formData.get('Name');
    const email = formData.get('Email');
    const phoneNumber = formData.get('Phone Number');
    const message = formData.get('Message');

    if (!name || !email || !phoneNumber || !message) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Additional validation logic can be added here

    // If all validations pass, submit the form
    // Example: form.submit();

    // For demonstration purposes, let's show a success message
    toast.success('Form submitted successfully!');
  };

  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <form id="request" className="main_form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 ">
                    <input className="contactus" placeholder="Name" type="text" name="Name" />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Email" type="text" name="Email" />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Phone Number" type="text" name="Phone Number" />
                  </div>
                  <div className="col-md-12">
                    <textarea className="textarea" placeholder="Message" name="Message"></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn" type="submit">Send</button>
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

    </div>
  );
};
