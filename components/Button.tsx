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
      className={`
      group
      rounded-2xl
      bg-neutral-200
      bg-gradient-to-br
      from-neutral-100
      to-neutral-300
      py-4
      px-6
      text-base
      font-semibold
      uppercase
      text-neutral-500
      shadow-button
      transition-all
      hover:bg-orange-600
      hover:from-orange-500
      hover:to-orange-700
      hover:text-white
      hover:shadow-buttonHover
      active:bg-orange-500
      active:from-orange-500
      active:to-orange-700
      active:shadow-buttonActive
      ${className}`}
      {...props}
    >
      <div className="group-active:scale-95">{children}</div>
    </button>
  );
}
