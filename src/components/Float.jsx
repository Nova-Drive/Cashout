export default function Float({ amount, setAmount }) {
  return (
    <div className="p-2 border-2 w-min border-black rounded-xl flex justify-center">
      <p className="align-middle">Float</p>
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

      <input
        className="w-10 ml-1"
        value={"$" + amount}
        onChange={(e) => {
          setAmount(Number(e.target.value.slice(1)));
        }}
      ></input>
    </div>
  );
}
