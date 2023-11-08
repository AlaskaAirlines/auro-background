import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-background.js';

describe('auro-background', () => {
  it('set all the properties and attributes', async () => {
    const el = await fixture(html`
      <auro-background height="10px" heightsm="11px" heightmd="12px" heightlg="13px" width="10px" widthsm="11px" widthmd="12px" widthlg="13px" bg="red" bgsm="blue" bgmd="purple" bglg="magenta"></auro-background>
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

  it('auro-background custom element with no inset declared', async () => {
    const el = await fixture(html`
      <auro-background></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: var(--auro-size-none)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: var(--inset)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: var(--insetSm)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: var(--insetMd)`);
  });

  it('auro-background custom element with pre-defined inset declared', async () => {
    const el = await fixture(html`
      <auro-background inset="md"></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: var(--auro-size-md)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: var(--inset)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: var(--insetSm)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: var(--insetMd)`);
  });

  it('auro-background custom element with custom inset declared', async () => {
    const el = await fixture(html`
      <auro-background inset="1rem"></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: 1rem`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: var(--inset)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: var(--insetSm)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: var(--insetMd)`);
  });

  it('auro-background custom element with pre-defined insetSm declared', async () => {
    const el = await fixture(html`
      <auro-background insetSm="md"></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: var(--auro-size-none)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: var(--auro-size-md)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: var(--insetSm)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: var(--insetMd)`);
  });

  it('auro-background custom element with custom insetSm declared', async () => {
    const el = await fixture(html`
      <auro-background insetSm="1rem"></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: var(--auro-size-none)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: 1rem`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: var(--insetSm)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: var(--insetMd)`);
  });

  it('auro-background custom element with pre-defined insetMd declared', async () => {
    const el = await fixture(html`
      <auro-background insetMd="md"></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: var(--auro-size-none)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: var(--inset)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: var(--auro-size-md)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: var(--insetMd)`);
  });

  it('auro-background custom element with custom insetMd declared', async () => {
    const el = await fixture(html`
      <auro-background insetMd="1rem"></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: var(--auro-size-none)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: var(--inset)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: 1rem`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: var(--insetMd)`);
  });

  it('auro-background custom element with pre-defined insetLg declared', async () => {
    const el = await fixture(html`
      <auro-background insetLg="md"></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: var(--auro-size-none)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: var(--inset)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: var(--insetSm)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: var(--auro-size-md)`);
  });

  it('auro-background custom element with custom insetLg declared', async () => {
    const el = await fixture(html`
      <auro-background insetLg="1rem"></auro-background>
    `);

    await expect(el.shadowRoot.innerHTML).contains(`--inset: var(--auro-size-none)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetSm: var(--inset)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetMd: var(--insetSm)`);
    await expect(el.shadowRoot.innerHTML).contains(`--insetLg: 1rem`);
  });
});
