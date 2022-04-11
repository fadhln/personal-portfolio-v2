import React from "react";

interface QuotesIconProps {
  className?: string;
  width?: number;
  variant: "opening" | "closing";
}

const QuotesIcon: React.FC<QuotesIconProps> = ({
  className,
  width,
  variant = "opening",
}) => {
  const aspectRatio = 54 / 67;
  const height = width ? width * aspectRatio : null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width.toString() : "67"}
      height={height ? height.toString() : "54"}
      fill="none"
      viewBox="0 0 67 54"
      className={className}
    >
      {variant === "opening" && (
        <path
          d="M1.573 32.876c.869 3.723 2.14 7.105 3.816 10.145a44.863 44.863 0 006.05 8.47c3.847-.869 7.415-2.172 10.704-3.909 3.288-1.737 6.36-4.033 9.214-6.888L26.3 30.264l3.569-27.358-9.494-1.303C12.556 11.53 6.29 21.955 1.574 32.876zm32.949 0c.868 3.723 2.11 7.105 3.723 10.145 1.613 3.04 3.66 5.864 6.143 8.47a45.335 45.335 0 0010.61-3.909c3.35-1.737 6.453-4.033 9.308-6.888l-5.058-10.43 3.569-27.358-9.494-1.303c-7.818 9.928-14.086 20.352-18.801 31.273z"
          clipRule="evenodd"
        ></path>
      )}
      {variant === "closing" && (
        <path
          d="M28.006 9.98a36.732 36.732 0 00-6.236-8.284 46.205 46.205 0 00-10.517 3.816c-3.289 1.675-6.422 3.94-9.4 6.795l5.091 10.607-3.416 27.18 9.493 1.304c3.972-5.088 7.508-10.207 10.611-15.357a115.729 115.729 0 008.005-15.916c-.745-3.723-1.955-7.105-3.63-10.145zm15.637-4.468c-3.289 1.675-6.422 3.94-9.4 6.795l5.09 10.607-3.415 27.18 9.493 1.304c3.972-5.088 7.508-10.207 10.61-15.357a115.718 115.718 0 008.005-15.916c-.744-3.723-1.954-7.105-3.63-10.145a36.735 36.735 0 00-6.236-8.284 46.205 46.205 0 00-10.517 3.816z"
          clipRule="evenodd"
        ></path>
      )}
    </svg>
  );
};

export default QuotesIcon;
