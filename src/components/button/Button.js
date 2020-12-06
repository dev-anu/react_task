import React from "react";

function Button(props) {
  return (
    <button
      style={{
        border: "none",
        borderRadius: "20px",
        background: `${props.background}`,
        color: `${props.color}`,
        fontSize: `${props.fontSize}`,
        padding: `${props.padding}`,
        boxShadow: `${props.boxShadow}`,
      }}
    >
      {props.name}
    </button>
  );
}

export default Button;
