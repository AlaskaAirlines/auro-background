<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-background

Auro-background provides users a way to add a background image or color block including a gradient.

## Properties

| Property   | Attribute  | Type     | Description                                      |
|------------|------------|----------|--------------------------------------------------|
| [bg](#bg)       | `bg`       | `String` | Applies all breakpoints                          |
| [bgLg](#bgLg)     | `bgLg`     | `String` | `breakpoint-lg` and above                        |
| [bgMd](#bgMd)     | `bgMd`     | `String` | `breakpoint-md` and above                        |
| [bgSm](#bgSm)     | `bgSm`     | `String` | `breakpoint--sm` and above                       |
| [height](#height)   | `height`   | `String` | Apply minimum height value                       |
| [heightLg](#heightLg) | `heightLg` | `String` | Apply minimum height for `breakpoint-lg` and above |
| [heightMd](#heightMd) | `heightMd` | `String` | Apply minimum height for `breakpoint-md` and above |
| [heightSm](#heightSm) | `heightSm` | `String` | Apply minimum height for `breakpoint-sm` and above |
| [inset](#inset)    | `inset`    | `String` | Apply internal padding                           |
| [insetLg](#insetLg)  | `insetLg`  | `String` | Apply internal padding for `breakpoint-lg` and above |
| [insetMd](#insetMd)  | `insetMd`  | `String` | Apply internal padding for `breakpoint-md` and above |
| [insetSm](#insetSm)  | `insetSm`  | `String` | Apply internal padding for `breakpoint-sm` and above |
| [width](#width)    | `width`    | `String` | Define custom width                              |
| [widthLg](#widthLg)  | `widthLg`  | `String` | Define custom width for `breakpoint-lg` and above |
| [widthMd](#widthMd)  | `widthMd`  | `String` | Define custom with for `breakpoint-md` and above |
| [widthSm](#widthSm)  | `widthSm`  | `String` | Define custom width for `breakpoint-sm` and above |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

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

### Attribute Examples

#### Use `inset` attribute to add padding

The following example adds padding by using the `inset="xl"` property. The `inset` property support the following values; `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl` or any CSS value which is valid for the CSS `padding` rule (e.g. `1rem`).

When using a custom CSS rule do not include a semi-colon at at the end of the string (e.g. `1rem` is valid, `1rem;` is invalid).

Inset values may also be declared following the same rules as `inset` for each breakpoint property, i.e. `insetSm`, `insetMd` and `insetLg`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/inset.html) -->
  <!-- The below content is automatically added from ../apiExamples/inset.html -->
  <auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat" inset="xl">
    <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <auro-header level="2" display="600">View all destinations</auro-header>
      <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
    </div>
  </auro-background>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/inset.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/inset.html -->

```html
<auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat" inset="xl">
  <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Change backgrounds at breakpoints

You may specify different `bg` values for each breakpoint using the `bgSm`, `bgMd` and `bgLg` properties.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/breakpoints.html) -->
  <!-- The below content is automatically added from ../apiExamples/breakpoints.html -->
  <auro-background
    bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat"
    bgMd="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt947ef7b1f81b7f99/6633c2589db1edec36f6de69/MKT_091820_BF-CM-Email-Sign-Up-Materials_Merch-tiles_Evergreen_720x720-background.jpg) center center/cover no-repeat"
    bgLg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt8a7ff6c35b184273/6633c2581dbb0945b40b8787/hawaii-bg.png) center center/cover no-repeat"
    inset="xl">
    <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <auro-header level="2" display="600">View all destinations</auro-header>
      <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
    </div>
  </auro-background>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/breakpoints.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/breakpoints.html -->

```html
<auro-background
  bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat"
  bgMd="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt947ef7b1f81b7f99/6633c2589db1edec36f6de69/MKT_091820_BF-CM-Email-Sign-Up-Materials_Merch-tiles_Evergreen_720x720-background.jpg) center center/cover no-repeat"
  bgLg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt8a7ff6c35b184273/6633c2581dbb0945b40b8787/hawaii-bg.png) center center/cover no-repeat"
  inset="xl">
  <div style="color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### Use fixed `height` and `width`

The `height` and `width` properties can be used to set custom dimensions. Additional properties available per breakpoint, i.e. `heightSm`, `heightMd`, `heightLg`, `widthSm`, `widthMd`, `widthLg`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/fixedSize.html) -->
  <!-- The below content is automatically added from ../apiExamples/fixedSize.html -->
  <auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat" height="350px" width="300px">
    <div style="height: 100%; color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <auro-header level="2" display="600">View all destinations</auro-header>
      <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
    </div>
  </auro-background>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fixedSize.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/fixedSize.html -->

```html
<auro-background bg="url(https://images.contentstack.io/v3/assets/blt2cefe12c88e9dd91/blt4dde4105498391f8/6633c2581dbb0973c00b8783/ad2.png) center center/cover no-repeat" height="350px" width="300px">
  <div style="height: 100%; color: var(--ds-color-text-primary-inverse); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ../src/tokens.scss -->

```scss
@import './../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables';

:host {
  --ds-auro-background-container-color: transparent;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
