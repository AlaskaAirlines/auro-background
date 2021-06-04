/* eslint-disable no-magic-numbers */
/* eslint-disable no-negated-condition */
// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";
// import { styleMap } from 'lit-html/directives/style-map'; // For some reason it doesn't seem to like "url" in the background property values

import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';


const styleMap = (style) => {
  return Object.entries(style).reduce((styleString, [propName, propValue]) => {
      propName = propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`);
      return `${styleString}${propName}:${propValue};`;
  }, '');
}


// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
* auro-background provides users a way to add a background image or color block incuding a gradient.
 *
 * @attr {Boolean} fixed - Uses fixed pixel values for element shape
 * @attr {String} background - Applies the css background to all screen sizes
 * @attr {String} backgroundSm - Applies the css background to screen sizes 660px and above
 * @attr {String} backgroundMd - Applies the css background to screen sizes 1024px and above
 * @attr {String} backgroundLg - Applies the css background screen sizes 1232px and above
 * @attr {String} minHeight - In some implementations a minimum height is needed for the background to show
 * @attr {String} minHeightSm - In some implementations a minimum height is needed this applies to screen sizes 660px and above
 * @attr {String} minHeightMd - In some implementations a minimum height is needed this applies to screen sizes 1024px and above
 * @attr {String} minHeightLg - In some implementations a minimum height is needed this applies to screen sizes 1234px and above
 */

// build the component class
class AuroBackground extends LitElement {

  constructor() {
    super();
    this.background = "transparent";
    this.minHeight = "100%";

  }
  // function to define props used within the scope of this component
  static get properties() {
    return {

      background: { type: String },
      backgroundSm: { type: String },
      backgroundMd: { type: String },
      backgroundLg: { type: String },
      minHeight: { type: String },
      minHeightSm: { type: String },
      minHeightMd: { type: String },
      minHeightLg: { type: String },

    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    this.backgroundStyles = {
      ...(this.background && {'background': this.background}),
      ...(this.minHeight && {'min-height': this.minHeight, 'width': 'auto'})
    };
    this.backgroundSmallStyles = {
      ...(this.backgroundSm && {'background': this.backgroundSm}),
      ...(this.minHeightSm && {'min-height': this.minHeightSm, 'width': 'auto'})
    };
    this.backgroundMediumStyles = {
      ...(this.backgroundSm && {'background': this.backgroundSm}),
      ...(this.minHeightSm && {'min-height': this.minHeightSm, 'width': 'auto'})
    };
    this.backgroundLargeStyles = {
      ...(this.backgroundSm && {'background': this.backgroundSm}),
      ...(this.minHeightSm && {'min-height': this.minHeightSm, 'width': 'auto'})
    };

    return html`
      <div class="bg" style=${styleMap(this.backgroundStyles)}><slot></slot></div>
      ${this.backgroundSm  && html`<div class="sized-background background-sm" style=${styleMap(this.backgroundSmallStyles)}><slot></slot></div>`}
      ${this.backgroundMd && html`<div class="sized-background background-md" style=${styleMap(this.backgroundMediumStyles)}><slot></slot></div>`}
      ${this.backgroundLg && html`<div class="sized-background background-lg" style=${styleMap(this.backgroundLargeStyles)}><slot></slot></div>`}
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-background")) {
  customElements.define("auro-background", AuroBackground);
}
