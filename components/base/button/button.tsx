import clsx from "clsx";
import React from "react";
import Typography from "../typography/typography";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  variant?: "default" | "bordered";
  color?: "default" | "neutral";
  children: any;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const { className, variant, color, children, ...rest } = props;
  const buttonClassName = clsx(
    "transition-all ease-in-out group",
    {
      "bg-primary-500": color === "default" && variant === "default",
      "bg-neutral-100": color === "neutral" && variant === "default",
    },
    {
      "bg-transparent border border-primary-500":
        color === "default" && variant === "bordered",
      "bg-transparent border border-base-900":
        color === "neutral" && variant === "bordered",
    },
    {
      "hover:bg-primary-600 active:bg-primary-700": color === "default",
      "hover:bg-neutral-200 active:bg-neutral-300": color === "neutral",
    },
    "px-5 py-2.5",
    "hover:-translate-y-0.5 active:translate-y-0",
    className
  );

  return (
    <button className={buttonClassName} {...rest}>
      <Typography
        Variant={"button"}
        Color={
          variant === "bordered"
            ? color === "default"
              ? "primary"
              : "dark"
            : color === "default"
            ? "main"
            : "dark"
        }
        className={clsx("transition-all", {
          "group-hover:text-neutral-100 group-active:text-neutral-100":
            color === "default",
          "group-hover:text-base-900 group-active:text-base-900":
            color === "neutral",
        })}
      >
        {children}
      </Typography>
    </button>
  );
};

Button.defaultProps = {
  variant: "default",
  color: "default",
};

export default Button;
