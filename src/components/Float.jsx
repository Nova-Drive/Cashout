export default function Float({ amount, setAmount }) {
  return (
    <div className="p-2 w-min border-2 border-black rounded flex justify-items-center">
      <h1>Float</h1>
      <button
        className="p-1 mx-3 border-2 border-black rounded"
        onClick={() => {
          setAmount(Number(100));
        }}
      >
        100
      </button>
      <button
        className="p-1 mx-3 border-2 border-black rounded"
        onClick={() => {
          setAmount(Number(200));
        }}
      >
        200
      </button>
      <button
        className="p-1 mx-3 border-2 border-black rounded"
        onClick={() => {
          setAmount(Number(250));
        }}
      >
        250
      </button>
      <button
        className="p-1 mx-3 border-2 border-black rounded"
        onClick={() => {
          setAmount(Number(300));
        }}
      >
        300
      </button>
      <div className="flex">
        <p>$</p>
        <input
          className="w-15 ml-1"
          value={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        ></input>
      </div>
    </div>
  );
}
