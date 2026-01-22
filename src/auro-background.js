// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

import { styleMap } from "lit/directives/style-map.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The `auro-background` element provides users a way to add a background image or color block including a gradient.
 * @customElement auro-background
 * 
 * @slot - Default slot for content within the background container.
 */

// build the component class
export class AuroBackground extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      /**
       * Sets the background image at all breakpoints
       */
      bg: { type: String },
      /**
       * Sets the background image at `ds-grid-breakpoint-lg` and above
       */
      bgLg: { type: String },
      /**
       * Sets the background image at `ds-grid-breakpoint-md` and above
       */
      bgMd: { type: String },
      /**
       * Sets the background image at `ds-grid-breakpoint-sm` and above
       */
      bgSm: { type: String },
      /**
       * Applies custom height at all breakpoints
       */
      height: { type: String },
      /**
       * Applies custom height at `ds-grid-breakpoint-lg` and above
       */
      heightLg: { type: String },
      /**
       * Applies custom height at `ds-grid-breakpoint-md` and above
       */
      heightMd: { type: String },
      /**
       * Applies custom height at `ds-grid-breakpoint-sm` and above
       */
      heightSm: { type: String },
      /**
       * Applies internal padding at all breakpoints
       * @type {'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | string}
       */
      inset: { type: String },
      /**
       * Applies internal padding at `ds-grid-breakpoint-lg` and above
       * @type {'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | string}
       */
      insetLg: { type: String },
      /**
       * Applies internal padding at `ds-grid-breakpoint-md` and above
       * @type {'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | string}
       */
      insetMd: { type: String },
      /**
       * Applies internal padding at `ds-grid-breakpoint-sm` and above
       * @type {'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | string}
       */
      insetSm: { type: String },
      /**
       * Applies custom width at all breakpoints
       */
      width: { type: String },
      /**
       * Applies custom width at `ds-grid-breakpoint-lg` and above
       */
      widthLg: { type: String },
      /**
       * Applies custom width at `ds-grid-breakpoint-md` and above
       */
      widthMd: { type: String },
      /**
       * Applies custom width at `ds-grid-breakpoint-sm` and above
       */
      widthSm: { type: String },
    };
  }

  static get styles() {
    return [styleCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-background"] - The name of the element that you want to register.
   *
   * @example
   * AuroBackground.register("custom-background") // this will register this element to <custom-background/>
   *
   */
  static register(name = "auro-background") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroBackground);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-background");
  }

  /**
   * @private
   * @param {string} inset Value from host attribute.
   * @returns {string}
   */
  getInsetValues(inset) {
    const presetValues = {
      none: "0",
      xxxs: "25",
      xxs: "50",
      xs: "100",
      sm: "150",
      md: "200",
      lg: "300",
      xl: "400",
      xxl: "600",
      xxxl: "800",
    };

    if (presetValues[inset]) {
      return `var(--ds-size-${presetValues[inset]})`;
    }

    return inset;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const styles = {
      "--background": this.bg || "var(--ds-auro-background-container-color)",
      "--backgroundSm": this.bgSm || "var(--background)",
      "--backgroundMd": this.bgMd || "var(--backgroundSm)",
      "--backgroundLg": this.bgLg || "var(--backgroundMd)",
      "--width": this.width || "auto",
      "--widthSm": this.widthSm || "var(--width)",
      "--widthMd": this.widthMd || "var(--widthSm)",
      "--widthLg": this.widthLg || "var(--widthMd)",
      "--height": this.height || "auto",
      "--heightSm": this.heightSm || "var(--height)",
      "--heightMd": this.heightMd || "var(--heightSm)",
      "--heightLg": this.heightLg || "var(--heightMd)",
      "--inset": this.getInsetValues(this.inset) || "0",
      "--insetSm": this.getInsetValues(this.insetSm) || "var(--inset)",
      "--insetMd": this.getInsetValues(this.insetMd) || "var(--insetSm)",
      "--insetLg": this.getInsetValues(this.insetLg) || "var(--insetMd)",
    };

    return html`
      <div class="background" style=${styleMap(styles)}><slot></slot></div>
    `;
  }
}
