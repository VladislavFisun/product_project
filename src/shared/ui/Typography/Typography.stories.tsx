import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from 'shared/ui/Typography/Typography';

export default {
    title: 'shared/Typography',
    component: Typography,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: { control: 'check' },
    },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
    type: 'default',
};

export const Title = Template.bind({});
Title.args = {
    children: 'Title',
    type: 'title',
};
