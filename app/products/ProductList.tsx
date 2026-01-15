"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Product } from "@/types/propduct"
import ProductSearch from "./ProductSearch"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
    const [search, setSearch] = useState("")

    // 🔍 SADECE title'a göre filtre
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredProducts)
    return (

        <div className="w-full max-w-5xl relative">
            {/* SEARCH INPUT */}
            <ProductSearch value={search} onChange={setSearch} />

            {/* 🔽 DROPDOWN */}
            {search && (
                <div className="absolute z-10 mt-2 bg-amber-500 w-full border rounded-md shadow-md max-h-80 overflow-auto">
                    {filteredProducts.length === 0 && (
                        <p className="p-3 text-sm text-muted-foreground">
                            Sonuç bulunamadı
                        </p>
                    )}

                    {filteredProducts.map(({ id, title, description }) => (
                        <Link
                            key={id}
                            href={`/products/${id}`}
                            onClick={() => setSearch("")}
                            className="block p-3 hover:bg-gray-100"
                        >
                            <p className="font-medium">{title}</p>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {description}
                            </p>
                        </Link>
                    ))}
                </div>
            )}

            {/* 🧱 ANA ÜRÜN LİSTESİ (DEĞİŞMEDİ) */}
            <div className="flex gap-5 flex-wrap justify-center mt-6">
                {products.map(
                    ({ id, category, description, image, price, rating, title }) => (
                        <Card key={id} className="w-[300px] flex flex-col justify-between">
                            <CardHeader>
                                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                                    {category}
                                </span>
                                <CardTitle className="line-clamp-2">{title}</CardTitle>
                                <CardDescription className="line-clamp-4">
                                    {description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex justify-center">
                                <Image
                                    src={image}
                                    width={200}
                                    height={200}
                                    alt={title}
                                    className="object-contain"
                                />
                            </CardContent>

                            <CardFooter className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-semibold">💰 {price} $</p>
                                    <p className="text-sm text-muted-foreground">
                                        ⭐ {rating.rate} / 5 ({rating.count})
                                    </p>
                                </div>

                                <Link
                                    href={`/products/${id}`}
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Detay
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </div>
    )
}

export default ProductList
