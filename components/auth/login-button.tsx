"use client";

import { useRouter } from "next/navigation"; 

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
  const router = useRouter();
  const onClick = () => router.push("/auth/login");
  if (mode === "modal") 
    return (
      <span>
        Todo: Login modal
      </span>
    )
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}
