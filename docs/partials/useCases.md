The `auro-background` component accepts 4 properties - `bg`, `height`, `width`, and `inset` that serve as the default at all breakpoints. `height`, `width`, and `inset` are not required and sizing will scale to the content when omitted. Additionally, there is a separate property for each supported breakpoint (`bgsm`, `bgmd`, `bglg`, `heightsm`, `heightmd`, `heightlg`, `widthsm`, `widthmd`, `widthlg`).  If you don't set specific size property the smaller property will be used.

These properties map to the compound CSS `background` property and CSS properties of `height`, `width`, and `padding`. Anything you can do within the scope of those CSS rules you can do here.

See <auro-hyperlink target="_blank" href="https://webcode.tools/generators/css/background-image">CSS Background Image Generator</auro-hyperlink> for a helpful code generation tool.
