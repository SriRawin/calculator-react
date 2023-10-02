import React from "react";

interface NumericButtonProps {
  digit: string;
  onClick: (digit: string) => void;
}

const NumericButton: React.FC<NumericButtonProps> = (props) => {
  return (
    <input
      type="button"
      value={props.digit}
      className="bg-[#363636] font-medium w-14 h-10 m-1 cursor-pointer rounded-xl hover:bg-slate-400 "
      onClick={() => props.onClick(props.digit)}
    />
  );
};
export default NumericButton;
