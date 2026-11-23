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
 * Adds a background image, color, or gradient behind the content you place inside it.
 *
 * Key capabilities:
 * - **Responsive backgrounds**: Set `bgSm`, `bgMd`, or `bgLg` to change the background at larger screen sizes.
 * - **Custom size**: Set `height` and `width` to give the element a fixed size.
 * - **Inner spacing**: Set `inset` to add padding inside the container.
 *
 * @example
 * <auro-background bg="url(hero.jpg) center/cover no-repeat" inset="lg">
 *   <p>Content over the background</p>
 * </auro-background>
 *
 * @summary A container that adds a background image, color, or gradient, with options that change at each breakpoint.
 * @customElement auro-background
 *
 * @slot - Content to show on top of the background.
 *
 * @cssprop --ds-auro-background-container-color - Background color shown when `bg` isn't set.
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
       * Sets the background at all breakpoints. Accepts any CSS `background` value, such as a color, a gradient, or an image like `url(hero.jpg) center/cover no-repeat`.
       * @default transparent
       */
      bg: { type: String },
      /**
       * Sets the background at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `bgMd` value when not set.
       */
      bgLg: {
        type: String,
        attribute: "bglg",
      },
      /**
       * Sets the background at `ds-grid-breakpoint-md` (768px) and above. Uses the `bgSm` value when not set.
       */
      bgMd: {
        type: String,
        attribute: "bgmd",
      },
      /**
       * Sets the background at `ds-grid-breakpoint-sm` (576px) and above. Uses the `bg` value when not set.
       */
      bgSm: {
        type: String,
        attribute: "bgsm",
      },
      /**
       * Sets the height of the element at all breakpoints. Accepts any CSS height value, such as `400px` or `50vh`.
       * @default auto
       */
      height: { type: String },
      /**
       * Sets the height at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `heightMd` value when not set.
       */
      heightLg: {
        type: String,
        attribute: "heightlg",
      },
      /**
       * Sets the height at `ds-grid-breakpoint-md` (768px) and above. Uses the `heightSm` value when not set.
       */
      heightMd: {
        type: String,
        attribute: "heightmd",
      },
      /**
       * Sets the height at `ds-grid-breakpoint-sm` (576px) and above. Uses the `height` value when not set.
       */
      heightSm: {
        type: String,
        attribute: "heightsm",
      },
      /**
       * Sets the padding inside the element at all breakpoints. Use a size from `none` (no padding) to `xxxl` (4rem), or any CSS `padding` value, such as `1rem`.
       * @type {'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | (string & {})}
       * @default 0
       */
      inset: { type: String },
      /**
       * Sets the padding inside the element at `ds-grid-breakpoint-lg` (1024px) and above. Accepts the same values as `inset`. Uses the `insetMd` value when not set.
       * @type {'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | (string & {})}
       */
      insetLg: {
        type: String,
        attribute: "insetlg",
      },
      /**
       * Sets the padding inside the element at `ds-grid-breakpoint-md` (768px) and above. Accepts the same values as `inset`. Uses the `insetSm` value when not set.
       * @type {'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | (string & {})}
       */
      insetMd: {
        type: String,
        attribute: "insetmd",
      },
      /**
       * Sets the padding inside the element at `ds-grid-breakpoint-sm` (576px) and above. Accepts the same values as `inset`. Uses the `inset` value when not set.
       * @type {'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | (string & {})}
       */
      insetSm: {
        type: String,
        attribute: "insetsm",
      },
      /**
       * Sets the width of the element at all breakpoints. Accepts any CSS width value, such as `600px` or `50%`.
       * @default auto
       */
      width: { type: String },
      /**
       * Sets the width at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `widthMd` value when not set.
       */
      widthLg: {
        type: String,
        attribute: "widthlg",
      },
      /**
       * Sets the width at `ds-grid-breakpoint-md` (768px) and above. Uses the `widthSm` value when not set.
       */
      widthMd: {
        type: String,
        attribute: "widthmd",
      },
      /**
       * Sets the width at `ds-grid-breakpoint-sm` (576px) and above. Uses the `width` value when not set.
       */
      widthSm: {
        type: String,
        attribute: "widthsm",
      },
    };
  }

  static get styles() {
    return [styleCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-background"] - The tag name to register the element under.
   *
   * @example
   * AuroBackground.register("custom-background"); // Registers the element as `<custom-background>`.
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
   * @param {string} inset A size name such as `md`, or any CSS padding value.
   * @returns {string} The CSS padding value to use.
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
