import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-background", () => {
  it("set all the properties and attributes", async () => {
    const el = await fixture(html`
      <auro-background height="10px" heightsm="11px" heightmd="12px" heightlg="13px" width="10px" widthsm="11px" widthmd="12px" widthlg="13px" bg="red" bgsm="blue" bgmd="purple" bglg="magenta"></auro-background>
    `);

    expect(true).to.be.true;
  });

  it("auro-background is accessible", async () => {
    const el = await fixture(html`
      <auro-background></auro-background>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-background custom element is defined", async () => {
    const el = await Boolean(customElements.get("auro-background"));

    await expect(el).to.be.true;
  });

  it("auro-background custom element with no inset declared", async () => {
    const el = await fixture(html`
      <auro-background></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--inset")).to.equal("0");
    await expect(div.style.getPropertyValue("--insetSm")).to.equal(
      "var(--inset)",
    );
    await expect(div.style.getPropertyValue("--insetMd")).to.equal(
      "var(--insetSm)",
    );
    await expect(div.style.getPropertyValue("--insetLg")).to.equal(
      "var(--insetMd)",
    );
  });

  it("auro-background custom element with pre-defined inset declared", async () => {
    const el = await fixture(html`
      <auro-background inset="md"></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--inset")).to.equal(
      "var(--ds-size-200)",
    );
  });

  it("auro-background custom element with custom inset declared", async () => {
    const el = await fixture(html`
      <auro-background inset="1rem"></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--inset")).to.equal("1rem");
  });

  it("auro-background custom element with pre-defined insetSm declared", async () => {
    const el = await fixture(html`
      <auro-background insetSm="md"></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--inset")).to.equal("0");
    await expect(div.style.getPropertyValue("--insetSm")).to.equal(
      "var(--ds-size-200)",
    );
    await expect(div.style.getPropertyValue("--insetMd")).to.equal(
      "var(--insetSm)",
    );
    await expect(div.style.getPropertyValue("--insetLg")).to.equal(
      "var(--insetMd)",
    );
  });

  it("auro-background custom element with custom insetSm declared", async () => {
    const el = await fixture(html`
      <auro-background insetSm="1rem"></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--insetSm")).to.equal("1rem");
  });

  it("auro-background custom element with pre-defined insetMd declared", async () => {
    const el = await fixture(html`
      <auro-background insetMd="md"></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--insetMd")).to.equal(
      "var(--ds-size-200)",
    );
  });

  it("auro-background custom element with custom insetMd declared", async () => {
    const el = await fixture(html`
      <auro-background insetMd="1rem"></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--insetMd")).to.equal("1rem");
  });

  it("auro-background custom element with pre-defined insetLg declared", async () => {
    const el = await fixture(html`
      <auro-background insetLg="md"></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--insetLg")).to.equal(
      "var(--ds-size-200)",
    );
  });

  it("auro-background custom element with custom insetLg declared", async () => {
    const el = await fixture(html`
      <auro-background insetLg="1rem"></auro-background>
    `);

    const div = el.shadowRoot.querySelector(".background");

    await expect(div.style.getPropertyValue("--insetLg")).to.equal("1rem");
  });
});
