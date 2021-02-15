import React from 'react';
import { Button } from '@components';

export default {
  title: 'components/button',
  component: Button
};

const Template = args => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <Button {...args} size="sm" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <Button {...args} size="md" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <Button {...args} size="lg" />
    </div>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'children'
};
