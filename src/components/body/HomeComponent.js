import React from 'react'
import '../../css/homeComponent.css'

const HomeComponent = () => {
  return (
    <div className='container' style={{backgroundColor:'white'}}>
       <div id='bannerDiv' className='row'>
            <section className= ' container col-sm-12 col-md-6 align-self-center'>
                <p className=' h2 text-white'>Quality you can feel.</p>
                <p className=' h1 text-white'> Confidence you can see.</p>
                <section>
                    <button className='rounded btn btn-large btn-secondary my-4 mx-2 p-2' > <a  href='#productbanner' className='text-decoration-none text-white' >Browse Your Style</a> </button>
                    <button className='rounded btn btn-large btn-secondary my-4 mx-2 p-2'><a  href='/signin' className='text-decoration-none text-white' >Login To Buy</a> </button>
                </section>
            </section>
        </div>
        <section id='walletbanner' className='container row flex-row-reverse mx-auto'>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <img id='walletimage' alt='' className='w-100 p-5' src='https://img.freepik.com/free-vector/purse_1284-658.jpg?size=626&ext=jpg&ga=GA1.1.1972510684.1704642095&semt=sph' />
            </div>

            <div className='col-sm-12 col-md-12 col-lg-6 align-self-center'>
                <p className=' display-6 text-secondary'>More than just a wallet </p>
                <p className=' h3  text-secondary'>It's a statement. </p>
                <button className='rounded btn btn-large btn-dark my-2 p-2'>Get Your Wallet</button>
            </div>
        </section>

        <section id='watchbanner' className='container row mx-auto'>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <img id='watchimage' alt='' className='w-100 p-5' src='https://cdn.pixabay.com/photo/2017/04/23/20/36/wrist-2254969_640.jpg' />
            </div>

            <div className='col-sm-12 col-md-12 col-lg-6 align-self-center'> 
                <p className=' display-6 text-secondary' style={{fontVariant: "small-caps"}}>Where Seconds Count, Style Never Fades.</p>
                <button className='rounded btn btn-large btn-dark my-2 p-2'>Watch More</button>
            </div>
        </section> 
            
        <section id='productbanner' className='container row mx-auto justify-content-center'>
        <p className='lead text-start ms-5'>Our Products</p>
            <div id='walletCard' className='card col-sm-12 col-md-6 col-lg-3 border-0 m-3'>
            <a href='/watch' style={{textDecoration:'none'}}>
                <div  className="text-muted " >
                    <p className='h3 text-secondary' style={{fontFamily: " Copperplate, fantasy"}}>WALLET</p>
                </div>
                </a>
            </div>

            <div id='watchCard' className=' card col-sm-12 col-md-6 col-lg-3 border-0 m-3'>
                <a href='/watch' style={{textDecoration:'none'}}>
                <div  className="text-muted">
                    <p className='h3 text-secondary' style={{fontFamily: " Copperplate, fantasy"}}>WATCH</p>
                </div>
                </a>
            </div>

            <div id='sunglassCard' className='card col-sm-12 col-md-6 col-lg-3 border-0 m-3'>
            <a href='/watch' style={{textDecoration:'none'}}>
                <div   className=" text-muted">
                    <p className='h3 text-secondary ' style={{fontFamily: "Copperplate, fantasy"}}>SUNGLASS</p>
                </div>
                </a>
            </div>

        </section>
        
        <section id='sunglassbanner' className='container row mx-auto justify-content-center p-5'>
            <div id='abouthomepageimage' className='col-sm-12 col-md-12 col-lg-6 '>
                <img  className='w-75 p-5' alt='' src='https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2glMjB3YWxsZXQlMjBzaG9wfGVufDB8MXwwfHx8MA%3D%3D' />
            </div>

            <div id='abouthomepagecontent' className='col-sm-12 col-md-12 col-lg-6 '>
                <div className='align-self-center m-5 p-5'>
                    <p className='h2 text-start' style={{fontVariant: "small-caps"}}>At MACCESS,</p>
                    <p className='h3 text-start' style={{fontVariant: "small-caps"}}> We believe your everyday essentials deserve to be more than just functional. We're not just selling watches, wallets, and sunglasses; we're retailing the tools that elevate your style, fuel your confidence, and empower you to seize every moment.</p>
                    <button className='rounded btn btn-large btn-secondary my-2 p-2'>Click to learn more about us</button>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default HomeComponent