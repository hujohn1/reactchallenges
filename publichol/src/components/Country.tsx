import React from 'react';
import ReactDOM from 'react-dom/client';

interface Country{
    isoCode: string; 
    name: {language: string, text: string} [];
}

export default Country;