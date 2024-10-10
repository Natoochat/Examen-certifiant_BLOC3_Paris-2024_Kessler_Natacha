import React, { useState, useEffect } from 'react';

function UserStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Vérifier l'état de connexion au chargement de la page
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div>
            {isLoggedIn ? (
                <i className="fas fa-user"></i> // Icône utilisateur connecté
            ) : (
                <i className="fas fa-user-times"></i> // Icône utilisateur déconnecté
            )}
        </div>
    );
}

export default UserStatus;