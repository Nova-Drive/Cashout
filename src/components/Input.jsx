import InputButton from "./InputAddSubButton";

export default function Input({ children, amount, handleInput, actions }) {
  // Children is the denomination (eg. 100, 20, 5) and not the amount (eg. 12, 15, etc.)
  // Every time value changes, it computes the amount and refreshes (i think, it works so)
  return (
    <div className="flex justify-around min-w-72 h-min space-x-5 p-2 border-2 border-black rounded-xl">
      <p className="self-center">{children}</p>
      <div className="space-x-1 self-center">
        <InputButton action={() => actions.increment(children)}>+</InputButton>
        <input
          defaultValue={0}
          value={Number(amount) / Number(children)}
          onChange={(e) => {
            handleInput(children, e.target.value);
          }}
          className="border border-stone-900 rounded py-1 px-2 w-12 self-center text-center"
        ></input>
        <InputButton action={() => actions.decrement(children)}>-</InputButton>
      </div>

      <p className="self-center">${Number(amount)}</p>
    </div>
  );
}
