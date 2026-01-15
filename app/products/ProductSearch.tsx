"use client"

import { Input } from '@/components/ui/input'
import React from 'react'


interface ProductSearchProps {
    value: string
    onChange: (value: string) => void
}

const ProductSearch = ({ value, onChange }: ProductSearchProps) => {

    return (
        <>

            <Input
                placeholder="Ürün ara"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

        </>
    )
}

export default ProductSearch