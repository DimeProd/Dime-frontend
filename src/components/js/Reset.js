import React, { Component }  from 'react'
import Header from './Header';
import CustomButton from '../../library/CustomButton';
import '../css/Checkinbox.css';
import '../css/Reset.css'

export default class Reset extends Component {
        render () {
            return (
                <div>
                    <div>
                        <Header/>
                    </div>
                    <div className='body'>
                        <div className='resetBody'>
                            <h1>Reset your password</h1>
                            <h2>Enter a new password. Make it memorable.</h2>
                            <form>
                                <label for="password">New Password</label> 
                                <input type="password" placeholder="Enter your new password"/>
                            
                                <label className='newPassword' for="password">Confirm New Password</label> 
                                <input type="password" placeholder="Enter your password"/>
                            </form>
                            <CustomButton buttonWidth="25rem" buttonHeight="2.8rem"> Log In</CustomButton>
                        </div>
                    </div>
                </div>
            )
        }
}