import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-10'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' className='mb-5' />
                <h1 className='mt-5'>Open Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"17%", margin: "0 auto"}}>Signup for free Now</button>
            </div>
        </div>
     );
}

export default OpenAccount;