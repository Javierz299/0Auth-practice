import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return(
        <div>
            <Link to="/" > 
            Streamy
            </Link>
            <div>
                <br/>
                <Link to="/" >
                All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header