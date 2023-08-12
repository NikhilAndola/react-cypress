import React, { useState } from "react";

function Button({btnText}) {
//   const { btnText = "Button" } = props;
  const [state, setState] = useState(false);
  return (
    <div>
      <h3>{state ? "Hello" : "Something went wrong"}</h3>
      <button
        role="button"
        data-cy="submit-btn"
        onClick={() => setState((prev) => !prev)}
        style={{ color: "red", backgroundColor: "cyan" }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default Button;
