import React, { useEffect, useState } from 'react';
import Items from './Items';

const Bannar = () => {
    const [product,setProduct]=useState([]);
    console.log(product)
    useEffect(()=>{
           fetch('product.json')
          .then((res)=>res.json())
          .then((data) => setProduct(data))
    },[]);
    return (
        <div>
            <h2 className=' font-bold caret-yellow-600'>This is bannar</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    product.map(item=><Items item={item}></Items>)
                }
            </div>
           
        </div>
    );
};

export default Bannar;