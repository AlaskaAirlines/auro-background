/* eslint-disable no-magic-numbers */
/* eslint-disable no-negated-condition */
// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';
import { styleMap } from 'lit-html/directives/style-map';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Auro-background provides users a way to add a background image or color block incuding a gradient.
 *
 * @attr {String} bg - Applies the css background to all screen sizes
 * @attr {String} bgSm - Applies the css background to screen sizes 660px and above
 * @attr {String} bgMd - Applies the css background to screen sizes 1024px and above
 * @attr {String} bgLg - Applies the css background screen sizes 1232px and above
 * @attr {String} height - In some implementations a minimum height is needed for the background to show
 * @attr {String} heightSm - In some implementations a minimum height is needed this applies to screen sizes 660px and above
 * @attr {String} heightMd - In some implementations a minimum height is needed this applies to screen sizes 1024px and above
 * @attr {String} heightLg - In some implementations a minimum height is needed this applies to screen sizes 1234px and above
 * @attr {String} width - In some implementations a specific width is needed for the background to show
 * @attr {String} widthSm - In some implementations a specific width is needed this applies to screen sizes 660px and above
 * @attr {String} widthMd - In some implementations a specific width is needed this applies to screen sizes 1024px and above
 * @attr {String} widthLg - In some implementations a specific width is needed this applies to screen sizes 1234px and above
 * @attr {Boolean} inset - Sets padding inside the auro-background element surrounding the slot content
 * @attr {Boolean} insetXl - Sets a large amount of padding inside the auro-background element surrounding the slot content
 */

// build the component class
class AuroBackground extends LitElement {
  // function to define props used within the scope of this component
  static get properties() {
    return {
      /* eslint-disable sort-vars */
      bg: { type: String },
      bgSm: { type: String },
      bgMd: { type: String },
      bgLg: { type: String },
      height: { type: String },
      heightSm: { type: String },
      heightMd: { type: String },
      heightLg: { type: String },
      width: { type: String },
      widthSm: { type: String },
      widthMd: { type: String },
      widthLg: { type: String },
      inset: { type: Boolean},
      insetXl: { type: Boolean }
      /* eslint-enable sort-vars */
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
    /* eslint-disable sort-vars */
    const bg = this.bg ? this.bg : 'transparent',
      bgSm = this.bgSm ? this.bgSm : bg,
      bgMd = this.bgMd ? this.bgMd : bgSm,
      bgLg = this.bgLg ? this.bgLg : bgMd,
      width = this.width ? this.width : 'auto',
      widthSm = this.widthSm ? this.widthSm : width,
      widthMd = this.widthMd ? this.widthMd : widthSm,
      widthLg = this.widthLg ? this.widthLg : widthMd,
      height = this.height ? this.height : 'auto',
      heightSm = this.heightSm ? this.heightSm : height,
      heightMd = this.heightMd ? this.heightMd : heightSm,
      heightLg = this.heightLg ? this.heightLg : heightMd;
    /* eslint-enable sort-vars */

    const styles = {
      '--background': bg,
      '--backgroundSm': bgSm,
      '--backgroundMd': bgMd,
      '--backgroundLg': bgLg,
      '--width': width,
      '--widthSm': widthSm,
      '--widthMd': widthMd,
      '--widthLg': widthLg,
      '--height': height,
      '--heightSm': heightSm,
      '--heightMd': heightMd,
      '--heightLg': heightLg
    };

    return html`
      <div class="background" style=${styleMap(styles)}><slot></slot></div>
    `;
    /* eslint-enable brace-style */
  }
}

// define the name of the custom component
if (!customElements.get("auro-background")) {
  customElements.define("auro-background", AuroBackground);
}
