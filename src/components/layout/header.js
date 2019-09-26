import React from 'react';
import {Link} from 'react-router-dom';
function header() {
    return (
        <div style={headerStyle}>
            <h1>ToDo List</h1>
            <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
        </div>
    )
}
const headerStyle = {
    background: '#ABC',
    color: '#222',
    textAlign: 'center',
    padding: '10px'
}
 export default header;
