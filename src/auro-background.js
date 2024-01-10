/* eslint-disable no-magic-numbers */
/* eslint-disable no-negated-condition */
// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
import styleCss from "./style-css.js";
import { styleMap } from 'lit/directives/style-map.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Auro-background provides users a way to add a background image or color block including a gradient.
 *
 * @attr {String} bg - Applies all breakpoints
 * @attr {String} bgSm - `breakpoint--sm` and above
 * @attr {String} bgMd - `breakpoint-md` and above
 * @attr {String} bgLg - `breakpoint-lg` and above
 * @attr {String} height - Apply minimum height value
 * @attr {String} heightSm - Apply minimum height for `breakpoint-sm` and above
 * @attr {String} heightMd - Apply minimum height for `breakpoint-md` and above
 * @attr {String} heightLg - Apply minimum height for `breakpoint-lg` and above
 * @attr {String} width - Define custom width
 * @attr {String} widthSm - Define custom width for `breakpoint-sm` and above
 * @attr {String} widthMd - Define custom with for `breakpoint-md` and above
 * @attr {String} widthLg - Define custom width for `breakpoint-lg` and above
 * @attr {String} inset - Apply internal padding
 * @attr {String} insetSm - Apply internal padding for `breakpoint-sm` and above
 * @attr {String} insetMd - Apply internal padding for `breakpoint-md` and above
 * @attr {String} insetLg - Apply internal padding for `breakpoint-lg` and above
 */

// build the component class
export class AuroBackground extends LitElement {
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
      inset: { type: String },
      insetSm: { type: String },
      insetMd: { type: String },
      insetLg: { type: String }
      /* eslint-enable sort-vars */
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * @private
   * @param {string} inset Value from host attribute.
   * @returns {string}
   */
  getInsetValues(inset) {
    const presetValues = {
      'none': '0',
      'xxxs': '25',
      'xxs': '50',
      'xs': '100',
      'sm': '150',
      'md': '200',
      'lg': '300',
      'xl': '400',
      'xxl': '600',
      'xxxl': '800'
    };

    if (presetValues[inset]) {
      return `var(--ds-size-${presetValues[inset]})`;
    }

    return inset;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const styles = {
      '--background': this.bg || 'transparent',
      '--backgroundSm': this.bgSm || 'var(--background)',
      '--backgroundMd': this.bgMd || 'var(--backgroundSm)',
      '--backgroundLg': this.bgLg || 'var(--backgroundMd)',
      '--width': this.width || 'auto',
      '--widthSm': this.widthSm || 'var(--width)',
      '--widthMd': this.widthMd || 'var(--widthSm)',
      '--widthLg': this.widthLg || 'var(--widthMd)',
      '--height': this.height || 'auto',
      '--heightSm': this.heightSm || 'var(--height)',
      '--heightMd': this.heightMd || 'var(--heightSm)',
      '--heightLg': this.heightLg || 'var(--heightMd)',
      '--inset': this.getInsetValues(this.inset) || '0',
      '--insetSm': this.getInsetValues(this.insetSm) || 'var(--inset)',
      '--insetMd': this.getInsetValues(this.insetMd) || 'var(--insetSm)',
      '--insetLg': this.getInsetValues(this.insetLg) || 'var(--insetMd)',
    };

    return html`
      <div class="background" style=${styleMap(styles)}><slot></slot></div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-background")) {
  customElements.define("auro-background", AuroBackground);
}
