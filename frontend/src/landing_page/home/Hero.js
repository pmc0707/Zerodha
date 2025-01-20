import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-10'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' className='mb-5' alt="Hero Image" />
                <h1 className='mt-5'>Invest in everthing</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"17%", margin: "0 auto"}}>Signup for free Now</button>
            </div>
        </div>
     );
}

export default Hero;