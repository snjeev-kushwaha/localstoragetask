import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Mainfile = (props) => {
    const { Component } = props
    const navigate = useNavigate()

    useEffect(() => {
        const login = localStorage.getItem('name');
        if (!login) {
            navigate('/')
        } else {
            console.log("error")
        }
    });

    return (
        <div><Component /></div>
    )
}

export default Mainfile