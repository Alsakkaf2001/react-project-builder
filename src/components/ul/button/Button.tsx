import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  children: ReactNode;
  //  onClick?:()=>void;  //  we can use rest insted using function
}

function Button({ children, className, ...rest }: IProps) {
  return (
    <button
      className={`${className} p-2 w-full text-white rounded-md `}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
