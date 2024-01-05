"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

/**
 * @description Card wrapper for auth pages
 * @param {CardWrapperProps} props
 * @returns {React.ReactElement}
 */
export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = false,
}: CardWrapperProps): React.ReactElement => {
  return <Card className="w-[400px] shadow-md">{children}</Card>;
};
