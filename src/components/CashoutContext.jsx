import { createContext, useReducer, useState } from "react";
import Register from "./Register";
import Header from "./Header";
import InputButton from "./InputAddSubButton";
import calculateCashout from "../calculator";
import ResultSquare from "./ResultSquare";
import Table from "./Table";

export const RegisterContext = createContext(null);
export const RegisterDispachContext = createContext(null);

export function RegisterProvider() {
  const [registers, dispach] = useReducer(registerReducer, initialRegisters);
  const [cashoutList, setCashoutList] = useState([]);

  function createCashout() {
    console.log("Creating Cashout");
    let list = [];
    registers.forEach((reg) => {
      list.push(calculateCashout(reg.cash, null, reg.float));
    });
    setCashoutList(list);
  }

  function addRegister() {
    dispach({
      type: "added",
      register: {
        id: nextId++,
        cash: {
          quarter: Number(0),
          loonie: Number(0),
          toonie: Number(0),
          five: Number(0),
          ten: Number(0),
          twenty: Number(0),
          fifty: Number(0),
          hundred: Number(0),
        },
        float: Number(0),
      },
    });
  }

  function resetRegisters() {
    setCashoutList([]);
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
        let reg = Object.assign({}, registers[action.index]);
        switch (action.denomination) {
          case 0.25:
            reg.cash = {
              ...reg.cash,
              quarter: action.amount * action.denomination,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 1:
            reg.cash = {
              ...reg.cash,
              loonie: action.amount * action.denomination,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 2:
            reg.cash = {
              ...reg.cash,
              toonie: action.amount * action.denomination,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 5:
            reg.cash = {
              ...reg.cash,
              five: action.amount * action.denomination,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 10:
            reg.cash = {
              ...reg.cash,
              ten: action.amount * action.denomination,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 20:
            reg.cash = {
              ...reg.cash,
              twenty: action.amount * action.denomination,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 50:
            reg.cash = {
              ...reg.cash,
              fifty: action.amount * action.denomination,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));
          case 100:
            reg.cash = {
              ...reg.cash,
              hundred: action.amount * action.denomination,
            };
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

        let reg = Object.assign({}, registers[action.index]);
        switch (Number(action.denomination)) {
          case 0.25:
            reg.cash = { ...reg.cash, quarter: reg.cash.quarter + 0.25 };
            console.log(reg.cash.quarter);
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 1:
            reg.cash = { ...reg.cash, loonie: reg.cash.loonie + 1 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 2:
            reg.cash = { ...reg.cash, toonie: reg.cash.toonie + 2 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 5:
            reg.cash = { ...reg.cash, five: reg.cash.five + 5 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 10:
            reg.cash = { ...reg.cash, ten: reg.cash.ten + 10 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 20:
            reg.cash = { ...reg.cash, twenty: reg.cash.twenty + 20 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 50:
            reg.cash = { ...reg.cash, fifty: reg.cash.fifty + 50 };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 100:
            reg.cash = { ...reg.cash, hundred: reg.cash.hundred + 100 };
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

        let reg = Object.assign({}, registers[action.index]);
        switch (Number(action.denomination)) {
          case 0.25:
            reg.cash = {
              ...reg.cash,
              quarter: reg.cash.quarter > 0 ? reg.cash.quarter - 0.25 : 0,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 1:
            reg.cash = {
              ...reg.cash,
              loonie: reg.cash.loonie > 0 ? reg.cash.loonie - 1 : 0,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 2:
            reg.cash = {
              ...reg.cash,
              toonie: reg.cash.toonie > 0 ? reg.cash.toonie - 2 : 0,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 5:
            reg.cash = {
              ...reg.cash,
              five: reg.cash.five > 0 ? reg.cash.five - 5 : 0,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 10:
            reg.cash = {
              ...reg.cash,
              ten: reg.cash.ten > 0 ? reg.cash.ten - 10 : 0,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 20:
            reg.cash = {
              ...reg.cash,
              twenty: reg.cash.twenty > 0 ? reg.cash.twenty - 20 : 0,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 50:
            reg.cash = {
              ...reg.cash,
              fifty: reg.cash.fifty > 0 ? reg.cash.fifty - 50 : 0,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          case 100:
            reg.cash = {
              ...reg.cash,
              hundred: reg.cash.hundred > 0 ? reg.cash.hundred - 100 : 0,
            };
            return registers.map((r) => (r.id == reg.id ? reg : r));

          default:
            throw new Error(
              `Unsupported Type ${action.denomination}. Type should be a monetary denomination that is at least a quarter (ex. 0.25, 1, etc)`
            );
        }
      }
      case "setFloat": {
        console.log("Set float for register " + action.index);
        let reg = { ...registers[action.index] };
        reg.float = action.float;
        return registers.map((r, i) => (i != action.index ? r : reg));
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

        return [initialRegisters[0]];
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
            <Register order={index} />
          ))}
          <div className="flex mt-3 space-x-1">
            <InputButton action={addRegister}>Add Register</InputButton>
            <InputButton action={createCashout}>Calculate</InputButton>
            <InputButton action={resetRegisters}>Reset</InputButton>
          </div>
          {cashoutList.length > 0 &&
            cashoutList.map((item, index) => (
              <>
                <Header>Register {index + 1}</Header>
                <div className="space-x-2 mb-10 flex">
                  <ResultSquare value={cashoutList[index].inputTotal}>
                    Before Cashout
                  </ResultSquare>

                  <ResultSquare value={cashoutList[index].cashoutTotal}>
                    Cashout Total
                  </ResultSquare>

                  <ResultSquare value={registers[index].float}>
                    Left in Register
                  </ResultSquare>
                </div>
                <Table
                  input={registers[index].cash}
                  register={cashoutList[index].register}
                  cashout={cashoutList[index].cashout}
                />
              </>
            ))}
        </div>
      </RegisterDispachContext>
    </RegisterContext.Provider>
  );
}
let nextId = 2;

const initialRegisters = [
  {
    id: 1,
    cash: {
      quarter: Number(0),
      loonie: Number(0),
      toonie: Number(0),
      five: Number(0),
      ten: Number(0),
      twenty: Number(0),
      fifty: Number(0),
      hundred: Number(0),
    },
    float: Number(0),
  },
];
