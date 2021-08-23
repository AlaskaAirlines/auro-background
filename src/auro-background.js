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


const styleMap = (style) => Object.entries(style).reduce((styleString, [
  propName,
  propValue
]) => {
  const propertyName = propName.replace(/(?<prop>[A-Z])/gu, (matches) => `-${matches[0].toLowerCase()}`);


  return `${styleString}${propertyName}:${propValue};`;
}, '');


// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Auro-background provides users a way to add a background image or color block incuding a gradient.
 *
 * @attr {Boolean} fixed - Uses fixed pixel values for element shape
 * @attr {String} background - Applies the css background to all screen sizes
 * @attr {String} backgroundSm - Applies the css background to screen sizes 660px and above
 * @attr {String} backgroundMd - Applies the css background to screen sizes 1024px and above
 * @attr {String} backgroundLg - Applies the css background screen sizes 1232px and above
 * @attr {String} height - In some implementations a minimum height is needed for the background to show
 * @attr {String} heightSm - In some implementations a minimum height is needed this applies to screen sizes 660px and above
 * @attr {String} heightMd - In some implementations a minimum height is needed this applies to screen sizes 1024px and above
 * @attr {String} heightLg - In some implementations a minimum height is needed this applies to screen sizes 1234px and above
 */

// build the component class
class AuroBackground extends LitElement {

  constructor() {
    super();
    this.background = "transparent";
    this.height = "250px";
    this.heightSm = "100%";
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {

      background: { type: String },
      backgroundSm: { type: String },
      backgroundMd: { type: String },
      backgroundLg: { type: String },
      height: { type: String },
      heightSm: { type: String },
      heightMd: { type: String },
      heightLg: { type: String },

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
      'background': this.background,
      'height': this.height,
    };
    this.backgroundSmallStyles = {
      'background': this.backgroundSm ? this.backgroundSm : this.background,
      'height': this.heightSm ? this.heightSm : this.height,
    };
    this.backgroundMediumStyles = {
      'background': this.backgroundMd ? this.backgroundMd : this.backgroundSmallStyles.background,
      'height': this.heightMd ? this.heightMd : this.backgroundSmallStyles.height,
    };
    this.backgroundLargeStyles = {
      'background': this.backgroundLg ? this.backgroundLg : this.backgroundMediumStyles.background,
      'height': this.heightLg ? this.heightLg : this.backgroundMediumStyles.height,
    };

    return html`
      <div class="background background-xs" style=${styleMap(this.backgroundStyles)}>
        <div class="background background-sm" style=${styleMap(this.backgroundSmallStyles)}>
          <div class="background background-md" style=${styleMap(this.backgroundMediumStyles)}>
            <div class="background background-lg" style=${styleMap(this.backgroundLargeStyles)}>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-background")) {
  customElements.define("auro-background", AuroBackground);
}
