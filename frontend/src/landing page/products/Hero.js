import React from 'react';

function Hero() {
    return (
        <div className='container-about p-6 mt-5 text-muted'>
            <div className='header p-6 mt-5 text-center'>
                <h2 className='p-6 mt-5'>Zerodha Products</h2>
                <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href='#' style={{ textDecoration: "none" }}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;