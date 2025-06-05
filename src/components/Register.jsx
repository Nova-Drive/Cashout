import { useContext } from "react";
import Float from "./Float";
import Input from "./Input";
import Header from "./Header";
import InputButton from "./InputAddSubButton";
import { RegisterContext, RegisterDispachContext } from "./CashoutContext";

export default function Register({ order }) {
  const registerContext = useContext(RegisterContext);
  const register = registerContext[order];
  const dispach = useContext(RegisterDispachContext);

  const incrementDecrement = {
    increment: (type) =>
      dispach({
        type: "increment",
        index: order,
        denomination: type,
      }),
    decrement: (type) =>
      dispach({
        type: "decrement",
        index: order,
        denomination: type,
      }),
  };

  function handleSetInput(type, amount) {
    // Type is the children prop for input, should be a monetary denomination like 0.25 or 2, not something like 4 or 70
    dispach({
      type: "edited",
      index: order,
      denomination: Number(type),
      amount: amount,
    });
  }

  function handleSetFloat(amount) {
    dispach({
      type: "setFloat",
      index: order,
      float: amount,
    });
  }

  function handleReset() {
    dispach({
      type: "resetRegister",
      index: order,
    });
  }

  return (
    <div className="p-5 mt-5 flex flex-col max-w-2xl bg-cyan-500 border-4 border-black rounded-2xl ">
      <Header style={"pb-2 text-2xl self-center"}>Register {order + 1}</Header>
      <div className="flex flex-wrap space-y-3 self-center justify-around">
        <Input
          amount={register.cash.quarter}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          0.25
        </Input>
        <Input
          amount={register.cash.loonie}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          1
        </Input>
        <Input
          amount={register.cash.toonie}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          2
        </Input>
        <Input
          amount={register.cash.five}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          5
        </Input>
        <Input
          amount={register.cash.ten}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          10
        </Input>
        <Input
          amount={register.cash.twenty}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          20
        </Input>
        <Input
          amount={register.cash.fifty}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          50
        </Input>
        <Input
          amount={register.cash.hundred}
          handleInput={handleSetInput}
          actions={incrementDecrement}
        >
          100
        </Input>
      </div>

      {/* Float */}
      <div className="flex justify-around items-center">
        <Float amount={register.float} setAmount={handleSetFloat} />
        <div className="flex w-2/5 justify-around">
          <InputButton
            style="flex justify-center h-min mt-2"
            hoverColor="hover:bg-amber-600"
            action={handleReset}
          >
            Reset
          </InputButton>
          <InputButton
            style="flex justify-center h-min mt-2 hover:bg-red-500"
            action={() => dispach({ type: "deleted", id: register.id })}
          >
            Delete
          </InputButton>
        </div>
      </div>
    </div>
  );
}
