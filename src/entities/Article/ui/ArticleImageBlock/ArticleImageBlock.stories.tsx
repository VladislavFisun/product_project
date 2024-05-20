import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleImageBlock from './ArticleImageBlock';

export default {
    title: 'shared/ArticleImageBlock',
    component: ArticleImageBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlock>;

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <ArticleImageBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
