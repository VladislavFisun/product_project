import { Input } from 'shared/ui/Input/Input';
import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input component', () => {
    it('should render an input element with correct class', () => {
        render(<Input placeholder="Enter text" />);

        const inputElement = screen.getByPlaceholderText('Enter text');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('input'); // Check for the base class
    });

    it('should allow typing text into the input', () => {
        render(<Input />);

        const inputElement = screen.getByRole('textbox');
        userEvent.type(inputElement, 'Hello, world!');
        expect(inputElement).toHaveValue('Hello, world!');
    });

    it('should forward the ref to the input element', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(<Input ref={ref} />);

        const inputElement = screen.getByRole('textbox');
        expect(ref.current).toBe(inputElement);
    });
});
