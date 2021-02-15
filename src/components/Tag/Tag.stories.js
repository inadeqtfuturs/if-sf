import React from 'react';
import { Tag } from '@components';

export default {
  title: 'components/tag',
  component: Tag
};

const Template = args => (
  <>
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '4px' }}>
      <Tag {...args} />
      <Tag {...args}>Test</Tag>
      <Tag {...args}>Another Test</Tag>
      <Tag {...args}>fonts</Tag>
    </div>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'children'
};
