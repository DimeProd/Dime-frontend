import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/payment.css'
import SelectCourse from "./Selectcourse";
import PaymentCard from "./paymentCard";
import Paymentform from "./Paymentform";


const Payment = () => {
  
    const payment = [
      {
        title: "Email Marketing",
        subtitle: "With this program, you’ll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
    ]
  
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
      <div className="paymentSection">
      <div className="changeSelection">
            {payment.map((paymentItem) => {
              return (
                <PaymentCard
                  title={paymentItem.title}
                  subtitle={paymentItem.subtitle}
                  list={paymentItem.list}
                />
              );
            })}
          </div>
        <div className="openAccount">
          <Paymentform />
        </div>
      </div>
      <div>
        <Footer color="#FFFFFF" />
      </div>
      </div>
      
    </div>
  );
};

export default Payment;
