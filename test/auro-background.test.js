import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-background.js';

describe('auro-background', () => {
  it('sets the CSS class on auro-background > div element', async () => {
    const el = await fixture(html`
      <auro-background cssclass="testClass"></auro-background>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-background is accessible', async () => {
    const el = await fixture(html`
      <auro-background cssclass="testClass"></auro-background>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-background custom element is defined', async () => {
    const el = await !!customElements.get("auro-background");

    await expect(el).to.be.true;
  });
});
