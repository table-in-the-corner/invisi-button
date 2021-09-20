import { LitElement, html, css } from 'lit';
// import { remoteLinkBehavior } from "@lrnwebcomponents/utils/lib/remoteLinkBehavior.js";
// import { activeStateBehavior } from "@lrnwebcomponents/utils/lib/activeStateBehavior.js";
// import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class InvisiButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 25px;
        color: var(--invisi-button-text-color, #000);
        --invisibuttonBackgroundColor: #000;
        --invisibuttonTextColor: #ffffff;
        --invisibuttonFont: 'Inter', sans-serif;
        --disabledBackground: rgba(0, 0, 0, 0.4);
        --buttonActive: #ffdada;
      }

      @media (prefers-color-scheme: light) {
        --invisibuttonBackgroundColor: blue;
      }

      @media (prefers-color-scheme: dark) {
        --invisibuttonBackgroundColor: red;
      }

      button {
        display: inline-block;
        text-align: center;
        color: var(--invisibuttonTextColor);
        background-color: var(--invisibuttonBackgroundColor);
        padding: 0.5rem 2rem;
        border: 2px solid var(--invisibuttonBackgroundColor);
        border-radius: 5px;
        whitespace: nowrap;
        font-family: var(--invisibuttonFont);
        text-decoration: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
      }

      button:hover {
        color: var(--invisibuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
        cursor: pointer;
      }

      button:focus {
        color: var(--invisibuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
      }

      button:disabled {
        color: var(--invisibuttonTextColor);
        background-color: var(--disabledBackground);
        cursor: not-allowed;
      }

      button:active {
        background-color: var(--buttonActive);
      }

      a {
        font-family: var(--invisibuttonFont);
        color: var(--invisibuttonTextColor);
        text-decoration: none;
      }

      a:hover {
        color: var(--invisibuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
      }

      a:focus {
        color: var(--invisibuttonBackgroundColor);
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
    this.title = '2134352';
    this.buttonState = false;
    this.accentColor = 'green';
    if (this.querySelector('a')) {
      this.link = this.querySelector('a').getAttribute('href');
      this.title = this.querySelector('button').value;
      this.innerHTML = null;
    }
  }

  _clickCard(e) {
    if (this.editMode) {
      // do not do default
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  // Toggles the disabled state of button if checkbox is checked
  __toggleDisabled() {
    if (this.buttonState === false) {
      this.buttonState = true;
    } else {
      this.buttonState = false;
    }
  }

  render() {
    return html`
      <a
        tabindex="-1"
        href="${this.link}"
        target="_blank"
        rel="noopener"
        role="button"
        part="invisi-button-link"
        @click=${this._clickCard}
        ?contenteditable="${this.editMode}"
      >
        <button .disabled="${this.buttonState}">${this.title}</button>
      </a>
      <br />
      <label for="disableCheck">Check to disable button</label>
      <input
        id="disableCheck"
        type="checkbox"
        name="disableCheck"
        @click=${this.__toggleDisabled}
      />
    `;
  }
}
