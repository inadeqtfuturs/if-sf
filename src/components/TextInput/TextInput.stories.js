import React from 'react';
import { Button, TextInput } from '@components';

export default {
  title: 'components/text input',
  component: TextInput
};

const Template = args => (
  <>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput {...args} />
    </div>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'placeholder'
};

const WithButtonTemplate = args => (
  <>
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '8px' }}>
      <TextInput {...args} />
      <Button>Submit</Button>
    </div>
  </>
);

export const WithButton = WithButtonTemplate.bind({});
WithButton.args = {
  placeholder: 'placeholder'
};
