import React from "react";

const SelectionCard = (props) => {
  return (
    <div className="selection">
      <h1>{props.header}</h1>
      <p>{props.sub}</p>
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
      <div className="selectionButton">
        <button>Learn More</button>
        <img src={`../icons/arrowright.svg`} alt="arror right" />
      </div>
    </div>
  );
};

export default SelectionCard;
