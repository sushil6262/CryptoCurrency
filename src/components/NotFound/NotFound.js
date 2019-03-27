import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 style={{textAlign:"center"}}>Oops! Page Not Found</h1>
            <Link to='/'>
                <p style={{textAlign:"center"}}>Go Back to Home</p>
            </Link>
        </div>
    );
};

export default NotFound;