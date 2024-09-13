"use client";

import { FC } from "react";
import { ButtonContainer } from "./style";

interface IProps {
  id?: string;
  label?: string;
  onClick?: () => void;
  size?: "tiny" | "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}

const Button: FC<IProps> = ({
  id = "",
  label = "",
  onClick = () => {},
  size = "medium",
  variant = "primary",
}) => {
  return (
    <ButtonContainer id={id} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
