import React from 'react'

interface RootLayoutProps {
    children: React.ReactNode;
}


const ProductLayout = ({ children }: RootLayoutProps) => {
    return (
        <div>{children}</div>
    )
}

export default ProductLayout