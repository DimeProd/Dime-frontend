import React from "react";

const SelectCourse = (props) => {
  return (
    <div className="course">
      <div className="selectPayment">
        <p className="courseSelect" style={{backgroundColor: props.colorbg}}>Select Course</p>
        <p className="courseBorder"></p>
        <p className="paymentSelect" style={{backgroundColor: props.bgcolor, color:props.color}}>Payment</p>
      </div>
      <div>
        <h1>Select a course</h1>
        <h2>To get started, please select a course to begin</h2>
      </div>
    </div>
  );
};

export default SelectCourse;
