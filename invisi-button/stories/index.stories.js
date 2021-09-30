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
  title = 'Join now for free',
  disabled = false,
  textColor,
  slot,
}) {
  return html`
    <invisi-button
      style="--invisi-button-text-color: ${textColor || 'white'}"
      .title=${title}
      ?disabled="${disabled}"
    >
      ${slot}
    </invisi-button>
  `;
}

export const Regular = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'My title',
};

export const darkTheme = Template.bind({});
darkTheme.args = {
  title: 'Join now for free',
};
darkTheme.argTypes = {
  slot: { table: { disable: true } },
};
