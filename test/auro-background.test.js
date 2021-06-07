import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-background.js';

describe('auro-background', () => {
  it('set all the properties and attributes', async () => {
    const el = await fixture(html`
      <auro-background height="10px" heightsm="11px" heightmd="12px" heightlg="13px" background="red" backgroundsm="blue" backgroundmd="purple" backgroundlg="magenta"></auro-background>
    `);

    expect(true).to.be.true;
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
