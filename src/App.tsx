import "./App.css";
import { Box, Grid } from "@mui/material";
import NumericButton from "./compnents/NumericButton";

function App() {
  const onClickNumbericButton = (digit: number) => {
    console.log(digit);
  };
  // const [count, setCount] = useState(0);
  return (
    <>
      <h1>Calculator</h1>
      <Box
        sx={{
          height: 650,
          width: 400,
          backgroundColor: "#202226",
          borderRadius: 3,
        }}
      >
        <br></br>
        <Box
          sx={{
            height: 150,
            backgroundColor: "#2A2C30",
            marginX: 3,
            borderRadius: 3,
          }}
        ></Box>
        <Grid container spacing={2}>
          <Grid>
            <NumericButton
              digit={9}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={6}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={3}
              onClick={onClickNumbericButton}
            ></NumericButton>
          </Grid>
          <Grid>
            <NumericButton
              digit={8}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={5}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={2}
              onClick={onClickNumbericButton}
            ></NumericButton>
          </Grid>
          <Grid>
            <NumericButton
              digit={7}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={4}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={1}
              onClick={onClickNumbericButton}
            ></NumericButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
