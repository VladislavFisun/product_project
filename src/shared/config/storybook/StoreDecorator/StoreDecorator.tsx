import { Story } from '@storybook/react';
import StoreProvider from 'app/providers/StoreProvider/ui/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const StoreDecorator = (state:StateSchema) => (StoryComponent: Story) => (
// @ts-ignore
    <StoreProvider initialState={state}><StoryComponent /></StoreProvider>
);
