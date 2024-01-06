"use client";

import { FcGoogle } from "react-icons/fc";
import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";

/**
 * @description Social auth
 * @returns {React.ReactElement}
 */
export const Social = (): React.ReactElement => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="sm" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button size="sm" className="w-full" variant="outline" onClick={() => {}}>
        <GithubIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};
