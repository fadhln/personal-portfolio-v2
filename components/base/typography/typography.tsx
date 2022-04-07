import React from "react";
import { TypographyStyle } from "./typography-style";
import { TypographyVariant } from "./typography-variant";

interface TypographyProps {
  children: React.FC | string;
  variant: TypographyVariant;
  style: TypographyStyle;
}

const Typography: React.FC<TypographyProps> = ({
  // TODO : Implement default values
  children,
  variant,
  style,
}) => {
  // TODO : Implement span with variant and styles
  // TODO : Create responsive variant && styles
  return <div>Typography</div>;
};

export default Typography;
