import { Button, Typography } from "@mui/material";
import React from "react";

interface NumericButtonProps {
  digit: number;
  onClick: (digit: number) => void;
}

const NumericButton: React.FC<NumericButtonProps> = (props) => {
  return (
    <div>
      <Button
        sx={{
          height: 50,
          width: 50,
          backgroundColor: "red",
          borderRadius: 10,
        }}
        onClick={() => {
          props.onClick(props.digit);
        }}
      >
        <Typography variant="body1" color={"white"}>
          {props.digit}
        </Typography>
      </Button>
    </div>
  );
};
export default NumericButton;
