'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { send } from "process"
import { useState } from "react"


const CalculatePage = () => {

    const [valueState, SetValue] = useState('')

    const [inputValue, SetInputValue] = useState('0')
    const screen = (e: any) => {
        return SetValue(e.target.value)
    }

    const restart = () => {
        SetValue('')
        SetInputValue('0')
    }

    const calculate = () => {
        console.log(valueState)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.dataset.value
        SetInputValue(value)
    }

    const handleOp = (o: ('+' | '-' | '/' | '*')) => {
        SetInputValue(o)

    }

    return (
        <div >

            <div >
                <div className="flex flex-row">

                    <div className="w-2xs">Sonuç: {valueState}</div>
                    <Input placeholder={inputValue} />
                    <Button onClick={calculate}>Hesapla</Button>
                    <Button onClick={restart}>Sıfırla</Button>
                </div>

                <div className="flex flex-row flex-3">
                    <Button data-value="0" onClick={handleClick}>0</Button>
                    <Button data-value="1" onClick={handleClick}>1</Button>
                    <Button data-value="2" onClick={handleClick}>2</Button>
                    <Button data-value="3" onClick={handleClick}>3</Button>
                    <Button data-value="4" onClick={handleClick}>4</Button>
                    <Button data-value="5" onClick={handleClick}>5</Button>
                    <Button data-value="6" onClick={handleClick}>6</Button>
                    <Button data-value="7" onClick={handleClick}>7</Button>
                    <Button data-value="8" onClick={handleClick}>8</Button>
                    <Button data-value="9" onClick={handleClick}>9</Button>
                    <Button onClick={() => handleOp("+")}>+</Button>
                    <Button onClick={() => handleOp("-")}>-</Button>
                    <Button onClick={() => handleOp("/")}>/</Button>
                    <Button onClick={() => handleOp("*")}>*</Button>

                </div>

            </div>
        </div>
    )
}

export default CalculatePage


