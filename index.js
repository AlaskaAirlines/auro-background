import { AuroBackground } from './src/auro-background.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-background') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroBackground {});
  }
}

export { registerComponent }
