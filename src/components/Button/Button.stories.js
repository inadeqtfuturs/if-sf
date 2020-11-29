import React from 'react';
import { Button } from '@components';

export default {
  title: 'sf/Button',
  component: Button
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'children'
};
