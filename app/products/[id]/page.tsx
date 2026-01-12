import BackButton from "@/components/BackButton"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { notFound } from 'next/navigation'
import React from 'react'

interface ProProps {
    id: string
}

interface getProductDetailsProps {
    params: Promise<ProProps>
}

const BASE_URL = 'https://fakestoreapi.com/products'

const getProductDetails = async (id: any) => {
    const res = await fetch(BASE_URL + '/' + id)
    return res
}

const page = async ({ params }: getProductDetailsProps) => {
    const { id } = await params
    let content: React.ReactNode;

    try {
        const res = await getProductDetails(id)

        if (!res.ok) {
            content = notFound()
        } else {
            const data = await res.json()
            console.log('Çekti', data)
            const { id, category, image, price, rating, title, description } = data

            content = <>
                <Card className='   bg-black ' key={id} >
                    <CardHeader>
                        <CardTitle className='text-blue-50'>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                        <CardAction className='text-blue-50'>

                        </CardAction>
                    </CardHeader>

                    <CardContent>
                        <Image
                            src={image}
                            alt={title}
                            width={300}
                            height={200}
                        />
                    </CardContent>

                </Card>

                <BackButton className='text-black p-2.5 bg-amber-100 border-4 bor cursor-pointer' />


            </>
        }

    } catch (error: any) {
        console.log('Çekmedi (json parse hatası)', error.message)
        content = notFound()
    }

    return content
}



export default page