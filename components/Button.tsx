import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export function Button({
  children,
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={`rounded-xl
      bg-neutral-100
      p-4
      text-base
      font-semibold
      uppercase
      text-neutral-500
      shadow-md
      transition-all
      hover:bg-orange-600
      hover:text-white
      hover:shadow-lg
      active:bg-orange-600
      active:shadow-md
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
