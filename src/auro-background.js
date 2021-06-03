/* eslint-disable no-negated-condition */
// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';

import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
* auro-background provides users a way to add a background image or color block incuding a gradient.
 *
 * @attr {Boolean} fixed - Uses fixed pixel values for element shape
 * @attr {String} cssClass - Applies designated CSS class to demo element - you want to delete me!
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
  // constructor() {
  //   super();
  // }

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

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
    <style jsx>
      ${ifDefined(!this.background ? '' : `.bg {background: ${this.background};}`)}
      ${ifDefined(!this.backgroundSm ? '' : `@media (min-width: 660px) {.background-sm {background: ${this.backgroundSm};}}`)}
      ${ifDefined(!this.backgroundMd ? '' : `@media (min-width: 1024px) {.background-md {background: ${this.backgroundMd};}}`)}
      ${ifDefined(!this.backgroundLg ? '' : `@media (min-width: 1232px) {.background-lg {background: ${this.backgroundLg};}}`)}
      ${ifDefined(!this.minHeight ? '.bg {width: auto; min-height: 100%;}' : `.bg {width: auto; min-height: ${this.minHeight};}`)}
      ${ifDefined(!this.minHeightSm ? '' : `@media (min-width: 660px) {.background-sm {min-height: ${this.minHeightSm};}}`)}
      ${ifDefined(!this.minHeightMd ? '' : `@media (min-width: 1024px) {.background-md {min-height: ${this.minHeightMd};}}`)}
      ${ifDefined(!this.minHeightLg ? '' : `@media (min-width: 1232px) {.background-lg {min-height: ${this.minHeightLg};}}`)}
    </style>
    
    <div class="bg background-sm background-md background-lg">
      <slot></slot>
    </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-background")) {
  customElements.define("auro-background", AuroBackground);
}
