import React from "react";
import { Button } from "primereact/button";

const ButtonAtom = ({
  className,
  label,
  iconPos,
  icon,
  badge,
  onClick,
  style,
  disabled,
}) => {
  return (
    <>
      <Button
        disabled={disabled}
        style={style}
        label={label}
        iconPos={iconPos}
        icon={icon}
        className={className}
        badge={badge}
        onClick={onClick}
      />
    </>
  );
};
export default ButtonAtom;
