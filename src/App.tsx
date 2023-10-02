import { useState } from "react";
import NumericButton from "./compnents/NumericButton";

function App() {
  const [value, setValue] = useState("");
  const onClickNumbericButton = (item: string) => {
    console.log(item);
    if (item == "AC") {
      setValue("");
      return;
    }
    if (item == "DEL") {
      setValue(value.slice(0, -1));
      return;
    }
    if (item == "=") {
      setValue(eval(value));
      return;
    }

    setValue(value + item);
  };

  return (
    <div className=" flex flex-col items-center justify-start h-screen w-screen ">
      <div className="h-5"></div>
      <p className="font-Montserrat text-6xl font-bold">Calculator</p>
      <div className="h-5"></div>
      <div className="bg-[#202226] rounded-lg px-4 py-6">
        <form action="">
          <div className="flex justify-end mx-1 my-2">
            <input
              className="h-12 text-end flex-1 px-2"
              type="text"
              value={value}
            />
          </div>
          <div>
            <NumericButton
              digit={"AC"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"DEL"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"%"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"/"}
              onClick={onClickNumbericButton}
            ></NumericButton>
          </div>
          <div>
            <NumericButton
              digit={"7"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"8"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"9"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"*"}
              onClick={onClickNumbericButton}
            ></NumericButton>
          </div>
          <div>
            <NumericButton
              digit={"4"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"5"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"6"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"-"}
              onClick={onClickNumbericButton}
            ></NumericButton>
          </div>
          <div>
            <NumericButton
              digit={"1"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"2"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"3"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"+"}
              onClick={onClickNumbericButton}
            ></NumericButton>
          </div>
          <div>
            <NumericButton
              digit={"0"}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"."}
              onClick={onClickNumbericButton}
            ></NumericButton>
            <NumericButton
              digit={"="}
              onClick={onClickNumbericButton}
            ></NumericButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
