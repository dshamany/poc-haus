import React from 'react';
import LandingPage from '../components/LandingPage';

function SignOut(props){
    localStorage.removeItem('token');
    props.history.push('/');
    return (
        <LandingPage />
    )
}

export default SignOut;