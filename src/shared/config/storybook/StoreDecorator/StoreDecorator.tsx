import { Story } from '@storybook/react';
import StoreProvider from 'app/providers/StoreProvider/ui/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Suspense } from 'react';

export const StoreDecorator = (state:StateSchema) => (StoryComponent: Story) => (
// @ts-ignore
    <Suspense fallback={null}>
        <StoreProvider initialState={state}><StoryComponent /></StoreProvider>
    </Suspense>
);
