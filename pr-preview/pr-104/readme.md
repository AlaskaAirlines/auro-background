<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component example code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Background

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
Adds a background image, color, or gradient to a section of content. Set different backgrounds, sizes, and padding for each breakpoint without writing media queries. Use it on its own or in the slot of another element, such as `auro-banner`.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
The `bg`, `height`, `width`, and `inset` properties set a value at every breakpoint. Each one also has a property for each breakpoint, such as `bgSm`, `heightMd`, and `widthLg`. When you don't set a breakpoint property, the component uses the value from the next smaller breakpoint.

All four are optional. Without them, the element fills the width of its container, fits the height of its content, has no padding, and has a transparent background. The `insetLg` property doesn't currently take effect: the large breakpoint uses the `insetMd` value.

These properties map to the CSS `background`, `height`, `width`, and `padding` properties, so any value those properties accept works here.

To generate `bg` values, try the <auro-hyperlink target="_blank" href="https://webcode.tools/generators/css/background-image">CSS Background Image Generator</auro-hyperlink>.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
Use `<auro-background>` when you need to:

* Add a background image or color to a section of content.
* Change the background image at different breakpoints.
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-background/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-background/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-background?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-background)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-background?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-background</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Import the component in each project that uses `<auro-background>`.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-background";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
If your project can't process JS assets, use the pre-processed assets. Legacy browsers, such as IE11, aren't supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-background@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat"&gt;
  &lt;div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;"&gt;
    &lt;auro-header level="2" visualLevel="3"&gt;View all destinations&lt;/auro-header&gt;
    &lt;auro-hyperlink type="cta" variant="secondary" href="#" size="xs" style="padding-bottom: 4px;"&gt;See where we fly&lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/auro-background&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->

## Custom component registration for version management

Every Auro component has two key parts: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

Installing the component as described in the Install section imports the class and registers the component globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), register the class manually under a custom element name to avoid conflicts.

To do this, import only the component class and call the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroBackground } from '@aurodesignsystem/auro-background/class';
&#10;// Register with a custom name if desired
AuroBackground.register('custom-background');</code></pre>

This will create a new custom element `<custom-background>` that behaves exactly like `<auro-background>`, allowing both to coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<custom-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat">
<div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<auro-header level="2" visualLevel="3">View all destinations</auro-header>
<auro-hyperlink type="cta" variant="secondary" href="#" size="xs">See where we fly</auro-hyperlink>
</div>
</custom-background>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

<pre class="language-html"><code class="language-html">&lt;custom-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat"&gt;
  &lt;div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;"&gt;
    &lt;auro-header level="2" visualLevel="3"&gt;View all destinations&lt;/auro-header&gt;
    &lt;auro-hyperlink type="cta" variant="secondary" href="#" size="xs"&gt;See where we fly&lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/custom-background&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
