import React, { FC } from "react";
import "./style.css";

type Props = {
  placeholder: string;
  onChange: any;
  type?: InputType;
};

type InputType = "text" | "password" | "file";

const Input: FC<Props> = ({ placeholder, onChange, type = "text" }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e)}
      className="full-width rounded-small secondary-border base-input"
    ></input>
  );
};

export default Input;
