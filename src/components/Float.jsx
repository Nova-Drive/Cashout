import InputButton from "./InputAddSubButton";

export default function Float({ amount, setAmount }) {
  const buttonAmounts = [Number(100), Number(200), Number(250), Number(300)];
  return (
    <div className="p-2 border-2 w-min border-black rounded-xl space-y-0.5 flex flex-col items-center">
      <p className="font-medium">Float</p>
      <div className="mb-1 flex justify-center space-x-2">
        {buttonAmounts.map((amt) => (
          <InputButton style={"p1"} action={() => setAmount(amt)}>
            {amt}
          </InputButton>
        ))}

        <input
          className="p-1 w-14 border-2 border-black rounded hover:bg-cyan-600"
          value={"$" + amount}
          onChange={(e) => {
            setAmount(Number(e.target.value.slice(1)));
          }}
        ></input>
      </div>
    </div>
  );
}
