import React from 'react';

function Education() {
    return ( 
        <div className='row' style={{padding:"0 7rem"}}>
            <div className='col-6 text-center'>
                <img src='media-images/education.svg' style={{width:"70%"}}></img>
            </div>
            <div className='col-6 mt-5'>
                <h2 className='mb-3'>Free and open market education</h2>
                <p className='mb-3 text-muted' style={{fontSize:"1.1rem"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='#' style={{textDecoration:"none", fontSize:"1.1rem"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                <p className='mb-3 mt-3 text-muted' style={{fontSize:"1.1rem"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='#' style={{textDecoration:"none", fontSize:"1.1rem"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
     );
}

export default Education;