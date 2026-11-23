```js
// Import the class only
import { AuroBackground } from '@aurodesignsystem/auro-background/class';

// Register with a custom name if desired
AuroBackground.register('custom-background');
```

The `register('custom-background')` call creates a new custom element, `<custom-background>`, that behaves like `<auro-background>`, so both can be on the same page without conflicts.
