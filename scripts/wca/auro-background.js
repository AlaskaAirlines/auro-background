
import { AuroBackground } from '../../src/auro-background.js';

/**
 * Auro-background provides users a way to add a background image or color block including a gradient.
 */
class AuroBackgroundWCA extends AuroBackground {}

if (!customElements.get("auro-background")) {
  customElements.define("auro-background", AuroBackgroundWCA);
}
