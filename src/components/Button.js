import React from "react";

const Button = props => {
  return (
    <div
      onClick={() => props.onButtonSelect(props.text)}
      className="four wide column center aligned box"
    >
      {props.text}
    </div>
  );
};

export default Button;
