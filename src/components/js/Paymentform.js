import React from "react";
import CustomButton from "../../library/CustomButton";
import { Link } from "react-router-dom";

const Paymentform = () => {
    return (
        <div>
            <div className="paymentForm">
            <h1 className="signIn">Sign in to your account</h1>
            <h2>Enter your email and password to continue.</h2>
            <div>
                <form className="mailForm">
                <div className="formMail">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="formPassword">
                <label for="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
                </form>
                <form>
                <div className="formPassword">
                <label for="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
                </form>
            </div>
            <div>
                <div>
                    <h1>Payment Information</h1>
                    <h2>To get started, provide the following details.</h2>
                </div>
            <form>
              <div className="formMail">
                <label for="email">Cardholder Name</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="formPassword">
                <label for="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="keepDetails">
                <div>
                  <input
                    type="checkbox"
                    id="keep me signed in"
                    name="signein"
                    value="Keep me signed in"
                  />
                  <label for="vehicle1"> Keep me signed in</label>
                </div>
              </div>
            </form>
            </div>
            
            <Link to="selection">
              <CustomButton buttonWidth="25rem" buttonHeight="2.8rem">
              Log In
            </CustomButton>
            </Link>
            <div>
              
            </div>
          </div>
        </div>
    );
}

export default Paymentform