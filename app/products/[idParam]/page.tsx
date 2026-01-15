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
import Image from 'next/image'
import Link from 'next/link'
interface ProductDetailsProps {
    params: Promise<{ idParam: string }>
}


interface ProductDetailsDataProps {

    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

const BASE_URL = 'https://fakestoreapi.com/products/'



const ProductDetails = async ({ params }: ProductDetailsProps) => {

    let content = <></>
    const { idParam } = await params

    const fetchData = async (id: string) => {
        const res = await fetch(BASE_URL + id)
        return await res.json()
    }

    const { category, description, id, image, price, rating, title, }: ProductDetailsDataProps = await fetchData(idParam)
    return (




        <div className="flex justify-center py-10">
            <Card key={id} className="w-full max-w-2xl">
                <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <CardTitle className="text-xl">{title}</CardTitle>
                            <CardDescription className="mt-1">
                                {description}
                            </CardDescription>
                        </div>

                        <CardAction>
                            <Link
                                href="/products"
                                className="text-sm text-muted-foreground hover:underline whitespace-nowrap"
                            >
                                ← Geri
                            </Link>
                        </CardAction>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="flex justify-center py-6">
                        <Image
                            alt={title}
                            src={image}
                            width={250}
                            height={250}
                            className="object-contain"
                        />
                    </div>
                </CardContent>

                <CardFooter>
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">
                            💰 {price} $
                        </p>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>⭐ {rating.rate} / 5</span>
                            <span>•</span>
                            <span>({rating.count} değerlendirme)</span>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>



    )
}

export default ProductDetails