import React from 'react';
function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p style={{fontSize:"1.05rem"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-8'>
                    <div className='pricing'>
                        <div className='pricingBox'>
                            <img src='media-images/pricing0.svg'></img>
                            <p className='text-muted'>Free account<br/>opening</p>
                        </div>

                        <div className='pricingBox equity'>
                            <img src='media-images/pricingEquity.svg'></img>
                            <p className='text-muted'>Free equity delivery<br/>and direct mutual funds</p>
                        </div>

                        <div className='pricingBox'>
                            <img src='media-images/intradayTrades.svg'></img>
                            <p className='text-muted'>Intraday and<br/>F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;