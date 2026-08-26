import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)
    function handleInc() {
        setCount(count + 1)
    }
    function handleDec() {
        count <= 0 ? setCount(0) : setCount(count - 1)
    }
    function handleReset() {
        setCount(0)
    }
    return (
        <>
            <div style={{display: "flex", gap: 10}}>
                <button style={{padding: 10, borderRadius: 10}} onClick={handleInc}>increment</button>
                <button style={{padding: 10, borderRadius: 10}} onClick={handleDec}>decrement</button>
                <button style={{padding: 10, borderRadius: 10}} onClick={handleReset}>reset</button>
            </div>
            <div>
                <p style={{backgroundColor: "black", color: "white"}}>{count}</p>
            </div>
        </>
    )
}