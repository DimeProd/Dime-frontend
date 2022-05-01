import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/payment.css'
import SelectCourse from "./Selectcourse";


const Payment = () => {
  return (
    <div >
      <div>
          <Header/>
      </div>
      <div className="paymentbody">
      <div>
          <SelectCourse
          bgcolor = "#02474c"
          color= "#ffa246"
          />
      </div>
      <div>
        <Footer color="#FFFFFF" />
      </div>
      </div>
      
    </div>
  );
};

export default Payment;
