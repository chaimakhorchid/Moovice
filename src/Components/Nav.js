import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Nav extends Component {
    render() {
        return (
                <ul className="nav">
                    <li className="nav-item">
                        <Link className='nav-link active' to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to="/weekly">Weekly</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to="/weekly-battle">Weekly-battle</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to="/popular">Popular</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to="/popular-battle">Popular-battle</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to="/favorites">Favorites</Link>
                    </li>
                </ul>       
    )
    }
}
