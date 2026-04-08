import React from "react";
import { radii, shadows, sizes, variants } from "../styles/global";

const Button = ({
  children,
  variant = "primary",
  size = "sm",
  rounded = "md",
  shadow = "md",
  width,
  ...props
}) => {
  return (
    <button
      className={`${variants[variant]} ${sizes[size]} ${shadows[shadow]} ${radii[rounded]}`}
      style={width ? { width } : undefined}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
