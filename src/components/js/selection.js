import React, { Component } from "react";
import Header from "./Header";
import SelectionCard from "./SelectionCard";
import "../css/selection.css";
import SelectCourse from "./Selectcourse";

export default class Selection extends Component {
  render() {
    // const course =[
    //     {
    //       select: "Select Course"
    //     }
    // ];
    const selection = [
      {
        header: "Email Marketing",
        sub: "With this program, you'll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
      {
        header: "Campaign Management",
        sub: "With this program, you'll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
      {
        header: "Social Media",
        sub: "With this program, you'll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
      {
        header: "PPC",
        sub: "With this program, you'll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
      {
        header: "Strategy",
        sub: "With this program, you'll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
      {
        header: "Media Planning",
        sub: "With this program, you'll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
      {
        header: "Content Marketing",
        sub: "With this program, you'll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
      {
        header: "Account Management",
        sub: "With this program, you'll learn what it takes and everything you need to work.",
        list: ["Strategy", "Planning", "Pitching & Winning Clients"],
      },
    ];
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="selectionBody">
          <div className="selectCourse">
            {/* {course.map((courseItem) => {
              return (
                <SelectCourse 
                
                />
              );
            } */}
            <SelectCourse />
            {/* )} */}
          </div>

          <div className="forcastCard">
            {selection.map((selectionItem) => {
              return (
                <SelectionCard
                  header={selectionItem.header}
                  sub={selectionItem.sub}
                  list={selectionItem.list}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
