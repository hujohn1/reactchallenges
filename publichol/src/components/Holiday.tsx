import React from 'react';
import ReactDOM from 'react-dom/client';

interface Holiday{
    id: string, 
    startDate: string;
    endDate: string;
    type: string;
    name: {language: string, text: string} [];
}

export default Holiday;