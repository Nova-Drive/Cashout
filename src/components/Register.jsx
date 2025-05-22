import { useState } from "react";
import Float from "./Float";
import Input from "./Input";
import Header from "./Header";
import InputButton from "./InputAddSubButton";

export default function Register({ register, order }) {
  const [input, setInput] = useState({
    quarter: Number(0),
    loonie: Number(0),
    toonie: Number(0),
    five: Number(0),
    ten: Number(0),
    twenty: Number(0),
    fifty: Number(0),
    hundred: Number(0),
  });
  const [float, setFloat] = useState(0);

  const incrementDecrement = {
    increment: (type) =>
      setInput((prev) => {
        type = Number(type);
        switch (type) {
          case 0.25:
            return { ...prev, quarter: prev.quarter + 0.25 };
          case 1:
            return { ...prev, loonie: prev.loonie + 1 };
          case 2:
            return { ...prev, toonie: prev.toonie + 2 };
          case 5:
            return { ...prev, five: prev.five + 5 };
          case 10:
            return { ...prev, ten: prev.ten + 10 };
          case 20:
            return { ...prev, twenty: prev.twenty + 20 };
          case 50:
            return { ...prev, fifty: prev.fifty + 50 };
          case 100:
            return { ...prev, hundred: prev.hundred + 100 };
          default:
            throw new Error(
              `Unsupported Type ${type}. Type should be a monetary denomination that is at least a quarter (ex. 0.25, 1, etc)`
            );
        }
      }),
    decrement: (type) =>
      setInput((prev) => {
        type = Number(type);
        switch (type) {
          case 0.25:
            return { ...prev, quarter: prev.quarter - 0.25 };
          case 1:
            return { ...prev, loonie: prev.loonie - 1 };
          case 2:
            return { ...prev, toonie: prev.toonie - 2 };
          case 5:
            return { ...prev, five: prev.five - 5 };
          case 10:
            return { ...prev, ten: prev.ten - 10 };
          case 20:
            return { ...prev, twenty: prev.twenty - 20 };
          case 50:
            return { ...prev, fifty: prev.fifty - 50 };
          case 100:
            return { ...prev, hundred: prev.hundred - 100 };
          default:
            throw new Error(
              `Unsupported Type ${type}. Type should be a monetary denomination that is at least a quarter (ex. 0.25, 1, etc)`
            );
        }
      }),
  };

  function handleSetInput(type, amount) {
    // Type is the children prop for input, should be a monetary denomination like 0.25 or 2, not something like 4 or 70
    setInput((prev) => {
      amount = Number(amount);
      type = Number(type);
      switch (type) {
        case 0.25:
          return { ...prev, quarter: amount * type };
        case 1:
          return { ...prev, loonie: amount * type };
        case 2:
          return { ...prev, toonie: amount * type };
        case 5:
          return { ...prev, five: amount * type };
        case 10:
          return { ...prev, ten: amount * type };
        case 20:
          return { ...prev, twenty: amount * type };
        case 50:
          return { ...prev, fifty: amount * type };
        case 100:
          return { ...prev, hundred: amount * type };
        default:
          throw new Error(
            `Unsupported Type ${type}. Type should be a monetary denomination that is at least a quarter (ex. 0.25, 1, etc)`
          );
      }
    });
  }

  function handleSetFloat(amount) {
    setFloat(Number(amount));
  }

  function handleReset() {
    setInput({
      quarter: Number(0),
      loonie: Number(0),
      toonie: Number(0),
      five: Number(0),
      ten: Number(0),
      twenty: Number(0),
      fifty: Number(0),
      hundred: Number(0),
    });
    setFloat(0);
  }

  return (
    <div className="p-5 mt-5 flex flex-col justify-center bg-cyan-500 border-4 border-black rounded-2xl ">
      <Header>Register {order}</Header>
      <div className="grid grid-cols-2 w-2xl justify-items-center auto-cols-max">
        <Input
          amount={input.quarter}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          0.25
        </Input>
        <Input
          amount={input.loonie}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          1
        </Input>
        <Input
          amount={input.toonie}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          2
        </Input>
        <Input
          amount={input.five}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          5
        </Input>
        <Input
          amount={input.ten}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          10
        </Input>
        <Input
          amount={input.twenty}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          20
        </Input>
        <Input
          amount={input.fifty}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          50
        </Input>
        <Input
          amount={input.hundred}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          100
        </Input>
      </div>

      <div className="flex justify-evenly items-center">
        <Float amount={float} setAmount={handleSetFloat} />
        <InputButton
          style="flex justify-center h-min mt-2"
          onClick={handleReset}
        >
          Reset
        </InputButton>
      </div>
    </div>
  );
}
