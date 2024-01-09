import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const WalletComponent = () => {
    const [wallets, setWallets] =useState(null);
    const [isLoading, setIsLoading]= useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        getWallets()
    },[wallets])

    const getWallets= async()=>{
        const result = await axios.get('https://maccess001.onrender.com/wallet');
        setWallets(result.data.data)
        setIsLoading(0)
    }

    const handleSearch = (event) => {
        setWallets(wallets.filter(product => 
           product.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      };
    
  return (
    <div className='container'>
        <section className='pt-3'>
        <input className='px-3 mx-2 mb-1' size={'25'} type="text" placeholder="Search products..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
        <button className='px-3 mx-2 btn btn-dark' onClick={handleSearch}>Search</button>
        <button className='px-3 mx-2 btn btn-danger' onClick={()=> window.location.reload(false)}>clear search</button>
        </section>

        {isLoading ===1 ?
        "wait a moment.." :
        <div className='row d-flex justify-content-center'>
            {
                wallets.map((product)=>(
                    <div className= "card col-sm-12 col-md-6 col-lg-4 m-3 border-top-0 border-end-0" key={product._id} style={{boxShadow:"5px 5px #edebeb"}}>
                        <img src={`https://maccess001.onrender.com/images/${product.image}`}  className="card-img-top img-fluid w-50 mx-auto p-1" alt="..." style={{height:'180px'}}></img>
                        <div className="card-body text-start">
                        <p className="card-subtitle mb-0 text-muted"> {product.brand}</p>
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: {product.price}/=</h6>
                        <button className='btn btn-secondary'><Link to={`/wallet/${product._id}`} style={{textDecoration:"none", color:'whitesmoke'}} >See More</Link></button>
                        </div>
                    </div>
                ))
            }
        </div>
        }
    </div>
  )
}

export default WalletComponent