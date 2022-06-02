import React from "react";

const PaymentCard = (props) => {
  return (
    <div className="selectChange">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <ul className="listCheck">
        {props.list.map((listItem) => {
          return (
            <li>
              <img src={`../icons/checkbox.svg`} alt="check" />
              {listItem}
            </li>
          );
        })}
      </ul>
      <div className="paymentButton">
        <button>Change Selection</button>
      </div>
    </div>
  );
};

export default PaymentCard;
