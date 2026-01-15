import { SendHandle } from 'child_process'
import React from 'react'


interface Seneryo {
    value: string,
    fonksiyon: (value: string) => void
}


const TestCom = ({ fonksiyon, value }: Seneryo) => {


    fonksiyon('yeni deger')
    return (
        <div>
            {value}

        </div>
    )
}

export default TestCom