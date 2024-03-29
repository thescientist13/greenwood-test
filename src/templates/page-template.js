import { html, LitElement } from 'lit-element';
MDIMPORT;

class PageTemplate extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <entry></entry>
      </div>
    `;
  }
}

customElements.define('page-template', PageTemplate);
