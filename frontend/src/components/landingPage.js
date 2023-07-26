// components/landingPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Check if the user is already connected to a wallet
        if (window.ethereum && window.ethereum.selectedAddress) {
        setIsConnected(true);
        }
    }, []);

    // Function to connect the user's wallet
    const connectWallet = async () => {
        try {
        // Request user to connect their wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        } catch (error) {
        console.error('Error connecting wallet:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Monopoly</h1>
        {isConnected ? (
            <Link to="/lobby">
            <button className="py-4 px-8 bg-green-500 text-white rounded-lg font-bold">
                Play
            </button>
            </Link>
        ) : (
            <button className="py-4 px-8 bg-blue-500 text-white rounded-lg font-bold" onClick={connectWallet}>
            Connect
            </button>
        )}
        </div>
    );
};

export default LandingPage;
