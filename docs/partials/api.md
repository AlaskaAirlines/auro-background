
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property & Attribute Examples

### Background

Use the `bg` attribute to set the background image.

Different `bg` values may be set for each breakpoint using the `bgSm`, `bgMd` and `bgLg` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/breakpoints.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/breakpoints.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Height and Width

Use the `height` and `width` attributes to set a fixed height/width on the element. 

The `height` and `width` attributes accept any valid CSS value for height/width (e.g. `100px`, `12rem`, `50vw`).

Custom height/width can be set per breakpoint using the `heightSm`, `heightMd`, `heightLg`, `widthSm`, `widthMd`, and `widthLg` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/fixed-size.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/fixed-size.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Inset

Use the `inset` attribute to add padding inside the element.

The `inset` attribute supports the following values: `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl` or any CSS value which is valid for the CSS `padding` rule (e.g. `1rem`).

Note: When using a custom CSS rule do not include a semi-colon at at the end of the string (e.g. `1rem` is valid, `1rem;` is invalid).

Inset values may also be set for each breakpoint size via the `insetSm`, `insetMd` and `insetLg` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inset.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inset.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
