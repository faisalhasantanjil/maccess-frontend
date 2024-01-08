import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import axios from 'axios'

const SunglassDetails = () => {
    const {id} = useParams()
    const [product, setProduct]= useState()
    const [isLoading, setIsLoading] = useState(1)

    useEffect(()=>{
        getproducts()
      },[]);
    
    const getproducts= async () =>{
        const result = await axios.get(`https://maccess001.onrender.com/sunglass/${id}`);
        setProduct(result.data.data);
        console.log(product);
        setIsLoading(0);
    };
    const details= (
        <ProductDetails product={product} />
    );
  return (
    <div className='container'>
       {details}
    </div>
  )
}

export default SunglassDetails
