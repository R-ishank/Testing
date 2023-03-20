import React from "react";
import Header from "./Header";

const Accordianfilter = () => {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  return (
    <div className="fontfamilyhome">
      <Header />
      <div className="border-2  shadow rounded-xl">
        <div className="text-red-600 flex justify-center justify-items-center">
          <p>Filter</p>
        </div>

        <button className="accordion">Dealer</button>
        <div className="panel">
        <select className="option">
          <option>Rishank</option>
          <option>Mahesh</option>
          <option>Jatin</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default Accordianfilter;
