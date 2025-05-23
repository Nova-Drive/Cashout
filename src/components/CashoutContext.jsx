import { createContext, useReducer } from "react";
import Register from "./Register";
import Header from "./Header";
import InputButton from "./InputAddSubButton";
import Input from "./Input";

export const RegisterContext = createContext(null);
export const RegisterDispachContext = createContext(null);

export function RegisterProvider() {
  const [registers, dispach] = useReducer(registerReducer, initialRegisters);

  function addRegister() {
    dispach({
      type: "added",
      register: {
        id: nextId++,
        quarter: Number(0),
        loonie: Number(0),
        toonie: Number(0),
        five: Number(0),
        ten: Number(0),
        twenty: Number(0),
        fifty: Number(0),
        hundred: Number(0),
        float: Number(0),
      },
    });
  }

  function deleteRegister(registerId) {
    dispach({ type: "deleted", id: registerId });
  }

  function registerReducer(registers, action) {
    switch (action.type) {
      case "added": {
        return [...registers, action.register];
      }
      case "deleted": {
        console.log("Deleted Case: Delete " + action.id);
        return registers.filter((r) => r.id != action.id);
      }
      default: {
        throw new Error("Unsupported");
      }
    }
  }

  return (
    <RegisterContext.Provider value={registers}>
      <RegisterDispachContext value={dispach}>
        <div className="min-h-screen p-10 flex flex-col justify-center items-center">
          <Header>Cashout Calculator</Header>
          {registers.map((register, index) => (
            <Register register={register} order={index + 1} />
          ))}
          <div className="flex mt-3 space-x-1">
            <InputButton action={addRegister}>Add Register</InputButton>
            <InputButton>Calculate</InputButton>
            <InputButton>Reset</InputButton>
          </div>
        </div>
      </RegisterDispachContext>
    </RegisterContext.Provider>
  );
}
let nextId = 3;

const initialRegisters = [
  {
    id: 1,
    quarter: Number(0),
    loonie: Number(0),
    toonie: Number(0),
    five: Number(0),
    ten: Number(0),
    twenty: Number(0),
    fifty: Number(0),
    hundred: Number(0),
    float: Number(0),
  },
  {
    id: 2,
    quarter: Number(0),
    loonie: Number(0),
    toonie: Number(0),
    five: Number(0),
    ten: Number(0),
    twenty: Number(0),
    fifty: Number(0),
    hundred: Number(0),
    float: Number(0),
  },
];
