import React from 'react';
import AppText from './AppText';

function ErrorMsg({error, touched}) {
    if(!touched || !error) return null;
    return (
        <AppText style={{color: 'red', marginBottom: 15}}>{error}</AppText>
    );
}

export default ErrorMsg;