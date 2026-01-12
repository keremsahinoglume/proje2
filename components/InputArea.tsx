'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import test from "node:test"
import { useState } from "react"

export function InputWithButton() {

    const [value, setValue] = useState("")

    const handleChange = (e: any) => {
        setValue(e.target.value)
        console.log(e.target.value)
    }

    const pushConsole = () => {
        console.log(value)
    }

    return (
        <div className="flex w-full max-w-sm items-center gap-2">
            <Input type="text" placeholder="Ürün bul" id="testValue" onChange={handleChange} />
            <Button type="button" variant="outline" onClick={pushConsole}>
                Gönder
            </Button>
        </div>
    )
}

export default InputWithButton