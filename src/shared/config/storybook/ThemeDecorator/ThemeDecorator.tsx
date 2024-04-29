import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.body.className = '';
    document.body.classList.add(theme);
    return (
        <div className="app" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <StoryComponent />
        </div>
    );
};
