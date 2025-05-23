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

  function resetRegisters() {
    dispach({
      type: "resetAllRegisters",
    });
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
      case "edited": {
        // index: index of the register, denomination, amount: of denomination
        // This is when the value is directly edited (not increment/decrement buttons)
        console.log("Edited register " + action.index);
        let reg = registers[action.index];
        switch (action.denomination) {
          case 0.25:
            reg = { ...reg, quarter: action.amount * action.denomination };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 1:
            reg = { ...reg, loonie: action.amount * action.denomination };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 2:
            reg = { ...reg, toonie: action.amount * action.denomination };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 5:
            reg = { ...reg, five: action.amount * action.denomination };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 10:
            reg = { ...reg, ten: action.amount * action.denomination };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 20:
            reg = { ...reg, twenty: action.amount * action.denomination };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 50:
            reg = { ...reg, fifty: action.amount * action.denomination };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 100:
            reg = { ...reg, hundred: action.amount * action.denomination };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          default:
            throw new Error(
              `Unsupported Type ${action.denomination}. Type should be a monetary denomination that is at least a quarter (ex. 0.25, 1, etc)`
            );
        }
      }
      case "increment": {
        // index: index of the register, denomination

        console.log("Incremented register " + action.index);

        let reg = registers[action.index];
        switch (Number(action.denomination)) {
          case 0.25:
            reg = { ...reg, quarter: reg.quarter + 0.25 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 1:
            reg = { ...reg, loonie: reg.loonie + 1 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 2:
            reg = { ...reg, toonie: reg.toonie + 2 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 5:
            reg = { ...reg, five: reg.five + 5 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 10:
            reg = { ...reg, ten: reg.ten + 10 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 20:
            reg = { ...reg, twenty: reg.twenty + 20 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 50:
            reg = { ...reg, fifty: reg.fifty + 50 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 100:
            reg = { ...reg, hundred: reg.hundred + 100 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          default:
            throw new Error(
              `Unsupported Type ${action.denomination}. Type should be a monetary denomination that is at least a quarter (ex. 0.25, 1, etc)`
            );
        }
      }
      case "decrement": {
        // index: index of the register, denomination

        console.log("Decremented register " + action.index);

        let reg = registers[action.index];
        switch (Number(action.denomination)) {
          case 0.25:
            reg = { ...reg, quarter: reg.quarter > 0 ? reg.quarter - 0.25 : 0 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 1:
            reg = { ...reg, loonie: reg.loonie > 0 ? reg.loonie - 1 : 0 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 2:
            reg = { ...reg, toonie: reg.toonie > 0 ? reg.toonie - 2 : 0 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 5:
            reg = { ...reg, five: reg.five > 0 ? reg.five - 5 : 0 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 10:
            reg = { ...reg, ten: reg.ten > 0 ? reg.ten - 10 : 0 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 20:
            reg = { ...reg, twenty: reg.twenty > 0 ? reg.twenty - 20 : 0 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 50:
            reg = { ...reg, fifty: reg.fifty > 0 ? reg.fifty - 50 : 0 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 100:
            reg = { ...reg, hundred: reg.hundred > 0 ? reg.hundred - 100 : 0 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          default:
            throw new Error(
              `Unsupported Type ${action.denomination}. Type should be a monetary denomination that is at least a quarter (ex. 0.25, 1, etc)`
            );
        }
      }
      case "resetRegister": {
        // index
        console.log("Register " + action.index + " Reset");
        return registers.map((r, i) =>
          i != action.index ? r : initialRegisters[0]
        );
      }
      case "resetAllRegisters": {
        //TODO: untested and also hacky
        console.log("Resetting all registers");
        return registers.map((r) => (r.id === r.id ? initialRegisters[0] : r));
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
            <Register register={register} order={index} />
          ))}
          <div className="flex mt-3 space-x-1">
            <InputButton action={addRegister}>Add Register</InputButton>
            <InputButton>Calculate</InputButton>
            <InputButton action={resetRegisters}>Reset</InputButton>
          </div>
        </div>
      </RegisterDispachContext>
    </RegisterContext.Provider>
  );
}
let nextId = 2;

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
];
