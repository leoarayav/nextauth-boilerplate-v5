import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

/**
 * @description Form success display
 * @param {FormSuccessProps} props
 * @returns {React.ReactElement}
 */
export const FormSuccess = ({
  message,
}: FormSuccessProps): React.ReactElement | null => {
  if (!message) return null;
  return (
    <div className="bg-green-500/10 p-2 rounded-md flex items-center">
      <CheckCircledIcon className="h-4 w-4 text-green-500" />
      <p className="text-green-500 text-sm ml-2">{message}</p>
    </div>
  );
};
