import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 text-center mb-5'>
            <div className='row'>
                <h3 className='mt-5 mb-4'>Open a Zerodha account</h3>
                <p className='mb-4 text-muted' style={{fontSize:"1.1rem"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary p-2 fs-5' style={{width:"17%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    )
}

export default OpenAccount;