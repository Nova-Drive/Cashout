import TableItem from "./TableItem";

export default function Table({ children, input, register, cashout }) {
  let sum = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
  return (
    <table className="w-min py-4 table-auto bg-teal-600 rounded-2xl border-4 border-black border-separate border-spacing-0">
      <thead className="">
        <tr className="w-max text-sm  text-gray-500 dark:text-gray-400">
          <th scope="col" className="pl-1">
            Denomination
          </th>
          <th scope="col" className="px-5">
            Total
          </th>
          <th scope="col" className="px-5">
            In Register
          </th>
          <th scope="col" className="pl-1">
            Out of Register
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <TableItem type={"head"}>$0.25</TableItem>
          <TableItem>${input.quarter}</TableItem>
          <TableItem>${register.quarter}</TableItem>
          <TableItem>${cashout.quarter}</TableItem>
        </tr>
        <tr>
          <TableItem type={"head"}>$1</TableItem>
          <TableItem>${input.loonie}</TableItem>
          <TableItem>${register.loonie}</TableItem>
          <TableItem>${cashout.loonie}</TableItem>
        </tr>
        <tr>
          <th>$2</th>
          <td>${input.toonie}</td>
          <td>${register.toonie}</td>
          <td>${cashout.toonie}</td>
        </tr>
        <tr>
          <th>$5</th>
          <td>${input.five}</td>
          <td>${register.five}</td>
          <td>${cashout.five}</td>
        </tr>
        <tr>
          <th>$10</th>
          <td>${input.ten}</td>
          <td>${register.ten}</td>
          <td>${cashout.ten}</td>
        </tr>
        <tr>
          <th>$20</th>
          <td>${input.twenty}</td>
          <td>${register.twenty}</td>
          <td>${cashout.twenty}</td>
        </tr>
        <tr>
          <th>$50</th>
          <td>${input.fifty}</td>
          <td>${register.fifty}</td>
          <td>${cashout.fifty}</td>
        </tr>
        <tr>
          <th>$100</th>
          <td>${input.hundred}</td>
          <td>${register.hundred}</td>
          <td>${cashout.hundred}</td>
        </tr>
      </tbody>
      <tfoot className="text-center">
        <tr>
          <th className="border-t border-gray-700">Total</th>
          <td className="border-t border-gray-700">${sum(input)}</td>
          <td className="border-t border-gray-700">${sum(register)}</td>
          <td className="border-t border-gray-700">${sum(cashout)}</td>
        </tr>
      </tfoot>
    </table>
  );
}
