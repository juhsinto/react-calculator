import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="ui text container">
      <div className="ui horizontal section divider">MY STUPID CALCULATOR</div>
      <div className="ui celled grid">
        <div className="row">
          <div className="twelve wide column ">123456789</div>
          <div className="four wide column center aligned box">CLR</div>
        </div>
        <div className="row">
          <div className="four wide column center aligned">7</div>
          <div className="four wide column center aligned">8</div>
          <div className="four wide column center aligned">9</div>
          <div className="four wide column center aligned">÷</div>
        </div>
        <div className="row">
          <div className="four wide column center aligned">4</div>
          <div className="four wide column center aligned">5</div>
          <div className="four wide column center aligned">6</div>
          <div className="four wide column center aligned">×</div>
        </div>
        <div className="row">
          <div className="four wide column center aligned">1</div>
          <div className="four wide column center aligned">2</div>
          <div className="four wide column center aligned">3</div>
          <div className="four wide column center aligned">-</div>
        </div>
        <div className="row">
          <div className="four wide column center aligned">.</div>
          <div className="four wide column center aligned">0</div>
          <div className="four wide column center aligned">=</div>
          <div className="four wide column center aligned">+</div>
        </div>
      </div>
    </div>
  );
};

export default App;
