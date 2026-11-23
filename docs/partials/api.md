
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

## Property and attribute examples

### Background

Use the `bg` attribute to set the background. It accepts any CSS `background` value, such as an image, a color, or a gradient. Set a different `bg` value for each breakpoint with `bgSm`, `bgMd`, and `bgLg`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/breakpoints.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/breakpoints.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Height and width

Use the `height` and `width` attributes to set a fixed height and width on the element. Both accept any valid CSS value, such as `100px`, `12rem`, or `50vw`.

Set a different size at each breakpoint with `heightSm`, `heightMd`, `heightLg`, `widthSm`, `widthMd`, and `widthLg`.

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

The `inset` attribute accepts `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, or `xxxl`, or any CSS value that `padding` accepts, such as `1rem`.

When using a custom CSS value, don't end it with a semicolon. For example, `1rem` is valid and `1rem;` isn't.

Set a different inset at larger screen sizes with `insetSm` and `insetMd`. The `insetLg` attribute doesn't currently take effect: the large breakpoint uses the `insetMd` value.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inset.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inset.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
