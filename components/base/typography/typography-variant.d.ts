type DisplayVariant =
  | "display"
  | "display-huge"
  | "display-large"
  | "display-medium"
  | "display-small";
type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5";
type SubHeadingVariant = "sub-h1" | "sub-h2";
type BodyVariant = "body" | "body1" | "body2";
type LinkVariant = "link" | "link-arrow";

export type TypographyVariant =
  | DisplayVariant
  | HeadingVariant
  | SubHeadingVariant
  | BodyVariant
  | LinkVariant
  | "caption"
  | "button";
