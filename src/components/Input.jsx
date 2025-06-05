import InputButton from "./InputAddSubButton";

export default function Input({ children, amount, handleInput, actions }) {
  // Children is the denomination (eg. 100, 20, 5) and not the amount (eg. 12, 15, etc.)
  // Every time value changes, it computes the amount and refreshes (i think, it works so)
  return (
    <div className="flex flex-row justify-between h-min space-x-5 min-w-64 w-2/5 p-2 border-2 border-black rounded-xl">
      <div className="flex w-11 justify-center">
        <p className="self-center">${children}</p>
      </div>

      <div className="flex flex-row space-x-1 justify-items-center">
        <InputButton action={() => actions.increment(children)}>+</InputButton>
        <input
          defaultValue={0}
          value={Number(amount) / Number(children)}
          onChange={(e) => {
            handleInput(children, e.target.value);
          }}
          className="border border-stone-900 rounded py-1 px-2 w-12  text-center"
        ></input>
        <InputButton action={() => actions.decrement(children)}>-</InputButton>
      </div>
      <div className="flex w-11">
        <p className="w-min self-center">${Number(amount)}</p>
      </div>
    </div>
  );
}
