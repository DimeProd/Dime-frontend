import React, { Component } from 'react';
import CustomButton from '../../library/CustomButton';
import Header from './Header';
import '../css/login.css'
import '../css/Forgotten.css'


export default class Forgotten extends Component {
    render () {
        return (
            <div className='forgotBody'>
                <div>
                    <Header/>
                </div>
                <div className='forgotBodyTwo'>
                    <h1>Forgotten Password</h1>
                    <h2>Hey, we get it! Sometimes we forget too.</h2>
                    <form>
                        <label for='email'>Email Address</label>  
                        <input type="email"  placeholder="Enter your email address"/>
                    </form>
                    <CustomButton buttonWidth="25rem" buttonHeight="45px" >Send Password Recovery</CustomButton>
                    <button className='forgotButton'>Need more help? Contact Us</button>
                </div>
            </div>
        )
    }
}