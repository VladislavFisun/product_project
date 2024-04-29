import React from 'react';
import { render, screen } from '@testing-library/react';

import { Typography } from './Typography'; // Assuming Typography component is in Typography.tsx

describe('Typography component', () => {
    it('should render children text with default styles', () => {
        render(<Typography>Default text</Typography>);

        const textElement = screen.getByText('Default text');
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveClass('base'); // Check for default type class
    });

    it('should apply size class based on size prop', () => {
        render(<Typography size="l">Large text</Typography>);

        const textElement = screen.getByText('Large text');
        expect(textElement).toHaveClass('l');
    });

    it('should apply type class based on type prop', () => {
        render(<Typography type="title">Title text</Typography>);

        const textElement = screen.getByText('Title text');
        expect(textElement).toHaveClass('title');
    });

    it('should apply custom color style', () => {
        render(<Typography fontColor="red">Red text</Typography>);

        const textElement = screen.getByText('Red text');
        expect(textElement).toHaveStyle({ color: 'red' });
    });

    it('should apply additional classNames', () => {
        render(<Typography className="custom-class">Custom class text</Typography>);

        const textElement = screen.getByText('Custom class text');
        expect(textElement).toHaveClass('custom-class');
    });
});
