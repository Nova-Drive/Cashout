import { Children } from "react";
import TableItem from "./TableItem";

/**
 * input and register must not be null if isRegister is true. If isRegister is false, they may be null. cashout must always be given.
 *
 */
export default function Table({
  input,
  register,
  cashout,
  isRegister = true,
  children,
}) {
  let sum = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

  if ((isRegister && !register) || (isRegister && !input)) {
    throw new Error(
      "Table error: isRegister == true and register and/or input was not provided. Please make sure both are provided, or set isRegister to false."
    );
  }
  return (
    <div className="w-min h-min p-4 bg-teal-600 rounded-2xl border-4 border-black border-separate border-spacing-0">
      <h1 className="pb-1 text-center font-semibold text-2xl">{children}</h1>
      <table className="table-auto ">
        <thead className="pb-12">
          <tr className="w-max text-sm">
            <th scope="col" className="pl-1">
              Denomination
            </th>
            {!isRegister && (
              <th scope="col" className="px-3">
                Amount
              </th>
            )}
            <th scope="col" className="px-3">
              Total
            </th>
            {isRegister && (
              <>
                <th scope="col" className="px-5">
                  In Register
                </th>
                <th scope="col" className="pl-1">
                  Out of Register
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <TableItem type={"head"}>$0.25</TableItem>
            {isRegister && (
              <>
                <TableItem>${input.quarter.toFixed(2)}</TableItem>
                <TableItem>${register.quarter.toFixed(2)}</TableItem>
              </>
            )}
            {!isRegister && <TableItem>{cashout.quarter * 4}</TableItem>}
            <TableItem>${cashout.quarter.toFixed(2)}</TableItem>
          </tr>
          <tr>
            <TableItem type={"head"}>$1</TableItem>
            {isRegister && (
              <>
                <TableItem>${input.loonie}</TableItem>
                <TableItem>${register.loonie}</TableItem>
              </>
            )}
            {!isRegister && <TableItem>{cashout.loonie}</TableItem>}

            <TableItem>${cashout.loonie}</TableItem>
          </tr>
          <tr>
            <TableItem type={"head"}>$2</TableItem>
            {isRegister && (
              <>
                <TableItem>${input.toonie}</TableItem>
                <TableItem>${register.toonie}</TableItem>
              </>
            )}
            {!isRegister && <TableItem>{cashout.toonie / 2}</TableItem>}

            <TableItem>${cashout.toonie}</TableItem>
          </tr>
          <tr>
            <TableItem type={"head"}>$5</TableItem>
            {isRegister && (
              <>
                <TableItem>${input.five}</TableItem>
                <TableItem>${register.five}</TableItem>
              </>
            )}
            {!isRegister && <TableItem>{cashout.five / 5}</TableItem>}

            <TableItem>${cashout.five}</TableItem>
          </tr>
          <tr>
            <TableItem type={"head"}>$10</TableItem>
            {isRegister && (
              <>
                <TableItem>${input.ten}</TableItem>
                <TableItem>${register.ten}</TableItem>
              </>
            )}
            {!isRegister && <TableItem>{cashout.ten / 10}</TableItem>}

            <TableItem>${cashout.ten}</TableItem>
          </tr>
          <tr>
            <TableItem type={"head"}>$20</TableItem>
            {isRegister && (
              <>
                <TableItem>${input.twenty}</TableItem>
                <TableItem>${register.twenty}</TableItem>
              </>
            )}
            {!isRegister && <TableItem>{cashout.twenty / 20}</TableItem>}

            <TableItem>${cashout.twenty}</TableItem>
          </tr>
          <tr>
            <TableItem type={"head"}>$50</TableItem>
            {isRegister && (
              <>
                <TableItem>${input.fifty}</TableItem>
                <TableItem>${register.fifty}</TableItem>
              </>
            )}
            {!isRegister && <TableItem>{cashout.fifty / 50}</TableItem>}

            <TableItem>${cashout.fifty}</TableItem>
          </tr>
          <tr>
            <TableItem type={"head"}>$100</TableItem>
            {isRegister && (
              <>
                <TableItem>${input.hundred}</TableItem>
                <TableItem>${register.hundred}</TableItem>
              </>
            )}
            {!isRegister && <TableItem>{cashout.hundred / 100}</TableItem>}

            <TableItem>${cashout.hundred}</TableItem>
          </tr>
        </tbody>
        <tfoot className="text-center">
          <tr>
            <TableItem type="head" className="border-t border-gray-700">
              Total
            </TableItem>
            {isRegister && (
              <>
                <TableItem className="border-t border-gray-700">
                  ${sum(input).toFixed(2)}
                </TableItem>
                <TableItem className="border-t border-gray-700">
                  ${sum(register).toFixed(2)}
                </TableItem>
              </>
            )}

            {!isRegister && <TableItem></TableItem>}

            <TableItem className="border-t border-gray-700">
              ${sum(cashout).toFixed(2)}
            </TableItem>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
