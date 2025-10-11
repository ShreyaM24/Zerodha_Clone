import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-2'></div>
                <div className='col-4 p-5'>
                    <img src='media-images/nithinKamath.jpg' className='ceo py-5'></img>
                    <p className='fs-5 mt-3 text-center text-muted'>Nithin Kamath</p>
                    <p className='fs-6 mt-3 text-center text-muted'>Founder, CEO</p>
                </div>
                <div className='col-5 p-5'>
                    <h3 className='mb-5 text-muted px-3'>People</h3>
                    <p className='py-5'>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.<br/><br/>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/><br/>Playing basketball is his zen.<br/><br/>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage</a> / <a href="#" style={{textDecoration:"none"}}> TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default Team;