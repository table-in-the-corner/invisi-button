import { html } from 'lit';
import '../invisi-button.js';

export default {
  title: 'InvisiButton',
  component: 'invisi-button',
  argTypes: {
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    textColor: { control: 'color' },
    icon: { control: 'text' },
    dark: { control: 'boolean' },
  },
};

function Template({
  title = 'Join now for free',
  disabled = false,
  textColor,
  slot,
  icon = 'hardware:keyboard-arrow-down',
  dark = false,
}) {
  return html`
    <invisi-button
      style="--invisi-button-text-color: ${textColor || 'white'}"
      .title=${title}
      ?disabled="${disabled}"
      .icon="${icon}"
      .dark="${dark}"
    >
      ${slot}
    </invisi-button>
  `;
}
export const Regular = Template.bind({});
Regular.args = {
  title: 'Join now for free',
  disabled: false,
  textColor: 'white',
  icon: 'hardware:keyboard-arrow-down',
  dark: false,
};

export const Disabled = Template.bind({});
Disabled.args = { ...Regular.args, title: 'Disabled', disabled: true };
export const Dark = Template.bind({});
Dark.args = { ...Regular.args, title: 'Dark', dark: true, textColor: 'black' };
Dark.parameters = {
  backgrounds: { default: 'black', values: [{ name: 'black', value: '#000' }] },
};
