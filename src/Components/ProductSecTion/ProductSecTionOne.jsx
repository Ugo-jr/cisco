'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const ProductSectionOne = () => {

    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([])
    const [loader, setLorder] = useState(false)

    const fetchProducts = async () => {
        setLorder(true)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        setProducts(data)

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log('This is our Products', products);

    return (
        <div className='py-[12%]'>
            {loader === true
                ? <span class="loader"></span>
                :  
   
                <div>
                    {products.map((product) => (
                        <div>
                            <Image className='w-[30%]' unoptimized={true} src={product.image} width={0} height={0} />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>

            }



        </div>
    )
}

export default ProductSectionOne
