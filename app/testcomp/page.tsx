'use client'

import TestCom from "@/app/testcomp/TestCom"
import { useState } from "react"




const page = (e: any) => {

    const [value1, setValue1] = useState('a')
    console.log(value1)
    return (

        <>

            <TestCom fonksiyon={setValue1} value={value1} />

        </>
    )
}

export default page