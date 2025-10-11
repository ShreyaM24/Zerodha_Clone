import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 text-center mb-5'>
            <div className='row'>
                <img src='media-images/homeHero.png' alt='Hero img' className='mb-5'></img>
                <h2 className='mt-5 mb-2'>Invest in everything</h2>
                <p className='mb-5 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-2 fs-5' style={{width:"17%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;