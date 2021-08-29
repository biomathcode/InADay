import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 50px;
background-color: rgba(0, 0, 0, 0);
/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
`;

function Navbar() {
    return (
        <div>
            <Nav >
                <h3>
                    Commit
                </h3>
                <ul>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link to="/dnd">dnd</Link>
                    </li>
                </ul>
            </Nav>
        </div>

    )
}

export default Navbar;