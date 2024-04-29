import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';
import i18n from 'shared/config/i18n/i18n';

export const TranslationDecorator = (StoryComponent: Story) => (
// @ts-ignore
    <Suspense fallback={null}>
        {' '}
        <I18nextProvider i18n={i18n}><StoryComponent /></I18nextProvider>
    </Suspense>
);
