import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProductComponent = () => {
    const [productName,setProductName]=useState("")
    const [productPrice,setProductPrice]=useState("")
    const [productQuantity,setProductQuantity]=useState("")
    const [productCategory, setProductCategory] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productMaterial, setProductMaterial] = useState('');
    const [productMeasurement, setProductMeasurement] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [image,setImage]=useState()
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
       
        const formData= new FormData()
        formData.append("productName", productName);
        formData.append("productPrice", productPrice);
        formData.append("productQuantity", productQuantity);
        formData.append("productCategory", productCategory);
        formData.append("productBrand", productBrand);
        formData.append("productMaterial", productMaterial);
        formData.append("productMeasurement", productMeasurement);
        formData.append("productDescription", productDescription);
        formData.append("image", image);
        try {
            await axios.post(
            "https://maccess001.onrender.com/product",
            formData,
            { headers: {"Content-Type":"multipart/form-data"}});
            setTimeout(function() {
                navigate("/");
              }, 3000);
            
            }catch (err) {
            console.error(err);
        }
    }


  return (
    <div className=''>

        <div className='row w-100 mx-auto py-5'>
            <div className='col-sm-12 col-md-4 col-lg-4 p-5'>
                <img className='img-fluid' alt='' src='https://images.unsplash.com/photo-1527239441953-caffd968d952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWRkfGVufDB8fDB8fHww'/>
            </div>
            <div className='col-sm-12 col-md-8 col-lg-8 p-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label className=" form-group me-5" htmlFor="productCategory">Choose Product Cateogry</label>
                    <select id="productCategory" className="" value={productCategory}  onChange={(e) => setProductCategory(e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="watch">Watch</option>
                        <option value="sunglass">Sunglass</option>
                        <option value="wallet">Wallet</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Name </label>
                    <input type="text" className="form-control" id="productName" name='productName' placeholder="Enter Product Name" 
                    value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Price</label>
                    <input type="number" className="form-control" id="productPrice" placeholder="Enter Price"
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
                    <label htmlFor="productBrand">Brand </label>
                    <input type="text" className="form-control" id="productBrand" name='productBrand' placeholder="Enter Brand Name" 
                    value={productBrand} onChange={(e)=>setProductBrand(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="productMaterial">Material </label>
                    <input type="text" className="form-control" id="productMaterial" name='productMaterial' placeholder="Materials Name" 
                    value={productMaterial} onChange={(e)=>setProductMaterial(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="productMeasurement">Measurement </label>
                    <input type="text" className="form-control" id="productMeasurement" name='productMeasurement' placeholder="Enter Measurement" 
                    value={productMeasurement} onChange={(e)=>setProductMeasurement(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Description </label>
                    <textarea type="text" rows = "5" className="form-control" id="productDescription" name='productDescription' placeholder="Product Description" 
                    value={productDescription} onChange={(e)=>setProductDescription(e.target.value)}/>
                </div>
                
                <div className="form-group mt-3">
                    <label htmlFor="productImage">Product Image : </label>
                    <input type="file" className="form-control-file mx-3" id="productImage"
                    onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>

                <button type="submit" className="my-2 btn btn-dark">Submit</button>
            </form>
            </div>
        </div>

    </div>
  )
}

export default AddProductComponent