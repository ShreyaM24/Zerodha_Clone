import React from 'react';

function Universe() {
    return (
        <div className='container text-center mt-5 text-muted'>
            <h4 className='mt-5 mb-5'>Want to know more about our technology stack? Check out the <a href='#' style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.</h4>
            <h3 className='mb-3'>The Zerodha Universe</h3>
            <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='row p-5'>
                <div className='col-4'><img src='media-images/zerodhaFundhouse.png' style={{ width: "50%" }}></img><br/><p className='mt-3' style={{fontSize:"0.75rem"}}>Our asset management venture<br/>that is creating simple and transparent index<br/>funds to help you save for your goals.</p>
                </div>
                <div className='col-4'><img src='media-images/sensibullLogo.svg' style={{ width: "50%" }}></img><br/><p className='mt-3' style={{fontSize:"0.75rem"}}>Options trading platform that lets you<br/>create strategies, analyze positions, and examine<br/>data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4'><img src='https://zerodha.com/static/images/partners/tijori.svg' style={{ width: "50%" }}></img><br/><p className='mt-3' style={{fontSize:"0.75rem"}}>Investment research platform<br/>that offers detailed insights on stocks,<br/>sectors, supply chains, and more.</p>
                </div>
            </div>

            <div className='row p-5'>
                <div className='col-4'><img src='media-images/streakLogo.png' style={{ width: "50%" }}></img><br/><p className='mt-3' style={{fontSize:"0.75rem"}}>Systematic trading platform<br/>that allows you to create and backtest<br/>strategies without coding.</p>
                </div>
                <div className='col-4'><img src='media-images/smallcaseLogo.png' style={{ width: "50%" }}></img><br/><p className='mt-3' style={{fontSize:"0.75rem"}}>Thematic investing platform<br/>that helps you invest in diversified<br/>baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4'><img src='media-images/dittoLogo.png' style={{ width: "50%" }}></img><br/><p className='mt-3' style={{fontSize:"0.75rem"}}>Personalized advice on life<br/>and health insurance. No spam<br/>and no mis-selling.</p>
                </div>
            </div>
            <button className='btn btn-primary p-2 fs-5 mb-5' style={{width:"17%", margin:"0 auto"}}>Sign up for free</button>
        </div>
    );
}

export default Universe;