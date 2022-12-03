import { useEffect, useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)
    function handleMinus(e) { if (counter > -10) setCounter(counter - 1) }
    function handlePlus(e) { if (counter < 10) setCounter(counter + 1) }
    useEffect(() => {
        document.querySelectorAll('button').forEach(item => {
            item.style.backgroundColor = `#${Math.ceil(Math.random()*1000000)}`
        })
    })
    return (
        <div className="counter">
            <button id="minus" onClick={handleMinus}>-</button>
            <h3>{counter}</h3>
            <button id="plus" onClick={handlePlus}>+</button>
        </div>
    )
}

export default Counter