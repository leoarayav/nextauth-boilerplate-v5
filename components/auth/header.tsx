import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

/**
 * @description Header for auth pages
 * @param {HeaderProps} props
 * @returns {React.ReactElement}
 */
export const Header = ({ label }: HeaderProps): React.ReactElement => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">🔒 Authenticate</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
