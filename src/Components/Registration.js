import React from "react";
// import side-pic from './reg-pic.jpg'
import "./Registration.css"
function Registration() {
  return (
    <div className="registration-form">
      <h2 className="text-center free-session ">
        Let’s Build a Strong Business Together<span className="contactus-form">(Contact Us <strong>Now!</strong></span>)
      </h2>
      <div className="container teacher-form">
        <div className="row">
          <div className="col-md-6 side-img">
            <img src={require("./register.webp")} alt="reg pic" />
          </div>
          <div className="col-md-4">
            <form style={{ margin: "2% auto 2% auto", paddingTop: "6%" }}>
              <div className="row">
                <div className=" col-md-6">
                  <label for="fname">First Name:</label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control "
                    placeholder="Enter First Name"
                  />
                </div>
                <div className=" col-md-6">
                  <label for="lname">Last Name:</label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control "
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="phoneno">Phone No:</label>
                <input
                  type="number"
                  name="phoneno"
                  className="form-control "
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label for="email">Email Id:</label>
                <input
                  type="email"
                  name="emailid"
                  className="form-control "
                  placeholder="Enter Email Id"
                />
              </div>
              <div className="row">
                <div className=" col-md-6">
                  <label for="email">City:</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control "
                    placeholder="Enter city name"
                  />
                </div>
                <div className=" col-md-6">
                  <label for="pincode">Pin Code:</label>
                  <input
                    type="number"
                    name="pincode"
                    className="form-control "
                    placeholder="Enter First Name"
                  />
                </div>
              </div>
              <div className="form-group ">
                <label htmlFor="Purpose">Purpose</label>
                <select className="form-control">
                  <option>For School </option>
                  <option>For College </option>
                  <option>For Franchise </option>
                </select>
              </div>

              <div className="form-group ">
                <label for="formGroupExampleInput">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input"
                />
              </div>
              <div className="form-group ">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
