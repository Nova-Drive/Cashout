export default function Float({ amount, setAmount }) {
  return (
    <div className="p-2 border-2 w-min border-black rounded-xl space-y-0.5 flex flex-col items-center">
      <p className="font-medium">Float</p>
      <div className="mb-1 flex justify-center space-x-2">
        <button
          className="p-1 border-2 border-black rounded hover:bg-teal-600"
          onClick={() => {
            setAmount(Number(100));
          }}
        >
          100
        </button>
        <button
          className="p-1 border-2 border-black rounded"
          onClick={() => {
            setAmount(Number(200));
          }}
        >
          200
        </button>
        <button
          className="p-1 border-2 border-black rounded"
          onClick={() => {
            setAmount(Number(250));
          }}
        >
          250
        </button>
        <button
          className="p-1 border-2 border-black rounded"
          onClick={() => {
            setAmount(Number(300));
          }}
        >
          300
        </button>

        <input
          className="p-1 w-14 border-2 border-black rounded"
          value={"$" + amount}
          onChange={(e) => {
            setAmount(Number(e.target.value.slice(1)));
          }}
        ></input>
      </div>
    </div>
  );
}
