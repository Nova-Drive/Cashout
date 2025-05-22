import CashoutSquare from "./components/CashoutSquare";
import ResultSquare from "./components/ResultSquare";
import Table from "./components/Table";
import CashoutRoot from "./CashoutRoot";
import { useState } from "react";
function App() {
  function getRegisterDetails(input, result) {
    if (input == null && result == null) {
      setRegisters(null);
    } else {
      setRegisters({
        input: input,
        register: result.register,
        cashout: result.cashout,
      });
    }
  }
  let sum = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

  const [registers, setRegisters] = useState();
  console.log(registers);

  return (
    // <div>
    //   <CashoutSquare getRegisterDetails={getRegisterDetails} />
    // </div>
    <CashoutRoot />
  );
}

export default App;
