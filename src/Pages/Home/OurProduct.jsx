import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';

const OurProduct = () => {

    const [products,setProducts] = useState()

    useEffect(()=>{
        fetch('https://assinment-server-alpha.vercel.app/product')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
setProducts(data)
        })
    },[])

    return (
       <div className='my-24'>
<h1 className='text-3xl font-bold text-center my-24'>Our Exclusive Product</h1>

         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products?.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
       </div>
    );
};

export default OurProduct;