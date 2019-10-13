import React from "react";
import "./App.css";
import Button from "./Button";

class App extends React.Component {
  state = {
    calculatorValue: 0,
    buttonPressed: ""
  };

  onButtonSelect = button => {
    console.log("user pressed ", button);
    this.setState({ buttonPressed: button });
  };

  render() {
    return (
      <>
        <div className="placeholder segment">
          <div className="ui text container">
            <div className="ui horizontal section divider">
              MY STUPID CALCULATOR
            </div>
            <div className="ui celled grid">
              <div className="row">
                <div className="twelve wide column ">
                  {this.state.calculatorValue}
                </div>
                <Button onButtonSelect={this.onButtonSelect} text="CLR" />
              </div>
              <div className="row">
                <Button onButtonSelect={this.onButtonSelect} text="7" />
                <Button onButtonSelect={this.onButtonSelect} text="8" />
                <Button onButtonSelect={this.onButtonSelect} text="9" />
                <Button onButtonSelect={this.onButtonSelect} text="÷" />
              </div>
              <div className="row">
                <Button onButtonSelect={this.onButtonSelect} text="4" />
                <Button onButtonSelect={this.onButtonSelect} text="5" />
                <Button onButtonSelect={this.onButtonSelect} text="6" />
                <Button onButtonSelect={this.onButtonSelect} text="×" />
              </div>
              <div className="row">
                <Button onButtonSelect={this.onButtonSelect} text="1" />
                <Button onButtonSelect={this.onButtonSelect} text="2" />
                <Button onButtonSelect={this.onButtonSelect} text="3" />
                <Button onButtonSelect={this.onButtonSelect} text="-" />
              </div>
              <div className="row">
                <Button onButtonSelect={this.onButtonSelect} text="." />
                <Button onButtonSelect={this.onButtonSelect} text="0" />
                <Button onButtonSelect={this.onButtonSelect} text="=" />
                <Button onButtonSelect={this.onButtonSelect} text="+" />
              </div>
            </div>
          </div>
        </div>
        <div className="placeholder segment">
          <div className="ui column centered grid">
            user pressed: {this.state.buttonPressed}
          </div>
        </div>
      </>
    );
  }
}

export default App;
