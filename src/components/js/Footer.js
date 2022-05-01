import React from "react";
import '../css/Footer.css'



const Footer = (props) => {
  return (
    <div className="selectFooter" style={{backgroundColor: props.color}}>
      <div className="aboutCompany">
        <h1>Company</h1>
        <p>About</p>
        <p>Blog</p>
        <p>We Are Hiring</p>
        <p>Become A Mentor</p>
        <p>Dimeline</p>
      </div>
      <div className="aboutCompany">
        <h1>Programs</h1>
        <p>Dime Agency</p>
        <p>Dime Startup</p>
        <p>Dime Consultant</p>
      </div>
      <div className="aboutCompany">
        <h1>Courses</h1>
        <p>Email Marketing</p>
        <p>Campaign Management</p>
        <p>Social Media</p>
        <p>Content Marketing</p>
        <p>Media Planning</p>
      </div>
      <div className="aboutCompany">
        <h1>Resources</h1>
        <p>Catalog</p>
        <p>Career Services</p>
        <p>Marketing Index</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};


export default Footer;
