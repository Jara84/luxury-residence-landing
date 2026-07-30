  import type { ReactNode } from "react";

  type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
  };

  export default function Button({
    children,
    variant = "primary",
  }: ButtonProps) {
    const styles = {
      primary:
        "bg-stone-900 text-white hover:bg-stone-700",
      secondary:
        "border border-stone-300 text-stone-900 hover:bg-stone-100",
    };

    return (
      <button
        className={`
          rounded-xl
          px-8
          py-4
          font-medium
          transition
          duration-300
          ${styles[variant]}
        `}
      >
        {children}
      </button>
    );
  }