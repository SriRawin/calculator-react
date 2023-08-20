import "./App.css";
import { Box, Grid } from "@mui/material";
import NumericButton from "./compnents/NumericButton";

function App() {
  const handleButtonClick = (digit: number) => {
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
              onClick={handleButtonClick}
            ></NumericButton>
            <NumericButton
              digit={6}
              onClick={handleButtonClick}
            ></NumericButton>
            <NumericButton
              digit={3}
              onClick={handleButtonClick}
            ></NumericButton>
          </Grid>
          <Grid>
            <NumericButton
              digit={8}
              onClick={handleButtonClick}
            ></NumericButton>
            <NumericButton
              digit={5}
              onClick={handleButtonClick}
            ></NumericButton>
            <NumericButton
              digit={2}
              onClick={handleButtonClick}
            ></NumericButton>
          </Grid>
          <Grid>
            <NumericButton
              digit={7}
              onClick={handleButtonClick}
            ></NumericButton>
            <NumericButton
              digit={4}
              onClick={handleButtonClick}
            ></NumericButton>
            <NumericButton
              digit={1}
              onClick={handleButtonClick}
            ></NumericButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
