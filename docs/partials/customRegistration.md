```js
// Import the class only
import { AuroBackground } from '@aurodesignsystem/auro-background/class';

// Register with a custom name if desired
AuroBackground.register('custom-background');
```

This will create a new custom element `<custom-background>` that behaves exactly like `<auro-background>`, allowing both to coexist on the same page without interfering with each other.
