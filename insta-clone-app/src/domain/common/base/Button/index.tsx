import React, { FC } from "react";
import "./style.css";

type Props = {
  text: string;
  onClicked: Function;
  bgColor?: string;
  textColor?: string;
};

const Button: FC<Props> = ({
  text,
  onClicked,
  bgColor = "blue-bg",
  textColor = "white-text",
}) => {
  return (
    <button
      className={`flex center full-width rounded-small ${bgColor} ${textColor} base-button`}
      onClick={() => onClicked()}
    >
      {text}
    </button>
  );
};

export default Button;
