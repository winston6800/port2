import React from 'react';

export const NextJSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg" 
        {...props}
    >
        <circle cx="64" cy="64" r="64" fill="black"></circle>
        <path d="M101.5 31.5H89.5L50.5 87.5H62.5L101.5 31.5Z" fill="white"></path>
        <path d="M80 31.5H68V96.5H80V31.5Z" fill="white"></path>
    </svg>
);
