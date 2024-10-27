import * as React from "react";
import Icon from '../../lib/constants/icons';

import { cn } from "@/lib/utils"
import Image from "next/image";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center relative">
      <input
        type={type}
        className={cn(
          "inline-block h-10 w-full rounded-md border border-input bg-background px-8 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <span className="absolute flex justify-start items-center">
        <div className="flex items-center gap-2 m-1 pl-2 text-sm">
          <Image className="" src={Icon.toggleClose} alt="search" />
        </div>
      </span>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
