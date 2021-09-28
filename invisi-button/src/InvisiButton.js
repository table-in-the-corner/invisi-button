import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
// import { remoteLinkBehavior } from "@lrnwebcomponents/utils/lib/remoteLinkBehavior.js";
// import { activeStateBehavior } from "@lrnwebcomponents/utils/lib/activeStateBehavior.js";
// import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class InvisiButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 25px;
        --invisi-button-background-color: #000;
        --invisi-button-text-color: #ffffff;
        --invisi-button-font: 'Inter', sans-serif;
        --invisi-button-disabled-background-color: rgba(0, 0, 0, 0.4);
        --invisi-button-active-background-color: #ffdada;
      }

      :host([dark]) {
        --invisi-button-background-color: white;
        --invisi-button-text-color: black;
      }

      :host([dark]) :active {
        --invisi-button-active-background-color: #c4acac;
      }

      /* @media (prefers-color-scheme: light) {
        --invisibuttonBackgroundColor: blue;
      }

      @media (prefers-color-scheme: dark) {
        --invisibuttonBackgroundColor: red;
      } */

      button {
        display: inline-block;
        text-align: center;
        color: var(--invisi-button-text-color);
        background-color: var(--invisi-button-background-color);
        padding: 0.5rem 2rem;
        border: 2px solid var(--invisi-button-background-color);
        border-radius: 5px;
        font-family: var(--invisi-button-font);
        text-decoration: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
      }

      button:hover {
        color: var(--invisi-button-background-color);
        background-color: transparent;
        border-color: var(--invisi-button-background-color);
        text-decoration: none;
        cursor: pointer;
      }

      button:hover #caret-icon {
        transform: rotate(-90deg);
        transition: all 0.2s ease;
      }
      /* Icon rotation transition resource I used: https://stackoverflow.com/questions/46404894/how-do-i-rotate-an-icon-with-css-on-hover/46405059 */

      /* [dark]:hover {
        color: #000;
      } */

      button:focus {
        color: var(--invisi-button-background-color);
        background-color: transparent;
        text-decoration: none;
      }

      button:disabled {
        color: var(--invisi-button-text-color);
        background-color: var(--invisi-button-disabled-background-color);
        cursor: not-allowed;
      }

      button:active {
        background-color: var(--invisi-button-active-background-color);
      }

      a {
        font-family: var(--invisi-button-font);
        color: var(--invisi-button-text-color);
        text-decoration: none;
      }

      a:hover {
        color: var(--invisi-button-background-color);
        background-color: transparent;
        text-decoration: none;
      }

      a:focus {
        color: var(--invisi-button-background-color);
        background-color: transparent;
        text-decoration: none;
      }
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      link: {
        type: String,
      },
      title: {
        type: String,
      },
      editMode: {
        type: Boolean,
      },
      buttonState: { type: Boolean },
      icon: { type: String },
      disabled: { type: Boolean, reflect: true },
      dark: { type: Boolean, reflect: true },
    };
  }

  /**
   * Convention we use
   */
  static get tag() {
    return 'invisi-button';
  }

  constructor() {
    super();
    this.link = 'https://teuxdeux.com/signup';
    this.title = 'Join now for free';
    this.buttonState = false;
    this.accentColor = 'green';
    this.icon = 'hardware:keyboard-arrow-down';
    this.dark = false;
    this.addEventListener('pointerenter', this._handlePointer);
  }

  _clickCard(e) {
    if (this.editMode) {
      // do not do default
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  render() {
    return html`
      <a
        tabindex="-1"
        href="${this.link}"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        part="invisi-button-link"
        @click=${this._clickCard}
        ?contenteditable="${this.editMode}"
      >
        <button .disabled="${this.disabled}" id="button-id">
          ${this.title}
          ${!this.disabled
            ? html`<simple-icon-lite
                icon="${this.icon}"
                id="caret-icon"
              ></simple-icon-lite>`
            : html``}
        </button>
      </a>
      <br />
    `;
  }
}
