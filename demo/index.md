<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Background

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- The below content is automatically added from ../docs/partials/description.md -->
The `auro-background` element is an easy-to-use mobile-first alternative to writing custom CSS for background colors or images with automatically scoped media queries. Use independently or in the slot of another custom element such as `auro-banner`.
<!-- AURO-GENERATED-CONTENT:END -->

## How to use

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ../docs/partials/useCases.md -->
The `auro-background` component accepts 4 properties - `bg`, `height`, `width`, and `inset` that serve as the default at all breakpoints. `height`, `width`, and `inset` are not required and sizing will scale to the content when omitted. Additionally, there is a separate property for each supported breakpoint (`bgsm`, `bgmd`, `bglg`, `heightsm`, `heightmd`, `heightlg`, `widthsm`, `widthmd`, `widthlg`).  If you don't set specific size property the smaller property will be used.

These properties map to the compound CSS `background` property and CSS properties of `height`, `width`, and `padding`. Anything you can do within the scope of those CSS rules you can do here.

See <auro-hyperlink target="_blank" href="https://webcode.tools/generators/css/background-image">CSS Background Image Generator</auro-hyperlink> for a helpful code generation tool.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat">
    <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <auro-header level="2" display="600">View all destinations</auro-header>
      <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
    </div>
  </auro-background>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat">
  <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-background` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroBackground.register(name)` method and pass in a unique name.

```js
import { AuroBackground } from '../src/auro-background.js';

AuroBackground.register('custom-background');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-background` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ../apiExamples/custom.html -->
  <custom-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat">
    <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <auro-header level="2" display="600">View all destinations</auro-header>
      <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
    </div>
  </custom-background>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom.html -->

```html
<custom-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat">
  <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</custom-background>
```
<!-- AURO-GENERATED-CONTENT:END -->
