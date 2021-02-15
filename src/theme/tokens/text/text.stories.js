import React from 'react';

export default {
  title: 'tokens/text'
};

const Template = () => (
  <>
    <p>This is a paragraph tag</p>
    <p>This is more text</p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <ul>
        <li>Subitem 1</li>
        <li>Subitem 2</li>
        <li>Subitem 3</li>
      </ul>
      <li>Item 3</li>
    </ul>

    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>

    <blockquote>
      This is a blockquote. It might have more text than we're used to seeing.
      Make it long. Make it last. Make it cruel, just make me laugh.
    </blockquote>

    <small>This is smol text</small>
  </>
);

export const Text = Template.bind({});
Text.args = {
  text: null
};
