
import CheckBoxComp from "@/components/CheckBoxComp"
import ProductList from './ProductList'
import { Product } from '@/types/propduct'
import ProductSearch from './ProductSearch'


const BASE_URL = 'https://fakestoreapi.com/products'

const fetchData = async () => {
    const data = await fetch(BASE_URL)
    return data.json()
}




const products = async () => {

    const data: Product[] = await fetchData()

    return (

        <div className='grid grid-cols-[400px_1fr] p-3 gap-5'>

            <aside className='border border-amber-200'>


                <CheckBoxComp />


            </aside>
            <article className="flex gap-5 flex-wrap justify-center  border border-amber-800">
                <ProductList products={data} />
            </article>

        </div>

    )
}

export default products