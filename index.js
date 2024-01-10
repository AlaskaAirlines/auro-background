import { AuroBackground } from './src/auro-background';

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
