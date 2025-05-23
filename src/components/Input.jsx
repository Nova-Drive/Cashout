import InputButton from "./InputAddSubButton";

export default function Input({ children, amount, handleInput, actions }) {
  return (
    <div className="flex justify-around w-72 space-x-5 p-3 mb-2 border-2 border-black rounded-xl">
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
