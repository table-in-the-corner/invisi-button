import { LitElement, html, css } from 'lit';
// import { remoteLinkBehavior } from "@lrnwebcomponents/utils/lib/remoteLinkBehavior.js";
// import { activeStateBehavior } from "@lrnwebcomponents/utils/lib/activeStateBehavior.js";
// import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class InvisiButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display inline-block;
        --invisi-button-color: var(
          --simple-colors-default-theme-accent-1,
          white
          );
          --invisi-button-outline: var(
            --simple-colors-default-theme-accent-12,
            black
          );
          --invisi-button-bg-color-is-user-selected: var(
            --simple-colors-default-theme-accent-10,
            pink
          );
          --invisi-button-bg-color: var(
            --simple-colors-default-theme-accent-7,
            black
          );
          margin: 60px 0 0;
        }
        :hover
        {
          background-color: transparent;
          color: black;
          border: 2px solid var(--invisi-button-outline);

        }
        :focus
        {
          background-color: transparent;
          color: black;
          border: 2px solid var(--invisi-button-outline);
          outline: transparent;
        }

        :host([hidden]) {
          display: none;
        }
        :host([contenteditable]) a {
          pointer-events: none;
        }
        :host([is-user-selected]) a {
          background-color: var(--invisi-button-bg-color-is-user-selected);
          outline: 1px solid var(--invisi-button-outline);
        }
        a {
          display: block;
          color: var(--invisi-button-color);
          background-color: var(--invisi-button-bg-color);
          transition: background 0.3s linear, border 0.3s linear,
            border-radius 0.3s linear, box-shadow 0.3s linear;
          text-decoration: none;
          font-size: 1em;
          border: 2px solid #000;
          border-radius: 5px;
          box-shadow: 0 6px 26px 0 rgba(0, 0, 0, 0.16);
          padding: 16px 40px;
          flex-grow: 0;
          flex-shrink 0;
          
          font-family: Sans-serif;
          font-weight: 500;
          width: 130px;
        }
        a span {
          display: flex;
          justify-content: center;
        }
        a :hover{
          border: transparent;
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
    this.title = null;
    this.accentColor = 'green';
    if (this.querySelector('a')) {
      this.link = this.querySelector('a').getAttribute('href');
      this.title = this.querySelector('a').innerText;
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

  render() {
    return html` <a
      href="${this.link}"
      role="button"
      part="invisi-button-link"
      @click=${this._clickCard}
      ?contenteditable="${this.editMode}"
    >
      <span><span id="title">${this.title}</span><slot></slot></span>
    </a>`;
  }
}
