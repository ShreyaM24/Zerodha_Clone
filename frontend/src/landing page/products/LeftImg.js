import React from 'react';

function LeftImg({ imageURL, productName, productDes, tryDemo, learMore, googlePlay, appStore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL}></img>
                </div>
                <div className='col-6 p-5'>
                    <h3 className='mb-5'>{productName}</h3>
                    <p className='fs-6 lh-md'>{productDes}</p>
                    <div className='my-3'>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learMore} style={{marginLeft:"100px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div>
                        <a href={googlePlay}><img src='media-images/googlePlayBadge.svg'></img></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src='media-images/appstoreBadge.svg'></img></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LeftImg;