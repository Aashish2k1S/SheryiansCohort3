import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "./redux/features/counterSlice"

const App = () => {

  const [amount, setAmount] = useState('');
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.value)

  return (
    <div className="bg-black text-white h-screen w-screen p-4">
      Testing

      <div className="mt-4">
        <h1 className="text-4xl mb-8">{counter}</h1>
        <button onClick={() => { dispatch(increment()); }}
          className="bg-green-500 text-black font-semibold p-2 rounded-2xl cursor-pointer"
        >Increment</button>
        <button onClick={() => { dispatch(decrement()); }}
          className="ml-2 bg-red-500 text-black font-semibold p-2 rounded-2xl cursor-pointer"
        >Decrement</button>

      </div>
      <div>
        <input type="number" name="amount" id="amount"
          placeholder="Enter the amount" onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button onClick={() => { dispatch(incrementByAmount(Number(amount))); }}
          className="bg-blue-500 text-black font-semibold p-2 rounded-2xl cursor-pointer"
        >Increment by Amount</button>
      </div>
    </div>
  )
}

export default App