import React from "react";
import "./App.css";
import Button from "./Button";

class App extends React.Component {
  state = {
    displayValue: 0,
    firstOperand: 0,
    secondOperand: 0,

    hasDecimal: false,
    arithmeticOperation: false,
    buttonPressed: "",
    operatorSelected: ""
  };

  onButtonSelect = button => {
    console.log("user pressed ", button);
    if (this.state.displayValue === 0) {
      this.setState({ buttonPressed: button });
      this.setState({ displayValue: button });
    } else {
      if (button === ".") {
        this.setState({ buttonPressed: button });
        // handle decimal - add a dot only once!
        if (this.state.hasDecimal) {
          console.log(" already have a decimal in the input");
        } else {
          let decimalString = this.state.displayValue + ".";
          console.log(decimalString);
          this.setState({ displayValue: decimalString });
          this.setState({ hasDecimal: true });
        }
      } else {
        // HANDLE CLR & EQUAL
        if (button === "CLR") {
          // don't put this in display, butneed to dispatch action
          this.setState({
            buttonPressed: button,
            displayValue: 0,
            firstOperand: 0,
            secondOperand: 0,
            hasDecimal: false,
            arithmeticOperation: false,
            operatorSelected: ""
          });
          this.setState({});
        } else if (button === "=") {
          // don't put this in display, but need to dispatch action
          // TODO - (not sure?) - clear values of first operand, second operand after arithmetic op
          // at the moment, it seems like a feature (how current macOS calc works)!
          this.setState(
            {
              buttonPressed: button,
              secondOperand: parseFloat(this.state.displayValue)
            },
            () => {
              this.setState({
                displayValue: this.state.firstOperand - this.state.secondOperand
              });
              console.log(this.state.firstOperand - this.state.secondOperand);
            }
          );

          // HANDLE OPERATORS
        } else if (button === "-") {
          this.setState(
            {
              operatorSelected: button,
              firstOperand: parseFloat(this.state.displayValue),
              buttonPressed: button
            },
            () => {
              console.log(
                "user pressed subtract and first operand is: " +
                  this.state.firstOperand
              );
              // since the has done an arithmetic operation,
              // clear the display for second operand entry
              this.setState({ displayValue: 0, arithmeticOperation: true });
            }
          );
        } else if (button === "×") {
          // don't put this in display, butneed to dispatch action
          this.setState({ buttonPressed: button });
        } else if (button === "÷") {
          // don't put this in display, butneed to dispatch action
          this.setState({ buttonPressed: button });
        } else if (button === "+") {
          // don't put this in display, butneed to dispatch action
          this.setState({ buttonPressed: button });
        } else {
          this.setState({ buttonPressed: button });
          let numberString = this.state.displayValue + button;
          this.setState({ displayValue: numberString });
        }
      }
    }
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
                  {this.state.displayValue}
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
