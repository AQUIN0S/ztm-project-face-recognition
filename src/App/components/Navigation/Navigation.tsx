import React from 'react';
import './Navigation.css';

interface NavigationProps {
    isSignedIn: boolean;
    onRouteChange: Function;
}

const Navigation = ({ isSignedIn, onRouteChange }: NavigationProps) => {
    return isSignedIn ? (
        <nav>
            <span onClick={() => {onRouteChange('signin')}} >Sign Out</span>
        </nav>
    ) : (
        <nav>
            <span onClick={() => {onRouteChange('signin')}} >Sign In</span>
            <span onClick={() => {onRouteChange('register')}} >Register</span>
        </nav>
    );
}

export default Navigation;