import React, { Component } from "react";
import '../css/login.css'
import CustomButton from '../../library/CustomButton';
import Header from "./Header";
import { Link } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render () {
        return (
            <div className="dimeBody">
                <Header />
                <div className="dimeBodyContainer">
                    <div className="dimeBodyTwo">
                        <h1 className="signIn">Sign in to your account</h1>
                        <h2>Enter your email and password to continue.</h2>
                        <form>
                            <label for="email">Email Address</label> 
                            <input type="email" value={this.state.value} onChange={this.handleChange} placeholder="Enter your email address"/>
                        
                            <label className="formPassword" for="password">Password</label> 
                            <input type="password" value={this.state.value} onChange={this.handleChange} placeholder="Enter your password"/>

                            <div className="keepDetails">
                                <div>
                                    <input type="checkbox" id="keep me signed in" name="signein" value="Keep me signed in"/>
                                    <label for="vehicle1"> Keep me signed in</label>
                                </div>
                                <h5><Link to="forgotten">Forgot Details?</Link> </h5>
                            </div>
                        </form>
                        <CustomButton buttonWidth="25rem" buttonHeight="2.8rem"><Link to="selection">Log In</Link> </CustomButton>
                        <div className="signinDetailsSocial">
                            <div className="signinDetailsGoogle">
                                <button> <img src={`icons/Google Icon.svg`} alt="Google Logo"/> <p>Sign In With Google</p></button>
                            </div>
                            <div className="signinDetailsTwitter">
                                <button> <img src={`icons/Twitter.svg`} alt="Twitter Logo"/> Sign In With Twitter</button>
                            </div>
                        </div>
                    </div>
                    <div className="createAccount">
                        <button>Create Account</button>
                    </div>
                </div>
            </div>
        )
    }
}