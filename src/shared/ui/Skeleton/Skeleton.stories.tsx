import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Skeleton from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
export const Round = Template.bind({});
Round.args = {
    border: '50%',
};
