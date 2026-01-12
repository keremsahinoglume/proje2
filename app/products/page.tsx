import Post from '@/types/posts'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const BASE_URL = 'https://fakestoreapi.com/products'

const getproducts = async (): Promise<Post[]> => {
    const res = await fetch(BASE_URL, { cache: "no-store" })
    return res.json()
}

export default async function Page() {
    const products = await getproducts()

    return (
        <div className='flex flex-wrap justify-center gap-5 max-w-6xl mx-auto'>
            {products.map(({ id, image, title, description }) => (
                <Card className='bg-black' key={id}>
                    <CardHeader>
                        <CardTitle className='text-blue-50'>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                        <CardAction className='text-blue-50'>
                            <Link href={`/products/${id}`}>Detay</Link>
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
            ))}
        </div>
    )
}
