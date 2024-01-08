import axios from 'axios'
import React, {   useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
    const {id} =useParams()
    const [productName,setProductName]=useState("")
    const [productID,setProductID]=useState("")
    const [productPrice,setProductPrice]=useState("")
    const [productQuantity,setProductQuantity]=useState("")
    const [image,setImage]=useState()
    const [isLoading, setIsLoading] = useState(1)
    const navigate = useNavigate();

    useEffect(()=>{
        getFormInfo();
      },[]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData= new FormData()
        formData.append("productName", productName);
        formData.append("productPrice", productPrice);
        formData.append("productQuantity", productQuantity);
        formData.append("image", image);
        
        const result = await axios.put(
            `https://maccess001.onrender.com/update-product/${productID}`,
            formData,
            {
                headers: {"Content-Type":"multipart/form-data"}
            }
            
        );
        setTimeout(function() {
            navigate(`/data/${productID}`);
          }, 3000);
    }
    /*
    <div className="form-group">
                <img src={require(`../../../server/productImage/${image}`)} alt='....image'  />
                </div>

                const incrementNum = useCallback(() => {
                    setNum(prev => prev + 1);
                  }, []);
    */

    const getFormInfo= async ()=>{
        const result = await axios.get(`http://localhost:3005/products/${id}`);
        setProductName(result.data.data.name)
        setProductPrice(result.data.data.price)
        setProductQuantity(result.data.data.quantity)
        setProductID(result.data.data._id)
        setIsLoading(0)
    };

    

  return (
    <div>
    {isLoading === 1
      ? ("Loading ...") : 
       (
        <div className='w-75 mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productName">Name </label>
                    <input type="text" className="form-control" id="productName" name='productName' placeholder="Enter Product Name" 
                    value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Price</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Price"
                    value={productPrice} onChange={(e)=> setProductPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="productQuantity">Quantity</label>
                <input type="number" className="form-control" id="productQuantity" placeholder="Enter Total quantity"
                value={productQuantity} onChange={(e)=> setProductQuantity(e.target.value)}
                />
            </div>
               
                <div className="form-group">
                    <label htmlFor="productImage">Product Image : </label>
                    <input type="file" className="form-control-file mx-3" id="productImage"
                    onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      )
      }
  </div>
  )
}

export default UpdateProduct

