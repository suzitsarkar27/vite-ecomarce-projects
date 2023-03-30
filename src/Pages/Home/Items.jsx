import React from 'react';
import '../../App'
const Items = ({item}) => {
    const {name,img,price,category}=item;
    return (
        <div className=''>
             <h2 className='color bg-red-600'>Name:{name}</h2>
             <h4>Price:{price}</h4>
             <img src={img} alt="" />
        </div>
    );
};

export default Items;