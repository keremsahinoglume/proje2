import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

const BASE_URL = 'https://fakestoreapi.com/products'

const fetchData = async () => {
    const data = await fetch(BASE_URL)
    return data.json()
}
type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}


const products = async () => {

    const data: Product[] = await fetchData()

    return (
        <article className="flex gap-5 flex-wrap justify-center  ">
            {data.map(
                ({ id, description, image, title }) => (
                    <Card key={id} className="w-[300px] flex flex-col justify-between">
                        <CardHeader>
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

                        <CardFooter className="flex justify-end">
                            <Link href={`/products/${id}`} className="text-sm text-blue-500">
                                Detay
                            </Link>
                        </CardFooter>
                    </Card>

                )
            )}
        </article>

    )
}

export default products