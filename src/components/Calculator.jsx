import { useRef, useState } from "react"

export function  Calculator() {
const [firstNum, setFirstNum] = useState(0)
const [secondNum, setSecondNum] = useState(0)
const [op, setop] = useState('')
const [result, setresult] = useState(0)
function calcOperation() {
        if (op === '+') {
            setresult(parseInt(firstNum) + parseInt(secondNum))
        }
        else if (op === '-') {
            setresult(parseInt(firstNum) - parseInt(secondNum))
        }
        else if (op === '*') {
            setresult(parseInt(firstNum) * parseInt(secondNum))
        }
    }

    return (
        <div style={{border:"1px solid black",  width: "300px", padding: "10px", borderRadius: "10px", display: "flex", flexDirection:"column"}}>
            <h1>Calculator</h1>
            <div style={{display: "flex", flexDirection:"column", gap: "10px"}}>
                <div style={{backgroundColor: "#F2B230"}}>{result}</div>
                <div>
                    <input value={firstNum} onChange={(e) => setFirstNum(e.target.value)} type="number" placeholder="Enter first num"/>
                    <input value={secondNum} onChange={(e) => setSecondNum(e.target.value)} type="number" placeholder="Enter second num"/>
                </div>
                <div>
                    <button onClick={() => setop('+')}>+</button>
                    <button onClick={() => setop('-')}>-</button>
                    <button onClick={() => setop('*')}>*</button>
                    <button onClick={calcOperation}>=</button>
                    <button onClick={()=>setresult(0)}>reset</button>
                </div>
            </div>
        </div>
    )
}