import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return ( 
        <div className='container p-5 text-center mb-5'>
            <div className='row'>
                <h1 className='mt-5 mb-4'>404 Not Found!</h1>
                <h3 className='mb-4 text-muted'>We couldn’t find the page you were looking for.</h3>
                <h3 className='mb-4 text-muted'>Visit <Link to="/" style={{textDecoration:"none"}}>Home page</Link></h3>
            </div>
        </div>
    )
}

export default NotFound;