import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

/**
 * @description Form error display
 * @param {FormErrorProps} props
 * @returns {React.ReactElement}
 */
export const FormError = ({
  message,
}: FormErrorProps): React.ReactElement | null => {
  if (!message) return null;
  return (
    <div className="bg-red-500/10 p-2 rounded-md flex items-center">
      <ExclamationTriangleIcon className="h-4 w-4 text-red-500" />
      <p className="text-red-500 text-sm ml-2">{message}</p>
    </div>
  );
};
