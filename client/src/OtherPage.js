import React from 'react';
import {Link} from 'react-router-dom'

function OtherPage (){
    return(
        <div>
            I am some other page
            <Link to="/"> Go back to home</Link>
        </div>
    )
}

export default OtherPage