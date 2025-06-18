// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.container}>
                <h2 style={styles.logo}>Sai Srinivasa Grocery</h2>
                <ul style={styles.navLinks}>
                    {!user ? (
                        <>
                            <li><Link to="/signup" style={styles.link}>Sign Up</Link></li>
                            <li><Link to="/login" style={styles.link}>Login</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/" style={styles.link}>Home</Link></li>
                            <li>
                                <button onClick={handleLogout} style={styles.logoutBtn}>
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 0',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
    },
    logo: {
        margin: '0',
        fontSize: '24px',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
        margin: '0',
        padding: '0',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500'
    },
    logoutBtn: {
        backgroundColor: '#ff4d4d',
        border: 'none',
        color: 'white',
        padding: '6px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
    }
};

export default Navbar;