"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

/**
 * @description Login button component
 * @param {LoginButtonProps} props
 * @returns {React.ReactElement}
 */
export const LoginButton = ({
  children,
  mode = "redirect",
  asChild
}: LoginButtonProps): React.ReactElement => {
  const onClick = () => console.info("Login button clicked");
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}
