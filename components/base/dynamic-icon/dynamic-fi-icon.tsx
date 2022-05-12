import React from "react";
import * as Icons from "react-icons/fi";

interface DynamicFiIconProps {
  name: string;
  className?: string;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const DynamicFiIcon: React.FC<DynamicFiIconProps> = ({ name, className }) => {
  const fiName = `Fi${capitalizeFirstLetter(name.toLowerCase())}`;
  const IconComponent = Icons[fiName];

  if (!IconComponent) {
    return <Icons.FiAlertCircle className={className} />;
  }

  return <IconComponent className={className} />;
};

export default DynamicFiIcon;
