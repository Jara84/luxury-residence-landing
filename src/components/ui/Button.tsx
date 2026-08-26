import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-stone-900 text-white hover:bg-stone-700",
    secondary:
      "border border-stone-300 text-stone-900 hover:bg-stone-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6
        py-3
        text-sm
        font-medium
        rounded-xl
        transition
        duration-300
        hover:scale-[1.02]
        active:scale-[0.98]
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}