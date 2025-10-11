import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-5'>
                    <h3 className='mb-5'>Trust with confidence</h3>

                    <h4 className='mb-3'>Customer-first always</h4>
                    <p className='mb-5 text-muted' style={{fontSize:"1.05rem"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4 className='mb-3'>No spam or gimmicks</h4>
                    <p className='mb-5 text-muted' style={{fontSize:"1.05rem"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='#' style={{textDecoration:"none"}}>Our philosophies.</a></p>

                    <h4 className='mb-3'>The Zerodha universe</h4>
                    <p className='mb-5 text-muted' style={{fontSize:"1.05rem"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4 className='mb-3'>Do better with money</h4>
                    <p className='mb-5 text-muted' style={{fontSize:"1.05rem"}}>With initiatives like <a href='#' style={{textDecoration:"none"}}>Nudge.</a> and <a href='#' style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7'>
                    <img src='media-images/ecosystem.png' style={{width:"90%"}}></img>
                    <div className='text-center'>
                        <div className='' style={{fontSize:"1.15rem"}}><a href='#' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a> &nbsp;&nbsp;&nbsp;&nbsp; <a href='#' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                </div>
            </div>
            <div className='container text-center'>
                <img src='media-images/pressLogos.png'></img>
            </div>
        </div>
     );
}

export default Stats;