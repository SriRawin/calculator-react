
import React from "react";

interface NumericButtonProps {
  digit: number;
  onClick: (digit: number) => void;
}

const NumericButton: React.FC<NumericButtonProps> = (props) => {
  return (
    <div>
  

        {/* onClick={() => {
          props.onClick(props.digit);
        }} */}

    </div>
  );
};
export default NumericButton;
