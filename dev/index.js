/* eslint-disable no-console */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputMask from "../src";

const customFormatChars = {
  w: /[a-z]/, // lowercase letters only
  W: /[A-Z]/, // uppercase letters only
  "#": /[0-9]/, // digits only
  A: /[A-Za-z]/, // any letter
  "*": /[A-Za-z0-9]/, // alphanumeric (overriding default)
};

function Input() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputMask
      value={value}
      onChange={onChange}
      mask="WWWW-####-AAAA"
      placeholder="ABCD-1234-efgh"
      formatChars={customFormatChars}
    />
  );
}

function escapeHtml(unsafe) {
  return `${unsafe}`
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const consoleDiv = document.getElementById("console");
const { log } = console;
console.log = (text, ...rest) => {
  log.apply(console, [text, ...rest]);
  consoleDiv.innerHTML = `${escapeHtml(text)}<br/>${consoleDiv.innerHTML}`;
};

ReactDOM.render(<Input />, document.getElementById("root"));
