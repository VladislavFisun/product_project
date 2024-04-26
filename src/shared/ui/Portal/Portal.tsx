import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children:React.ReactNode,
    node?:HTMLElement
}

const Portal = ({ children, node = document.body }: PortalProps) => {
    if (!node) {
        return null;
    }
    return createPortal(children, node);
};

export default Portal;
