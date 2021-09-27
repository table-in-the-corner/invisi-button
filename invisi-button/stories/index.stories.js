import { html } from 'lit';
import '../invisi-button.js';

export default {
  title: 'InvisiButton',
  component: 'invisi-button',
  argTypes: {
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    textColor: { control: 'color' },
  },
};

function Template({
  title = 'Hello world',
  disabled = false,
  textColor,
  slot,
}) {
  return html`
    <invisi-button
      style="--invisi-button-text-color: ${textColor || 'white'}"
      .title=${title}
      .disabled=${disabled}
    >
      ${slot}
    </invisi-button>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
