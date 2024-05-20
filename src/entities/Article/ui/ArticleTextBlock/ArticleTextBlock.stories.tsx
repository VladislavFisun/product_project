import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleTextBlock from './ArticleTextBlock';

export default {
    title: 'shared/ArticleTextBlock',
    component: ArticleTextBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlock>;

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => <ArticleTextBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
