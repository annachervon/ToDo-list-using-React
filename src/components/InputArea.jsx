import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />

      <button
        onClick={() => {
          props.checked(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

// import React from "react";

// function InputArea(props) {
//   return (
//     <div className="form">
//       <input onChange={props.changed} type="text" value={props.value} />

//       <button
//         onClick={() => {
//           props.checked(props.id);
//         }}
//       >
//         <span>Add</span>
//       </button>
//     </div>
//   );
// }

// export default InputArea;
