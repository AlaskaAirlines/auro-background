
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-background

The `auro-background` element provides users a way to add a background image or color block including a gradient.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                                                                  | Default | Description                                                    |
| ---------- | ---------- | --------- | ----------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| bg         | bg         |           | string                                                                                                |         | Sets the background image at all breakpoints                   |
| bgLg       | bglg       |           | string                                                                                                |         | Sets the background image at `ds-grid-breakpoint-lg` and above |
| bgMd       | bgmd       |           | string                                                                                                |         | Sets the background image at `ds-grid-breakpoint-md` and above |
| bgSm       | bgsm       |           | string                                                                                                |         | Sets the background image at `ds-grid-breakpoint-sm` and above |
| height     | height     |           | string                                                                                                |         | Applies custom height at all breakpoints                       |
| heightLg   | heightlg   |           | string                                                                                                |         | Applies custom height at `ds-grid-breakpoint-lg` and above     |
| heightMd   | heightmd   |           | string                                                                                                |         | Applies custom height at `ds-grid-breakpoint-md` and above     |
| heightSm   | heightsm   |           | string                                                                                                |         | Applies custom height at `ds-grid-breakpoint-sm` and above     |
| inset      | inset      |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |         | Applies internal padding at all breakpoints                    |
| insetLg    | insetlg    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |         | Applies internal padding at `ds-grid-breakpoint-lg` and above  |
| insetMd    | insetmd    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |         | Applies internal padding at `ds-grid-breakpoint-md` and above  |
| insetSm    | insetsm    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |         | Applies internal padding at `ds-grid-breakpoint-sm` and above  |
| width      | width      |           | string                                                                                                |         | Applies custom width at all breakpoints                        |
| widthLg    | widthlg    |           | string                                                                                                |         | Applies custom width at `ds-grid-breakpoint-lg` and above      |
| widthMd    | widthmd    |           | string                                                                                                |         | Applies custom width at `ds-grid-breakpoint-md` and above      |
| widthSm    | widthsm    |           | string                                                                                                |         | Applies custom width at `ds-grid-breakpoint-sm` and above      |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                               |
| --------- | --------------------------------------------------------- |
| (default) | Default slot for content within the background container. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat">
<div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<auro-header level="2" visualLevel="3">View all destinations</auro-header>
<auro-hyperlink type="cta" variant="secondary" href="#" size="xs" style="padding-bottom: 4px;">See where we fly</auro-hyperlink>
</div>
</auro-background>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat"&gt;
  &lt;div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;"&gt;
    &lt;auro-header level="2" visualLevel="3"&gt;View all destinations&lt;/auro-header&gt;
    &lt;auro-hyperlink type="cta" variant="secondary" href="#" size="xs" style="padding-bottom: 4px;"&gt;See where we fly&lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/auro-background&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Background

Use the `bg` attribute to set the background image.

Different `bg` values may be set for each breakpoint using the `bgSm`, `bgMd` and `bgLg` attributes.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/breakpoints.html) -->
<!-- The below content is automatically added from ../apiExamples/breakpoints.html -->
<auro-background
    bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat"
    bgMd="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt8a7ff6c35b184273/6633c2581dbb0945b40b8787/hawaii-bg.png) center center/cover no-repeat"
    bgLg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt947ef7b1f81b7f99/6633c2589db1edec36f6de69/MKT_091820_BF-CM-Email-Sign-Up-Materials_Merch-tiles_Evergreen_720x720-background.jpg) center center/cover no-repeat"
    inset="xxxl">
<div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<auro-header level="2" visualLevel="3">View all destinations</auro-header>
<auro-hyperlink type="cta" variant="secondary" href="#" style="padding-top: 12px;" size="sm">See where we fly</auro-hyperlink>
</div>
</auro-background>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/breakpoints.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/breakpoints.html -->

<pre class="language-html"><code class="language-html">&lt;auro-background
  bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat"
  bgMd="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt8a7ff6c35b184273/6633c2581dbb0945b40b8787/hawaii-bg.png) center center/cover no-repeat"
  bgLg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt947ef7b1f81b7f99/6633c2589db1edec36f6de69/MKT_091820_BF-CM-Email-Sign-Up-Materials_Merch-tiles_Evergreen_720x720-background.jpg) center center/cover no-repeat"
  inset="xxxl"&gt;
  &lt;div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;"&gt;
    &lt;auro-header level="2" visualLevel="3"&gt;View all destinations&lt;/auro-header&gt;
    &lt;auro-hyperlink type="cta" variant="secondary" href="#" style="padding-top: 12px;" size="sm"&gt;See where we fly&lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/auro-background&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Height and Width

Use the `height` and `width` attributes to set a fixed height/width on the element. 

The `height` and `width` attributes accept any valid CSS value for height/width (e.g. `100px`, `12rem`, `50vw`).

Custom height/width can be set per breakpoint using the `heightSm`, `heightMd`, `heightLg`, `widthSm`, `widthMd`, and `widthLg` attributes.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/fixed-size.html) -->
<!-- The below content is automatically added from ../apiExamples/fixed-size.html -->
<auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat" height="400px" width="600px">
<div style="height: 100%; color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<auro-header level="2" visualLevel="3">View all destinations</auro-header>
<auro-hyperlink type="cta" variant="secondary" href="#" style="padding-top: 12px;" size="sm">See where we fly</auro-hyperlink>
</div>
</auro-background>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fixed-size.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/fixed-size.html -->

<pre class="language-html"><code class="language-html">&lt;auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat" height="400px" width="600px"&gt;
  &lt;div style="height: 100%; color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;"&gt;
    &lt;auro-header level="2" visualLevel="3"&gt;View all destinations&lt;/auro-header&gt;
    &lt;auro-hyperlink type="cta" variant="secondary" href="#" style="padding-top: 12px;" size="sm"&gt;See where we fly&lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/auro-background&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Inset

Use the `inset` attribute to add padding inside the element.

The `inset` attribute supports the following values: `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl` or any CSS value which is valid for the CSS `padding` rule (e.g. `1rem`).

Note: When using a custom CSS rule do not include a semi-colon at at the end of the string (e.g. `1rem` is valid, `1rem;` is invalid).

Inset values may also be set for each breakpoint size via the `insetSm`, `insetMd` and `insetLg` attributes.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inset.html) -->
<!-- The below content is automatically added from ./../apiExamples/inset.html -->
<auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat" inset="xl">
<div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
<auro-header level="2" visualLevel="3">View all destinations</auro-header>
<auro-hyperlink type="cta" variant="secondary" href="#" style="padding-top: 12px;" size="sm">See where we fly</auro-hyperlink>
</div>
</auro-background>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inset.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inset.html -->

<pre class="language-html"><code class="language-html">&lt;auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat" inset="xl"&gt;
  &lt;div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;"&gt;
    &lt;auro-header level="2" visualLevel="3"&gt;View all destinations&lt;/auro-header&gt;
    &lt;auro-hyperlink type="cta" variant="secondary" href="#" style="padding-top: 12px;" size="sm"&gt;See where we fly&lt;/auro-hyperlink&gt;
  &lt;/div&gt;
&lt;/auro-background&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">:host {
  --ds-auro-background-container-color: transparent;
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
