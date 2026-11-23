
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-background

Adds a background image, color, or gradient behind the content you place inside it.

Key capabilities:
- **Responsive backgrounds**: Set `bgSm`, `bgMd`, or `bgLg` to change the background at larger screen sizes.
- **Custom size**: Set `height` and `width` to a fixed size. Otherwise the element fits its content's height and fills its container's width.
- **Inner spacing**: Set `inset` to add padding inside the container.

### Properties and attributes

| Properties | Attributes | Modifiers | Type                                                                                                  | Default       | Description                                                                                                                                                       |
| ---------- | ---------- | --------- | ----------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bg         | bg         |           | string                                                                                                | `transparent` | Sets the background at all breakpoints. Accepts any CSS `background` value, such as a color, a gradient, or an image like `url(hero.jpg) center/cover no-repeat`. |
| bgLg       | bglg       |           | string                                                                                                |               | Sets the background at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `bgMd` value when not set.                                                            |
| bgMd       | bgmd       |           | string                                                                                                |               | Sets the background at `ds-grid-breakpoint-md` (768px) and above. Uses the `bgSm` value when not set.                                                             |
| bgSm       | bgsm       |           | string                                                                                                |               | Sets the background at `ds-grid-breakpoint-sm` (576px) and above. Uses the `bg` value when not set.                                                               |
| height     | height     |           | string                                                                                                | `auto`        | Sets the height of the element at all breakpoints. Accepts any CSS height value, such as `400px` or `50vh`.                                                       |
| heightLg   | heightlg   |           | string                                                                                                |               | Sets the height at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `heightMd` value when not set.                                                            |
| heightMd   | heightmd   |           | string                                                                                                |               | Sets the height at `ds-grid-breakpoint-md` (768px) and above. Uses the `heightSm` value when not set.                                                             |
| heightSm   | heightsm   |           | string                                                                                                |               | Sets the height at `ds-grid-breakpoint-sm` (576px) and above. Uses the `height` value when not set.                                                               |
| inset      | inset      |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) | `0`           | Sets the padding inside the element at all breakpoints. Use a size from `none` (no padding) to `xxxl` (4rem), or any CSS `padding` value, such as `1rem`.         |
| insetLg    | insetlg    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |               | Sets the padding inside the element at `ds-grid-breakpoint-lg` (1024px) and above. Does not currently take effect: the large breakpoint uses the `insetMd` value. |
| insetMd    | insetmd    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |               | Sets the padding inside the element at `ds-grid-breakpoint-md` (768px) and above. Accepts the same values as `inset`. Uses the `insetSm` value when not set.      |
| insetSm    | insetsm    |           | `none` \| `xxxs` \| `xxs` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `xxxl` \| (string & {}) |               | Sets the padding inside the element at `ds-grid-breakpoint-sm` (576px) and above. Accepts the same values as `inset`. Uses the `inset` value when not set.        |
| width      | width      |           | string                                                                                                | `auto`        | Sets the width of the element at all breakpoints. Accepts any CSS width value, such as `600px` or `50%`.                                                          |
| widthLg    | widthlg    |           | string                                                                                                |               | Sets the width at `ds-grid-breakpoint-lg` (1024px) and above. Uses the `widthMd` value when not set.                                                              |
| widthMd    | widthmd    |           | string                                                                                                |               | Sets the width at `ds-grid-breakpoint-md` (768px) and above. Uses the `widthSm` value when not set.                                                               |
| widthSm    | widthsm    |           | string                                                                                                |               | Sets the width at `ds-grid-breakpoint-sm` (576px) and above. Uses the `width` value when not set.                                                                 |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                               |
| --------- | ----------------------------------------- |
| (default) | Content to show on top of the background. |

### CSS custom properties

| Name                                 | Description                                 |
| ------------------------------------ | ------------------------------------------- |
| --ds-auro-background-container-color | Background color shown when `bg` isn't set. |
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

## Property and attribute examples

### Background

Use the `bg` attribute to set the background. It accepts any CSS `background` value, such as an image, a color, or a gradient. Set a different `bg` value for each breakpoint with `bgSm`, `bgMd`, and `bgLg`.

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

### Height and width

Use the `height` and `width` attributes to set a fixed height and width on the element. Both accept any valid CSS value, such as `100px`, `12rem`, or `50vw`.

Set a different size at each breakpoint with `heightSm`, `heightMd`, `heightLg`, `widthSm`, `widthMd`, and `widthLg`.

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

The `inset` attribute accepts `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, or `xxxl`, or any CSS value that `padding` accepts, such as `1rem`.

When using a custom CSS value, don't end it with a semicolon. For example, `1rem` is valid and `1rem;` isn't.

Set a different inset at larger screen sizes with `insetSm` and `insetMd`. The `insetLg` attribute doesn't currently take effect: the large breakpoint uses the `insetMd` value.

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

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">:host {
  --ds-auro-background-container-color: transparent;
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
