import React from "react";

const SelectCourse = (props) => {
  return (
    <div className="course">
      <div className="selectPayment">
        <p className="courseSelect">Select Course</p>
        <p className="courseBorder"></p>
        <p className="paymentSelect">Payment</p>
      </div>
      <div>
        <h1>Select a course</h1>
        <h2>To get started, please select a course to begin</h2>
      </div>
      <h1>{props.header}</h1>
      <p>{props.sub}</p>
    </div>
  );
};

export default SelectCourse;
