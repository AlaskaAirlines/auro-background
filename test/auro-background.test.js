import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-background.js';

describe('auro-background', () => {
  it('set all the properties and attributes', async () => {
    const el = await fixture(html`
      <auro-background minHeight="10px" minHeightsm="11px" minHeightmd="12px" minHeightlg="13px" background="red" backgroundsm="blue" backgroundmd="purple" backgroundlg="magenta"></auro-background>
    `),

      style = el.shadowRoot.querySelector('style');

    expect(style.innerText).contains(`10px`);
    expect(style.innerText).contains(`11px`);
    expect(style.innerText).contains(`12px`);
    expect(style.innerText).contains(`13px`);
    expect(style.innerText).contains(`blue`);
    expect(style.innerText).contains(`purple`);
    expect(style.innerText).contains(`magenta`);
    expect(style.innerText).contains(`red`);
  });

  it('auro-background is accessible', async () => {
    const el = await fixture(html`
      <auro-background></auro-background>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-background custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-background"));

    await expect(el).to.be.true;
  });
});
