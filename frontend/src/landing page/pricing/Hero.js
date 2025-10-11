import React from 'react';

function Hero() {
    return (
        <div className='pricing-container container mt-5' style={{ padding: "5rem 5rem 5rem 5rem" }}>
            <div style={{ padding: "100px 0 100px 0" }}>
                <h2 className='text-center'>Charges</h2>
                <p className='text-muted text-center fs-5'>List of all charges and taxes</p>
            </div>

            <div className='row mt-5'>
                <div className='col-4 text-center'>
                    <img src='media-images/pricingEquity.svg' style={{ width: "70%" }}></img>
                    <h2 className='mb-4'>Free equity delivery</h2>
                    <p className='text-muted' style={{ fontSize: "1rem" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col-4 text-center'>
                    <img src='media-images/intradayTrades.svg' style={{ width: "70%" }}></img>
                    <h2 className='mb-4'>Intraday and F&O trades</h2>
                    <p className='text-muted' style={{ fontSize: "1rem" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className='col-4 text-center'>
                    <img src='media-images/pricingEquity.svg' style={{ width: "70%" }}></img>
                    <h2 className='mb-4'>Free direct MF</h2>
                    <p className='text-muted' style={{ fontSize: "1rem" }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;