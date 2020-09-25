import React from 'react';

const Header = ({ pseudo }) => {
    //test pour la 1ere lettre si voyelle
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? 
    `d'${pseudo}` : `de ${pseudo}`

    return (
        <header>
            <h1>La boîte {formatPseudo(pseudo)}</h1>
        </header>
    );
};

export default Header;