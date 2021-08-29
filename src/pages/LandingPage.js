import React from 'react';
import { Link } from 'react-router-dom';


function LandingPage() {
    return (
        <div>
            <div className="container mx:auto">
            <h1>LandingPage</h1>
            <Link to="/home"> Home</Link>
            {/* auth0 */}
            <Link to="/signin">signin</Link>
            <Link to="/todo">todo</Link>
            </div>
            
        </div>
    )
}


export default LandingPage;