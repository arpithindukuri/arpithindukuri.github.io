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
      py-4
      px-6
      text-base
      font-semibold
      uppercase
      text-neutral-500
      shadow-button
      transition-all
      hover:bg-orange-500
      hover:text-white
      hover:shadow-buttonHover
      active:bg-orange-600
      active:shadow-buttonActive
      ${className}`}
      {...props}
    >
      <div className="group-active:scale-95">{children}</div>
    </button>
  );
}
