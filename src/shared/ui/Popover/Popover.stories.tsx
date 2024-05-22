import { Meta, Story } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        children: { control: 'text' },
    },
} as Meta;

const Template: Story = () => (
    <Popover>
        <Popover.Trigger><button>trigger</button></Popover.Trigger>
        <Popover.Content>
            <div>content</div>
        </Popover.Content>
    </Popover>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomContent = Template.bind({});
