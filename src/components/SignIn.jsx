import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css';

export default function SignIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitForm() {
        const payload = {
            fullname: '',
            email,
            password
        }

        let url = 'users/sign';

        await fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                props.history.push('/');
            })
    }

    return (
        <div className='outer-container'>
            <div className='container'>
                <input
                    className="text-input"
                    type='email'
                    placeholder='Email Address'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="text-input"
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className='action-btn'
                    type='button'
                    value='Sign In'
                    onClick={submitForm}
                />
                <Link
                    className="second-action-btn"
                    to='/signup'
                    key='signup'
                >
                    Sign Up
            </Link>
            </div>
        </div>
    );
}