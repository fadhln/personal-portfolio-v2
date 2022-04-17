import { TypographyVariant } from "./typography-variant";
import clsx from "clsx";

export default function getVariantClassname(
  variant: TypographyVariant = "body"
) {
  const DisplayFont = "font-display";
  const MainFont = "font-main";

  const DisplayClassName = clsx(DisplayFont);
  const HeadingClassName = clsx(DisplayFont);
  const SubHeadingClassName = clsx(MainFont, "uppercase");
  const BodyClassName = clsx(MainFont);
  const LinkClassName = clsx("hover:underline cursor-pointer");
  const CaptionClassName = clsx(MainFont);
  const ButtonClassName = clsx(MainFont);

  let className = "";
  switch (variant.toLocaleLowerCase()) {
    // Display ClassNames
    case "display-huge":
      className = clsx(DisplayClassName, "text-7xl md:text-8xl");
      break;
    case "display-large":
      className = clsx(DisplayClassName, "text-6xl md:text-7xl");
      break;
    case "display-medium":
      className = clsx(DisplayClassName, "text-5xl md:text-6xl");
      break;
    case "display":
      className = clsx(DisplayClassName, "text-5xl md:text-6xl");
      break;
    case "display-small":
      className = clsx(DisplayClassName, "text-4xl md:text-5xl");
      break;

    // Heading ClassNames
    case "h1":
      className = clsx(HeadingClassName, "text-3xl md:text-4xl");
      break;
    case "h2":
      className = clsx(HeadingClassName, "text-2xl md:text-3xl");
      break;
    case "h3":
      className = clsx(HeadingClassName, "text-xl md:text-2xl");
      break;
    case "h4":
      className = clsx(HeadingClassName, "text-lg md:text-xl");
      break;
    case "h5":
      className = clsx(HeadingClassName, "text-base md:text-lg");
      break;

    // SubHeading ClassNames
    case "sub-h1":
      className = clsx(
        SubHeadingClassName,
        "text-lg md:text-xl",
        "font-semibold"
      );
      break;
    case "sub-h2":
      className = clsx(
        SubHeadingClassName,
        "text-base md:text-lg",
        "font-semibold"
      );
      break;

    // Body ClasNames
    case "body":
      className = clsx(BodyClassName, "text-sm md:text-base");
      break;
    case "body1":
      className = clsx(BodyClassName, "text-sm md:text-base");
      break;
    case "body2":
      className = clsx(BodyClassName, "text-xs md:text-sm");
      break;

    // Link ClassNames
    case "link":
      className = clsx(LinkClassName);
      break;
    case "link-arrow":
      className = clsx(LinkClassName, "inline-flex items-center mr-0.5");
      break;

    // Caption ClassNames
    case "caption":
      className = clsx(CaptionClassName, "text-xs md:text-sm");
      break;

    // Button ClassNames
    case "button":
      className = clsx(ButtonClassName, "text-sm md:text-base");
      break;

    default:
      className = clsx(BodyClassName, "text-base md:text-lg");
      break;
  }

  return className;
}
