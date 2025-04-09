import { useRef, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Float from "./components/Float";
import calculateCashout from "./calculator";
import ResultSquare from "./components/ResultSquare";
import Table from "./components/Table";
function App() {
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
  let sum = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
  const [float, setFloat] = useState(0);
  let total = sum(input);

  let cashoutTotal,
    registerTotal = 0;
  const [calculatedCashout, setCalculatedCashout] = useState(null);
  let cashout, register;

  function printCashout() {
    console.log(calculatedCashout.cashout);
  }

  if (calculatedCashout) {
    cashout = calculatedCashout.cashout;
    register = calculatedCashout.register;
    printCashout();
    cashoutTotal = sum(cashout);
    registerTotal = sum(register);
  }

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
    setCalculatedCashout(null);
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

  function createTotal() {
    console.log(input.quarter);
    let result = calculateCashout(input, total, float);
    setCalculatedCashout(result);
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
    setCalculatedCashout(null);
  }

  return (
    <div className="bg-mint-500 h-auto max-h-min w-screen scroll-auto">
      <div className="min-h-screen p-10 flex flex-col justify-center items-center">
        <Header>Cashout Calculator</Header>
        <div className="p-5 bg-cyan-500 border-4 border-black rounded-2xl justify-items-center">
          <div className="grid grid-cols-2 w-2xl auto-cols-max">
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
          <Float amount={float} setAmount={handleSetFloat} />
        </div>
        <div className="flex">
          <button
            onClick={createTotal}
            className="py-2 px-3 m-2 border-2 border-black rounded-2xl"
          >
            Submit
          </button>
          <button
            className="py-2 px-3 m-2 border-2 border-black rounded-2xl"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        {calculatedCashout && (
          <>
            <div className="space-x-2 mb-10 flex">
              <ResultSquare value={total}>Before Cashout</ResultSquare>

              <ResultSquare value={calculatedCashout ? cashoutTotal : 0}>
                Cashout Total
              </ResultSquare>

              <ResultSquare value={registerTotal}>
                Left in Register
              </ResultSquare>
            </div>
            <Table input={input} register={register} cashout={cashout} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
