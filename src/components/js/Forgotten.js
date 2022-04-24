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
                <div>
                    <h1>Forgotten Password</h1>
                    <h2>Hey, we get it! Sometimes we forget too.</h2>
                    <form>
                        <label for='email'>Email</label>  
                        <input type="email"  placeholder="Enter your email address"/>
                    </form>
                    <CustomButton buttonWidth="25rem" buttonHeight="45px" >Send Password Recovery</CustomButton>
                    <button>Need more help? Contact Us</button>
                </div>
            </div>
        )
    }
}