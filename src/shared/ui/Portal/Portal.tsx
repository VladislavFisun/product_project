import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children:React.ReactNode,
    node?:HTMLElement
}
const root = document.querySelector('body');
const Portal = ({ children, node = root }: PortalProps) => {
    if (!node) {
        return null;
    }
    return createPortal(children, node);
};

export default Portal;
