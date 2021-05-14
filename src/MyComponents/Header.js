import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";


export default function Header(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">{props.title}</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps={
    title: "Your Title Here"
}

Header.propTypes ={
    title: PropTypes.string
}