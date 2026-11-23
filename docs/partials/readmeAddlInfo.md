The `bg`, `height`, `width`, and `inset` properties set a value at every breakpoint. Each one also has a property for each breakpoint, such as `bgSm`, `heightMd`, and `widthLg`. When you don't set a breakpoint property, the component uses the value from the next smaller breakpoint.

All four are optional. Without them, the element fills the width of its container, fits the height of its content, has no padding, and has a transparent background.
These properties map to the CSS `background`, `height`, `width`, and `padding` properties, so any value those properties accept works here.

To generate `bg` values, try the <auro-hyperlink target="_blank" href="https://webcode.tools/generators/css/background-image">CSS Background Image Generator</auro-hyperlink>.
