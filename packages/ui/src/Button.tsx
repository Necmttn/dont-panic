import * as React from "react";
export const Button: React.FC = ({children, ...rest}) => {
  return <button className="bg-red-400 text-5xl text-black" {...rest}>{children}</button>;
};
