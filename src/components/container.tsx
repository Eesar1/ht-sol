import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`max-w-[1300px] mx-auto px-5${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
